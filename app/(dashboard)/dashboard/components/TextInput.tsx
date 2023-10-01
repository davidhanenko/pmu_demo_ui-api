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
import { useTextInput } from '@/hooks/useTextInput';
import { AlertModal } from './AlertModal';

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
  const action = initData?.text ? 'Save' : 'Create';

  const [value, setValue] = useState(initData?.text || '');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const addMoreState = useTextInput();

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

      if (!!initData?.text) {
        await axios.patch(
          `${initData?.api}/${initData?.id}`,
          { text: value }
        );

        toast.success('Text paragraph updated');
      } else {
        await axios.patch(`${initData?.api}`, {
          text: value,
        });

        toast.success('Text paragraph created');
        setValue('');
      }

      router.refresh();
      addMoreState.onAddMoreClose();
    } catch (error) {
      console.log(error);

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

      addMoreState.onAddMoreClose();
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
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className=' py-2'>
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
              <div className='pt-2 flex items-center justify-between w-full'>
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
                <Button
                  type='submit'
                  disabled={loading}
                  className='text-green-500'
                >
                  {action}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};
