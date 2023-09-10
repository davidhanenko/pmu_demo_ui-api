'use client';

import { useEffect, useState } from 'react';
import { navLinks } from '../../../../constants';
import { useNav } from '../../../../context/navContext';
import { NavLink } from '../navbar';

export const Footer = () => {
  const [showActiveLink, setShowActiveLink] =
    useState<boolean>(false);

  useEffect(() => {
    setShowActiveLink(false);
  }, [showActiveLink]);

  return (
    <footer className='text-white px-4 md:px-12 py-12'>
      <div>
        <p className='tex-md md:text-lg'>
          Thank you for visiting us. We look forward to
          helping you discover your most beautiful self!
        </p>
      </div>
      <div className='flex justify-center mt-12'>
        <ul
          className={`list-none w-fit py-2 px-6 flex gap-6 flex-row justify-center items-start [&>li]:text-sm border-t-2 border-purple3`}
        >
          {navLinks.map(link => (
            <NavLink
              key={link?.id}
              link={link}
              showActiveLink={showActiveLink}
            />
          ))}
        </ul>
      </div>

      <p className='text-white text-xs w-full flex justify-end mt-6'>
        © Copyright
      </p>
    </footer>
  );
};
