import Image, { StaticImageData } from 'next/image';

type SectionHeaderProps = {
  title: string;
  textColorClass: string;
  src?: StaticImageData;
};

export const SectionHeader = ({
  title,
  textColorClass,
  src,
}: SectionHeaderProps) => {
  return (
    <div className='bg-white h-[200px] md:h-[300px] flex items-end z-20 justify-left pb-2 md:pb-4 px-2 md:px-4'>
      <h2
        className={`${textColorClass} text-6xl font-bold ml-[5%] md:ml-[25%] mb-12 z-10`}
      >
        {title}
      </h2>
      {src && (
        <Image className='absolute right-2 lg:right-4  z-0' src={src} alt='' width={75} height={75} />
      )}
    </div>
  );
};
