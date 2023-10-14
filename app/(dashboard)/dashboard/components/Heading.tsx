import { Separator } from "@/components/ui/separator";


export const Heading = ({ name }: { name: string }) => {
  return (
    <header className='text-3xl py-4'>
      <div>
        <span className='text-slate-400 font-bold  capitalize'>
          {name}
        </span>{' '}
        Settings
      </div>
      <Separator className='my-4' />
    </header>
  );
};
