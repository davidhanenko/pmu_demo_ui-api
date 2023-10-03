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

import { ImageUpload } from '../../components/ImageUpload';
import { Separator } from '@/components/ui/separator';

interface IUploadProps {
  videoUrl?: string;
}

const formSchema = z.object({
  videoUrl: z.string(),
});

export const VideoBg: React.FC<IUploadProps> = ({
  videoUrl,
}) => {
  // const action = initData?.text ? 'Save' : 'Create';
  // const toastMessage = initData?.text
  //   ? 'Video paragraph uploaded.'
  //   : 'Video paragraph created.';

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      videoUrl: videoUrl || '',
    },
  });

  const onSubmit = async (
    data: z.infer<typeof formSchema>
  ) => {
    try {
      setLoading(true);

      await axios.patch(`/api/brows/video`, {
        videoUrl: data.videoUrl,
      });

      toast.success('Video uploaded');
      router.refresh();
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className='bg-slate-700 mt-4 p-4'>
        <div>
          {' '}
          <h2 className='text-xl font-bold'>
            Video background{' '}
          </h2>{' '}
          <p className='mt-2 text-muted-foreground'>
            This is a video background of the brows page.{' '}
          </p>{' '}
        </div>
        <Separator className='my-4' />
        <div></div>
        <div className='space-y-2'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='flex flex-col lg:flex-row gap-4 w-full'>
                <FormField
                  control={form.control}
                  name='videoUrl'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel>Background video</FormLabel>
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

                <div className='pt-2 flex flex-row justify-between lg:flex-col lg:justify-center items-end gap-2  h-full'>
                  <Button
                    type='submit'
                    disabled={loading}
                    className='text-green-500'
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
};

// 'use client';

// import { useState } from 'react';

// import { Separator } from '@/components/ui/separator';
// import { Button } from '@/components/ui/button';

// export const VideoBg = ({
//   videoUrl,
// }: {
//   videoUrl: string;
// }) => {
//   const initData = {
//     videoUrl: '',
//     api: '/api/brows/steps',
//     id: '',
//   };

//   return (
//     <section className='col-span-2 md:col-span-1 bg-slate-700 p-4'>
//       <div>
//         <h2 className='text-xl font-bold'>
//           Video background
//         </h2>
//         <p className='mt-2 text-muted-foreground'>
//           This is a video background of the brows page.
//         </p>
//       </div>
//       <Separator className='my-4' />
//       <div>
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className='space-y-8 w-full'
//           >
//             <FormField
//               control={form.control}
//               name='imageUrl'
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Background image</FormLabel>
//                   <FormControl>
//                     <ImageUpload
//                       value={
//                         field.value ? [field.value] : []
//                       }
//                       disabled={loading}
//                       onChange={url => field.onChange(url)}
//                       onRemove={() => field.onChange('')}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <div className='md:grid md:grid-cols-3 gap-8'>
//               <FormField
//                 control={form.control}
//                 name='label'
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Label</FormLabel>
//                     <FormControl>
//                       <Input
//                         disabled={loading}
//                         placeholder='Billboard label'
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <Button
//               disabled={loading}
//               className='ml-auto'
//               type='submit'
//             >
//               Save
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </section>
//   );
// };
