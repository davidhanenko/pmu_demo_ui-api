import { Text } from '@prisma/client';

export const BrowsDescription = ({
  browsDescription,
}: {
  browsDescription: Text[];
}) => {
  return (
    <div className='absolute text-white top-0 sm:top-auto sm:bottom-0 right-0 sm:w-70 lg:w-[55%] h-full md:h-[300px] lg:h-[350px] flex flex-col justify-end z-20 p-6 md:p-8 tracking-wider overflow-scroll sm:overflow-visible'>
      <div className='h-full w-full'>
        {!!browsDescription &&
          browsDescription.map(item => (
            <p
              key={item.id}
              className='my-4 text-sm md:text-base'
            >
              {item.text}
            </p>
          ))}
        <div className='h-6 w-full' />
      </div>
    </div>
  );
};
