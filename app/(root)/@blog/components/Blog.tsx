import { SectionHeader } from '../../components/shared/SectionHeader';

import blogImg from 'assets/images/blog1.png';

export const Blog = () => {
  return (
    <section id='blog' className='min-h-screen'>
      <SectionHeader
        title='Blog'
        textColorClass='text-indigo-800'
        src={blogImg}
      />
    </section>
  );
};
