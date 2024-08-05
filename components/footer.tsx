import { Logo } from './logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full flex items-center min-h-64 p-4 border-t bg-black-1000 text-white ">
      <div className="container mx-auto flex items-center w-full px-8 lg:px-6 xl:px-0">
        <Logo variant="white" />
        <div className="relative left-1/3 transform -translate-x-1/3 flex flex-row gap-24 justify-self-end">
          <nav className="md:flex md:w-auto flex-col w-full gap-1 justify-start">
            <p>Навігація</p>
            <Link href="/about-us">Про нас</Link>
            <Link href="/courses">Курси</Link>
          </nav>
          <nav className="md:flex md:w-auto flex-col w-full gap-1 justify-start">
            <p>Інформація</p>
            <Link href="/about-us">Про нас</Link>
            <Link href="/courses">Курси</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
