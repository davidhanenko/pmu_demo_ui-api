type SectionHeaderProps = {
  title: string;
  color: string;
};

const SectionHeader = ({
  title,
  color,
}: SectionHeaderProps) => {
  return (
    <div className='bg-cover bg-bottom bg-no-repeat h-[200px] md:h-[300px] flex items-end z-20 justify-center md:justify-start'>
      <h2
        className={`text-${color} text-6xl font-semibold  md:ml-[30%] mb-12`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
