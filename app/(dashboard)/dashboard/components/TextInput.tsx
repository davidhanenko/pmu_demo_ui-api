'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import { AlertModal } from './AlertModal';

interface ITextInputProps {
  initData?: {
    text: string;
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
});

export const TextInput: React.FC<ITextInputProps> = ({
  initData,
  cb,
}) => {
  const action = initData?.text ? 'Save' : 'Create';
  const toastMessage = initData?.text
    ? 'Text paragraph updated.'
    : 'Text paragraph created.';

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: initData?.text || '',
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
          { text: data.text }
        );
      } else {
        await axios.patch(`${initData?.api}`, {
          text: data.text,
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
        toast.success('Text paragraph deleted');
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
      <div className='w-full py-2'>
        <div className='space-y-2'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='flex flex-col lg:flex-row gap-4 w-full'>
                <FormField
                  control={form.control}
                  name='text'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel>Text paragraph</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          disabled={loading}
                          placeholder='Text Paragraph'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className='pt-2 flex flex-row justify-between lg:flex-col lg:justify-center items-end gap-2  h-full'>
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
                      <FontAwesomeIcon
                        icon={faTrash}
                        className='w-4 h-4 text-red-500'
                      />
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};
