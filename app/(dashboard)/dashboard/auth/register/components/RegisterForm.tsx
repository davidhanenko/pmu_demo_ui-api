'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { signIn } from 'next-auth/react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';
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
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'Name is required' }),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .trim()
    .toLowerCase(),
  password: z
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters',
    })
    .trim(),
  secret: z.string().nonempty(),
});

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      secret: '',
    },
  });

  const onSubmit = async (
    data: z.infer<typeof formSchema>
  ) => {
    try {
      setLoading(true);
      const res = await axios.post(
        '/api/auth/register',
        {
          name: data.name,
          email: data.email,
          password: data.password,
          secret: data.secret,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      toast.success('Registered successfully.');
      router.push('/dashboard');

      setLoading(false);
      if (!res.data.ok) {
        return;
      }

      signIn(undefined, { callbackUrl: '/dashboard' });
    } catch (error: any) {
      toast.error('Something went wrong, please try again.');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-fit  bg-slate-700 p-8 w-full md:w-[500px] space-y-8 rounded-md'>
      <h2 className='text-2xl font-bold '>Register form</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-4 w-full '>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='text-slate-400'>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className='text-white'
                      type='text'
                      disabled={loading}
                      placeholder='Name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                      className='text-white'
                      type='email'
                      disabled={loading}
                      placeholder='Email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='text-slate-400'>
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className='text-white'
                      type='password'
                      disabled={loading}
                      placeholder='Password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='secret'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='text-slate-400'>
                    Secret
                  </FormLabel>
                  <FormControl>
                    <Input
                      className='text-white'
                      type='password'
                      disabled={loading}
                      placeholder='Secret'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className=''>
              <Button
                type='submit'
                disabled={loading}
                className='text-green-500 order-2 lg:order-1 ml-auto'
              >
                Register
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
