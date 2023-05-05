/* eslint-disable react/display-name */
import React from 'react';
import Link from 'next/link';
import { useNav } from '@/context/navContext';

type LinkBtnProps = {
  title: string;
  href?: string;
};

interface LinkProps {
  link: {
    id: string;
    title: string;
  };
}

//  link functional component - button
const LinkBtn = React.forwardRef(
  (
    { href, title }: LinkBtnProps,
    ref: React.LegacyRef<HTMLAnchorElement> | undefined
  ) => {
    const { setActive, isOpen, setOpen } = useNav();

    const handleClick = () => {
      setActive(title);
      isOpen && setOpen(false);
    };

    return (
      <a
        href={href}
        ref={ref}
        onClick={handleClick}
        className='tracking-wider sm:tracking-wide'
      >
        {title}
      </a>
    );
  }
);

export const NavLink: React.FC<LinkProps> = ({ link }) => {
  const { active } = useNav();

  return (
    <li
      className={`${
        active == link.title
          ? 'text-white'
          : `text-slate-500`
      } hover:text-white text-lg cursor-pointer`}
    >
      <Link href={`#${link.id}`} passHref legacyBehavior>
        <LinkBtn title={link.title} />
      </Link>
      <div
        className={`${
          active === link.title
            ? 'scale-x-125'
            : 'scale-x-0'
        } text-center select-none border-b-2 border-indigo-600 transition-transform scale-y-1}`}
      ></div>
    </li>
  );
};
