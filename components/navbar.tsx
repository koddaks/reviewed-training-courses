'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import UserNav from './user-nav';

const Navbar = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  return (
    <div className="flex justify-between items-center w-full md:gap-4">
      <div className="flex flex-wrap w-full justify-center md:w-full sm:justify-center md:justify-end">
        <Button size="sm" variant="ghost" className='text-xs md:text-sm lg:text-lg px-1' asChild>
          <Link href="/courses">Курси</Link>
        </Button>
        <Button size="sm" variant="ghost" className='text-xs md:text-sm lg:text-lg px-1' asChild>
          <Link href="/about-us">Про нас</Link>
        </Button>
        <Button size="sm" variant="ghost" className='text-xs md:text-sm lg:text-lg px-1' asChild>
          <Link href="/faq">FAQ</Link>
        </Button>     
      </div>
      <div className=" max-w-24 md:w-1/5 flex justify-end sm:ml-auto">
        {isAuthorized ? (
          <UserNav onClick={() => setIsAuthorized(!isAuthorized)} />
        ) : (
          <Button
            onClick={() => setIsAuthorized(!isAuthorized)}
            size="lg"
           className='w-6 h-8 sm:w-full'
            asChild
          >
            {/* <Link href="/sign-in">Вхід</Link> */}
            <p> Вхід</p>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
