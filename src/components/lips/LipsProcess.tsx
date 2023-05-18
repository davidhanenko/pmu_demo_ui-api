import Image from 'next/image';
import { LipsTips } from './LipsTips';
import { lipsProcess, lipsTechniques } from '@/constants';

export const LipsProcess = () => {
  return (
    <div className='min-h-screen bg-red-lips_1 bg-right-top bg-contain bg-no-repeat relative md:-top-24 before:content-[""] before:bg-gradient-to-l from-black to-transparent before:opacity-80 before:absolute before:top-0 before:left-0 before:w-full before:h-full'>
      <div className='relative p-4 md:p-16 h-full'>
        <div className='h-full md:p-8 flex flex-wrap gap-12 items-center md:justify-around flex-col md:flex-row bg-gradient-to-r from-[#ffffff1] to-[#ffffff0] backdrop-blur-md shadow-lg border-[1px] border-white/10'>
          {/* left */}
          <div className='max-w-[550px] p-2 py-8 md:p-8 backdrop-blur bg-gradient-to-r from-red-300/40 to-red-200/10 shadow-lg'>
            <h4 className='text-red-600 text-3xl font-semibold pb-4'>
              Lips Permanent Makeup Process:
            </h4>
            <ul className='leading-6'>
              {lipsProcess.map(item => (
                <li
                  className='my-2 text-slate-800'
                  key={item.id}
                >
                  <span className='mr-1 text-xl font-medium text-indigo-900 '>
                    {item.title}
                  </span>
                  <p className='inline'>{item.step}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* right */}
          <div className='lg:self-start p-2 py-8 md:p-8'>
            {lipsTechniques.map(item => (
              <div key={item.id} className='relative my-4'>
                <Image
                  src={`/../public/images/${item.image}`}
                  alt=''
                  width={250}
                  height={250}
                />
                <p className='absolute bottom-0 w-full p-1 text-lg text-black bg-slate-400/50 '>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <LipsTips />
    </div>
  );
};
