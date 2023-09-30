export const Heading = ({ name }: { name: string }) => {
  return (
    <header className='text-2xl py-4'>
      <span className='text-slate-400 font-bold  capitalize'>
        {name}
      </span>{' '}
      Settings
    </header>
  );
};
 