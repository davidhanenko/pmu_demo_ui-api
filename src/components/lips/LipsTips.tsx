import { lipsTips } from '@/constants';

export const LipsTips = () => {
  return (
    <div className='w-full px-4 md:px-8 py-16'>
      <h4 className='text-black text-3xl font-semibold pb-4'>
        <span className='text-red-600'>Tips</span> to
        make your experience exceptional
      </h4>
      <ul className='leading-6'>
        {lipsTips.map(item => (
          <li className='my-2 text-slate-900' key={item.id}>
            <span className='mr-1 text-xl font-medium text-red-600 '>
              {item.id}
            </span>
            <p className='inline'>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
