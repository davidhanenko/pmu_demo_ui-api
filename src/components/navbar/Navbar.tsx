import { useEffect, useState } from 'react';
import { navLinks } from '@/constants';
import { useNav } from '@/context/navContext';
import { NavLink } from './NavLink';
import logo from '../../assets/images/logo.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

type LinkType = {
  id: string;
  title: string;
};

export const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const router = useRouter();
  const { setActive, isOpen, setOpen } = useNav();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    router.push('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setActive('');
  };

  // useEffect(() => {
  //   scroll < 300 && setActive('');
  // }, [scroll, setActive]);


  return (
    <nav className='bg-slate-950 fixed top-0 py-2 w-full flex items-center z-20'>
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
              height={scroll > 100 ? 50 : 80}
              width={scroll > 100 ? 50 : 80}
            />
            {scroll < 100 && (
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
              scroll > 100 ? 'top-12' : 'top-16'
            } transition-all absolute right-0 select-none bg-gradient-to-b from-slate-950 to-cyan-800 py-8 min-w-[160px] sm:hidden`}
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
