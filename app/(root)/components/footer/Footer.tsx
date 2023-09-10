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
    <footer className='text-white p-4 md:p-8'>
      <div>
        <p className='text-lg'>
          Thank you for visiting us. We look forward to
          helping you discover your most beautiful self!
        </p>
      </div>

      <ul
        className={`list-none pt-8 pb-2 flex gap-6 flex-row justify-center items-start [&>li]:text-sm`}
      >
        {navLinks.map(link => (
          <NavLink
            key={link?.id}
            link={link}
            showActiveLink={showActiveLink}
          />
        ))}
      </ul>
    </footer>
  );
};
