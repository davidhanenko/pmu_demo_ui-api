import { CldVideoPlayer } from 'next-cloudinary';

export const BrowsDescription = () => {
  return (
    <div className='col-span-12 lg:col-span-7 flex flex-col justify-between gap-8'>
      <div className='list-none relative m-12 md:m-16 bg-overlay-light md:w-2/4 p-8  text-3xl font-bold z-10 h-full w-full bg-gradient-to-r from-violet-400 from-10% via-black via-40% to-violet-400 to-90% text-transparent bg-clip-text bg-[length:400%_30px] animate-move_bg flex flex-col justify-center'>
        {' '}
        <p className=''>Powder brows</p>
        <p className=''>Ombre brows</p>
        <p className=''>Combo brows</p>
      </div>

      {/* <ul className='list-none relative m-12 md:m-16 bg-overlay-light md:w-2/4 p-8'>
        <li className='relative text-violet-400 text-xl z-10'>
          Powder brows
        </li>
        <li className='relative text-violet-600 text-xl z-10'>
          Ombre brows
        </li>
        <li className='relative text-violet-800 text-xl z-10'>
          Combo brows
        </li>
      </ul> */}

      <div className='relative'>
        <div className='absolute bg-[#000] top-0 left-0 opacity-70 z-10 w-full h-full' />
        <div className='absolute text-white top-0 h-full flex flex-col sm:justify-center z-20 p-8  tracking-wider overflow-y-scroll'>
          <p className='text-sm sm:text-lg'>
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
