'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import UserNav from './user-nav';

const Navbar = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex">
        <Button size="sm" variant="ghost" asChild>
          <Link href="/courses">Курси</Link>
        </Button>
        <Button size="sm" variant="ghost" asChild>
          <Link href="/about-us">Про нас</Link>
        </Button>
      </div>
      <div className="w-full flex justify-end">
        {isAuthorized ? (
          <UserNav onClick={() => setIsAuthorized(!isAuthorized)} />
        ) : (
          <Button
            onClick={() => setIsAuthorized(!isAuthorized)}
            size="lg"
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
