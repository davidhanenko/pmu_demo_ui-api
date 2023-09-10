'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import useScrollPosition from '../../../../lib/useScrollPosition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

import { useNav } from '../../../../context/navContext';
import { NavLink } from './NavLink';
import { navLinks } from '../../../../constants';

import logo from '../../../../assets/images/logo.svg';

export const Navbar = () => {
  const router = useRouter();
  const { setActive, isOpen, setOpen } = useNav();

  const scrollPosition = useScrollPosition();

  const handleLogoClick = () => {
    router.push('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setActive('');
  };

  return (
    <nav className='bg-slate-950 fixed top-0 py-2 flex items-center z-40 w-full'>
      <div className='w-full items-center mx-auto px-4 grid grid-cols-12'>
        <div className='flex items-center col-span-3'>
          <div
            onClick={handleLogoClick}
            className='cursor-pointer px-2'
          >
            <Image
              className='transition-all'
              src={logo}
              alt='logo'
              height={scrollPosition > 100 ? 50 : 80}
              width={scrollPosition > 100 ? 50 : 80}
            />
            {scrollPosition < 100 && (
              <>
                <p
                  className={`text-white text-center text-xs sm:block hidden `}
                >
                  PMU artist
                </p>
                <p className='text-white text-center sm:block hidden'>
                  NYC
                </p>
              </>
            )}
          </div>
        </div>
        <ul
          className={`list-none col-span-9 px-6 w-full h-full hidden flex-col justify-between items-start sm:flex sm:flex-row `}
        >
          {navLinks.map(link => (
            <NavLink key={link?.id} link={link} />
          ))}
        </ul>

        <div
          className='sm:hidden flex col-span-9 justify-end pr-6 cursor-pointer transition'
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? (
            <FontAwesomeIcon
              icon={faXmark}
              className='text-white w-6 h-6 transition-all hover:text-indigo-300'
            />
          ) : (
            <FontAwesomeIcon
              icon={faBarsStaggered}
              className='text-white w-6 h-6 transition-all hover:text-indigo-300'
            />
          )}
        </div>
        {isOpen && (
          <div
            className={`${
              scrollPosition > 100 ? 'top-12' : 'top-16'
            } transition-all absolute right-0 select-none bg-gradient-to-b from-slate-950 from-60% to-slate-800 py-8 min-w-[160px] sm:hidden`}
          >
            <ul
              className={`list-none px-6 w-full flex flex-col gap-y-2 items-start `}
            >
              {navLinks.map(link => (
                <NavLink key={link?.id} link={link} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
