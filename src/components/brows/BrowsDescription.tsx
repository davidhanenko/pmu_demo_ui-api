import Image from 'next/image';
import { CldVideoPlayer } from 'next-cloudinary';
import brows_1 from '../../assets/images/brows_2tr.png';

export const BrowsDescription = () => {
  return (
    <div className='col-span-12 lg:col-span-7'>
      <div className='z-10 pt-12 flex justify-center items-center relative before:content-[""] before:bg-black before:opacity-80 before:absolute before:top-0 before:left-0 before:w-full before:h-full'>
        <Image
          src={brows_1}
          alt='Brows'
          width={700}
          height={200}
        />
        <h2 className='absolute text-6xl font-medium text-teal1 mb-4'>
          Powder brows
        </h2>
      </div>
      <div className='relative'>
        <div className='absolute bg-[#000] top-0 left-0 opacity-70 z-10 w-full h-full' />
        <div className='absolute text-white top-0 h-full flex flex-col sm:justify-center z-20 p-8  tracking-wider overflow-y-scroll'>
          {/* <h3 className='text-3xl text-teal1 mb-4'>
                Powder brows
              </h3> */}
          <p className='text-sm sm:text-lg '>
            At our studio, we specialize in the
            transformative art of permanent makeup, and one
            of our most popular techniques is the Powder
            Brows. Powder Brows is a semi-permanent eyebrow
            enhancement method that provides a soft and
            natural powdered effect. This technique is ideal
            for clients who desire a defined, filled-in brow
            look without the need for daily makeup
            application.
          </p>
          <p className='pt-4 text-sm sm:text-lg '>
            Our highly skilled and experienced artists
            utilize advanced microblading and shading
            techniques to create beautifully shaped and
            customized brows that perfectly complement your
            {/* facial features. With Powder Brows, you can wake
            up every day with flawless eyebrows that require
            minimal maintenance. */}
          </p>
        </div>
        <div className=''>
          <CldVideoPlayer
            width={500}
            height={250}
            autoPlay='on-scroll'
            quality='auto'
            loop={true}
            muted={true}
            controls={false}
            src='pmu/brows_v_1_isrehe'
          />
        </div>
      </div>
    </div>
  );
};
