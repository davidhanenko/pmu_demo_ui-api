'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { Text } from '@prisma/client';

interface IFadeInTypeProps {
  initData?: {
    text: 'string';
    apiID: 'string';
    api: 'string';
  };
}

const formSchema = z.object({
  text: z.string().min(10, {
    message: 'Text must be at least 10 characters.',
  }),
});

export const TextInput: React.FC<IFadeInTypeProps> = ({
  initData,
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const value = initData ? initData?.text : '';

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
    },
  });

  const onSubmit = async (
    values: z.infer<typeof formSchema>
  ) => {
    try {
      setLoading(true);
      await axios.post('/api/brows/description', values);
      router.refresh();
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
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
