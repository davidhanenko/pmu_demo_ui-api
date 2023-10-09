'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Trash } from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';

import { AlertModal } from './AlertModal';
import { ImageUpload } from './ImageUpload';
import { Input } from '@/components/ui/input';

interface ITextInputProps {
  initData?: {
    text: string;
    imageUrl: string;
    api: string;
    id: string;
  };
  cb?: (value: boolean) => void;
}

const formSchema = z.object({
  text: z
    .string()
    .min(10, {
      message: 'Text must be at least 10 characters',
    })
    .max(500, {
      message: 'Text must be at most 1000 characters',
    }),
  imageUrl: z.string(),
});

export const TextWithImageInput: React.FC<
  ITextInputProps
> = ({ initData, cb }) => {
  const action = initData?.text ? 'Save' : 'Create';
  const toastMessage = initData?.text
    ? 'Section updated.'
    : 'Section created.';

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: initData?.text || '',
      imageUrl: initData?.imageUrl || '',
    },
  });

  const onSubmit = async (
    data: z.infer<typeof formSchema>
  ) => {
    try {
      setLoading(true);

      if (!!initData?.text) {
        await axios.patch(
          `${initData?.api}/${initData?.id}`,
          { text: data.text, imageUrl: data.imageUrl }
        );
      } else {
        await axios.patch(`${initData?.api}`, {
          text: data.text,
          imageUrl: data.imageUrl,
        });
      }

      toast.success(toastMessage);
      router.refresh();

      // close the input form
      cb?.(false);
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);

      if (initData?.api && initData?.id) {
        await axios.delete(
          `${initData?.api}/${initData?.id}`
        );

        router.refresh();
        toast.success('Section deleted');
        // close the input form
        cb?.(false);
      }
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className='py-2'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-4'>
              <div className='space-y-4'>
                <FormField
                  control={form.control}
                  name='text'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-slate-400'>
                        Text paragraph
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder='Text paragraph'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='imageUrl'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-slate-400'>
                        Background video
                      </FormLabel>
                      <FormControl>
                        <ImageUpload
                          value={
                            field.value ? [field.value] : []
                          }
                          disabled={loading}
                          onChange={url =>
                            field.onChange(url)
                          }
                          onRemove={() =>
                            field.onChange('')
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mt-2 flex flex-row justify-between gap-2'>
                <Button
                  type='submit'
                  disabled={loading}
                  className='text-green-500'
                >
                  {action}
                </Button>
                {!!initData?.id && (
                  <Button
                    type='button'
                    variant='outline'
                    size='icon'
                    onClick={() => setOpen(true)}
                  >
                    <Trash className='w-4 h-4 text-red-500' />
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};
