import Image from 'next/image';
import { LipsTips } from './LipsTips';
import { lipsProcess, lipsTechniques } from '@/constants';

export const LipsProcess = () => {
  return (
    <div className='bg-red-lips_1 bg-right-top bg-contain bg-no-repeat relative bg-overlay-gradient'>
      <div className='relative p-4 py-8 md:p-16 h-full'>
        <div className='h-full md:p-8 flex flex-wrap gap-12 items-center md:justify-around flex-col md:flex-row bg-glass'>
          {/* left */}
          <div className='max-w-[550px] p-2 py-8 md:p-8 bg-glass'>
            <h4 className='text-red-500 text-3xl font-semibold pb-4'>
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

          <div className='w-full lg:w-fit py-12 grid gap-4 justify-items-center grid-cols-fill-250 lg:grid-auto-row'>
            {lipsTechniques.map(item => (
              <div
                key={item.id}
                className='relative w-[250px] h-[250px]'
              >
                <Image
                  src={`/../public/images/${item.image}`}
                  alt=''
                  // width={250}
                  // height={250}
                  fill
                />
                <p className='absolute bottom-0 p-1 text-lg text-black bg-red-400 w-full'>
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
