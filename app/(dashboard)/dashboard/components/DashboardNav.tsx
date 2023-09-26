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

export default function DashboardNav() {
  return (
    <nav className='flex justify-between p-6 bg-slate-900'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href='/dashboard/about'>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
              >
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/dashboard/brows' legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
              >
                Brows
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              href='/dashboard/lips'
              legacyBehavior
              passHref
            >
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
              >
                Lips
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/dashboard/contacts' legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
              >
                Contacts
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className=' ml-auto '>
        <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  );
}
