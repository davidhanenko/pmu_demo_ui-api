import { CldVideoPlayer } from 'next-cloudinary';

export const BgVideo = () => {
  return (
    <div className='relative md:-top-24 z-[-1]'>
      <div className='absolute top-0 left-0 bg-[#0000000] h-full w-full z-10'>
        <div className='absolute flex justify-center md:right-16 top-8 md:top-1/3 z-20'>
          <div className='relative'>
            <div className='hidden md:block h-full md:h-[300px] w-full md:w-[700px] bg-[#421414a6] md:absolute top-0 right-0'></div>
            <div className='h-full md:h-[300px] w-full md:w-[700px] bg-[#da31315f] md:absolute top-0  md:top-6 right-0 md:right-6 flex items-center justify-center md:px-12'>
              <p className='text-white p-4 sm:p-8 md:p-4 text-sm md:text-lg tracking-wide'>
                Enhance Your Natural Beauty with Lips
                Permanent Makeup Introduction: Welcome to my
                place, where we specialize in enhancing your
                natural beauty through the art of permanent
                makeup. In this section, we&apos;ll guide
                you through the lips permanent makeup
                process, available techniques and provide helpful tips.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CldVideoPlayer
          width='1460'
          height='822'
          autoPlay='on-scroll'
          quality='auto'
          loop={true}
          muted={true}
          controls={false}
          src='pmu/pexels-engin-akyurt-6067531-3840x2160-30fps_f5x5an'
        />
      </div>
    </div>
  );
};
