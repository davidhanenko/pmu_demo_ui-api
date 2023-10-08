import { Separator } from "@/components/ui/separator";

interface ISubHeadingProps { 
  title: string;
  description: string;
}

export const SubHeading: React.FC<ISubHeadingProps> = ( {title, description } ) => { 
   return <div>
    <h2 className='text-xl font-bold text-slate-900'>
      {title}
    </h2>
    <p className='mt-2 text-muted-foreground'>
      {description}
    </p>
    <Separator className='my-4' />
  </div>;
}