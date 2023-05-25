import Image, { StaticImageData } from 'next/image';

type SectionHeaderProps = {
  title: string;
  color: string;
  src?: StaticImageData;
};

export const SectionHeader = ({
  title,
  color,
  src,
}: SectionHeaderProps) => {
  return (
    <div className='bg-white h-[200px] md:h-[300px] flex items-end z-20 justify-between pb-2 md:pb-4 px-2 md:px-4'>
      <h2
        className={`text-${color} text-6xl font-bold ml-[10%] md:ml-[25%] mb-12`}
      >
        {title}
      </h2>
      {src && (
        <Image
          className=''
          src={src}
          alt=''
          width={75}
          height={75}
        />
      )}
    </div>
  );
};
