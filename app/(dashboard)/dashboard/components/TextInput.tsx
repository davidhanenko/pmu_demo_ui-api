'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { set, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

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

interface ITextInputProps {
  initData?: {
    text: string;
    api: string;
    id: string;
  };
}

const formSchema = z.object({
  text: z.string(),
});

export const TextInput: React.FC<ITextInputProps> = ({
  initData,
}) => {
  const [value, setValue] = useState(initData?.text || '');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
    },
  });

  const onSubmit = async (
    data: z.infer<typeof formSchema>
  ) => {
    try {
      setLoading(true);
      await axios.patch(
        `${initData?.api}/${initData?.id}`,
        { text: value }
      );

      toast.success('Text paragraph saved');
      router.refresh();
      setValue('');
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleOnChange = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className='space-y-4 py-2 pb-4'>
      <div className='space-y-2'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='text'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Text Paragraph</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder='Text Paragraph'
                      {...field}
                      value={value}
                      onChange={handleOnChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
              <Button disabled={loading} type='submit'>
                Save
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
