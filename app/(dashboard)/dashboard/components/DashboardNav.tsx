'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from '@/components/ui/sheet';
import { ArrowBigLeftDash } from 'lucide-react';
import { Menu } from 'lucide-react';

import { navLinks } from '@/constants';

export default function DashboardNav() {
  return (
    <nav className='fixed w-full z-50 flex justify-between p-6 bg-slate-900'>
      <NavigationMenu className='hidden md:block'>
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

      <Sheet>
        <SheetTrigger className='text-white md:hidden order-2'>
          <Menu />
        </SheetTrigger>
        <SheetContent className='bg-slate-800 text-white pt-16'>
          <NavigationMenu>
            <NavigationMenuList className='flex flex-col items-start space-x-0 space-y-4'>
              {navLinks.map(link => (
                <NavigationMenuItem key={link.id}>
                  <Link
                    href={`/dashboard/${link.id}`}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink className=' text-xl hover:text-slate-400 m-0'>
                      <SheetClose>{link.title}</SheetClose>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <SheetFooter className='mt-20 w-full flex items-end'>
            {/* <UserButton afterSignOutUrl='/' /> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <div className='flex flex-row items-center'>
        <Link
          href='/'
          className='text-white mr-6 px-2 py-1 flex gap-1 bg-slate-500 hover:bg-slate-600 rounded-sm'
        >
          <ArrowBigLeftDash />
          <span>back</span>
        </Link>
        {/* <UserButton afterSignOutUrl='/' /> */}
        <p className='text-white' onClick={() => signOut()}>sign out</p>
      </div>
    </nav>
  );
}
