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
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { AlertModal } from './AlertModal';

interface ITextWithHeaderInputProps {
  initData?: {
    order?: number | null;
    header?: string;
    text: string;
    api: string;
    id: string;
  };
  cb?: (value: boolean) => void;
}

const formSchema = z.object({
  order: z.number().int().nullable(),
  header: z
    .string()
    .min(1, {
      message: 'Header must be at least 1 character',
    })
    .max(100, {
      message: 'Header must be at most 100 characters',
    }),
  text: z
    .string()
    .min(10, {
      message: 'Text must be at least 10 characters',
    })
    .max(500, {
      message: 'Text must be at most 500 characters',
    }),
});

export const TextWithHeaderInput: React.FC<
  ITextWithHeaderInputProps
> = ({ initData, cb }) => {
  const action = initData?.text ? 'Save' : 'Create';
  const toastMessage = initData?.text
    ? 'Text section updated.'
    : 'Text section created.';

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      order: initData?.order || null,
      header: initData?.header || '',
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
          data
        );
      } else {
        await axios.patch(`${initData?.api}`, data);
      }
      toast.success(toastMessage);
      router.refresh();
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
      await axios.delete(
        `${initData?.api}/${initData?.id}`
      );

      router.refresh();
      toast.success('Text paragraph deleted');
      cb?.(false);
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
                <div className='w-full'>
                  <FormField
                    control={form.control}
                    name='order'
                    render={({ field }) => (
                      <FormItem className='w-full my-4'>
                        <FormLabel>
                          Section order number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type='number'
                            disabled={loading}
                            placeholder='Order number'
                            {...field}
                            value={field.value || ''}
                            onChange={event =>
                              field.onChange(
                                event.target.value !==
                                  '0' &&
                                  +event.target.value !== 0
                                  ? +event.target.value
                                  : null
                              )
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='header'
                    render={({ field }) => (
                      <FormItem className='w-full my-4'>
                        <FormLabel>Text header</FormLabel>
                        <FormControl>
                          <Input
                            type='text'
                            disabled={loading}
                            placeholder='Text section header'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='text'
                    render={({ field }) => (
                      <FormItem className='w-full my-4'>
                        <FormLabel>
                          Text paragraph
                        </FormLabel>
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
                </div>

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
                      <Trash className='w-4 h-4 text-red-500' />
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
