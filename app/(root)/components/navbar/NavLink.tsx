/* eslint-disable react/display-name */
import React from 'react';
import Link from 'next/link';
import { useNav } from '../../../../context/navContext';

type LinkBtnProps = {
  title: string;
  href?: string;
};

interface LinkProps {
  key: string;
  showActiveLink?: boolean;
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

    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      e.preventDefault();

      setActive(title);
      isOpen && setOpen(false);

      const href = e.currentTarget.href;
      const targetId = href.replace(/.*\#/, '');

      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: 'smooth',
      });
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

export const NavLink: React.FC<LinkProps> = ({
  link,
  showActiveLink = true,
}) => {
  const { active } = useNav();

  return (
    <li
      className={`${
        showActiveLink && active == link.title
          ? 'text-red-800'
          : `text-red-600`
      } transition-colors hover:text-red-800 text-lg cursor-pointer`}
    >
      <Link href={`#${link.id}`} passHref legacyBehavior>
        <LinkBtn title={link.title} />
      </Link>
      <div
        className={`${
          showActiveLink && active === link.title
            ? 'scale-x-125'
            : 'scale-x-0'
        } text-center select-none border-b-2 border-indigo-600 transition-transform scale-y-1}`}
      ></div>
    </li>
  );
};
