'use client';

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

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
import { Menu, LogOut, LogIn } from 'lucide-react';

import { navLinks } from '@/constants';
import { Button } from '@/components/ui/button';

export default function DashboardNav() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <nav className='fixed w-full max-w-[1600px] mx-auto z-50 flex justify-between p-6 bg-slate-900'>
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
          <SheetFooter className='mt-20 w-full flex items-end'></SheetFooter>
        </SheetContent>
      </Sheet>

      <div className='flex flex-row items-center space-x-2'>
        <Button variant='outline' className='bg-slate-600 hover:bg-slate-700'>
          {' '}
          <Link
            href='/'
            className='text-white mr-6 px-2 py-1 flex items-center gap-1'
          >
            <ArrowBigLeftDash />
            <span>back</span>
          </Link>
        </Button>

        {!!user ? (
          <Button
            variant='outline'
            className='text-white'
            onClick={() => signOut()}
          >
            sign out &nbsp;
            <LogOut />
          </Button>
        ) : (
          <Button
            variant='outline'
            className='text-white'
            onClick={() => signIn()}
          >
            sign in &nbsp;
            <LogIn />
          </Button>
        )}
      </div>
    </nav>
  );
}
