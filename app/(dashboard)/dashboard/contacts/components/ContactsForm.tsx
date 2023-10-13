'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { Contacts } from '@prisma/client';
import { SubHeading } from '../../components/SubHeading';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  phone: z.string(),
  email: z.string().email(),
  address1: z.string(),
  address2: z.string(),
  instagram: z.string(),
});

export const ContactsForm = ({
  contacts,
}: {
  contacts: Contacts;
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: contacts?.phone || '',
      email: contacts?.email || '',
      address1: contacts?.address1 || '',
      address2: contacts?.address2 || '',
      instagram: contacts?.instagram || '',
    },
  });

  const onSubmit = async (
    data: z.infer<typeof formSchema>
  ) => {
    try {
      setLoading(true);

      toast.success('message');
      router.refresh();
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='bg-slate-700 p-4'>
      <SubHeading
        title='Contacts'
        description='This is form to update contacts.'
      />

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-2 py-2'>
              {/* Phone */}
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='text-slate-400'>
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        disabled={loading}
                        placeholder='Phone number'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Instagram */}
              <FormField
                control={form.control}
                name='instagram'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='text-slate-400'>
                      Instagram
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        disabled={loading}
                        placeholder='Instagram username'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='text-slate-400'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        disabled={loading}
                        placeholder='Email address'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Address 1 */}
              <FormField
                control={form.control}
                name='address1'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='text-slate-400'>
                      Address, line 1
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        disabled={loading}
                        placeholder='Address, line 1'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Address 2 */}
              <FormField
                control={form.control}
                name='address2'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='text-slate-400'>
                      Address, line 2
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        disabled={loading}
                        placeholder='Address, line 2'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};
