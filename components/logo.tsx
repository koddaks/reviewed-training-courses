import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  variant?: 'white' | 'black';
};
export const Logo = ({ variant }: LogoProps) => {

  const width = variant === 'white' ? 250 : 176;
  const height = variant === 'white' ? 52 : 36;
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src={variant === 'white' ? '/logo-white.svg' : '/logo-black.svg'} alt="logo" width={width} height={height} />
      </div>
    </Link>
  );
};
