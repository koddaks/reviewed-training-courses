import { Logo } from './logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-row fixed bottom-0 w-full h-[300px] p-4 border-t bg-black-1000 text-white">
      <div className="md:max-w-screen-2xl lg:max-w-[1280px] mx-auto flex items-center w-full">
        <Logo variant="white" />
        <div className="relative left-1/3 transform -translate-x-1/3 flex flex-row gap-24 justify-self-end">
          <nav className="md:flex md:w-auto flex-col w-full gap-1 justify-start">
            <p>Навігація</p>
            <Link href="/about-us">Про нас</Link>
            <Link href="/courses">Курси</Link>
          </nav>
          <nav className="md:flex md:w-auto flex-col w-full gap-1 justify-start">
            <p>Навігація</p>
            <Link href="/about-us">Про нас</Link>
            <Link href="/courses">Курси</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
