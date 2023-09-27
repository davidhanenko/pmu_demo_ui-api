'use client';

import { UserButton } from '@clerk/nextjs';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { navLinks } from '@/constants';

export default function DashboardNav() {
  return (
    <nav className='flex justify-between p-6 bg-slate-900'>
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map(link => (
            <NavigationMenuItem key={link.id}>
              <Link
                href={`/dashboard/${link.id}`}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  {link.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className='flex flex-row items-center'>
        <Link href='/' className='text-white mr-6'>
          back
        </Link>
        <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  );
}
