'use client';

import { GraduationCap, MapPin, ShieldCheck, StarIcon } from 'lucide-react';

import Image from 'next/image';

import ExpandableText from './expandable-text';
import { Button } from './ui/button';
import Link from 'next/link';

type CourseCardProps = {
  id: number;
  title: string;
  category: number | null;
  price: string;
  company: string;
  age: string;
  location: string;
  website: string;
  contact: string;
  description: string;
};

const CourseCard = ({
  id,
  title,
  category,
  price,
  company,
  age,
  location,
  website,
  contact,
  description,
}: CourseCardProps) => {
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      <div className="flex flex-row justify-between  pb-6">
        <h2 className="text-sm font-bold w-3/4">{title}</h2>
        <Image
          src={`/card-lemon-logo.svg`}
          alt={title}
          width={60}
          height={60}
        />
      </div>
      <div className="flex flex-col gap-2 border-t-2 border-b-2 pt-6 pb-4 mb-4">
        <div className="flex">
          <p className="text-gray-500 w-1/2 truncate">
            By <span className="text-black">{company}</span>
          </p>
          <div className="flex gap-2 mb-2">
            <MapPin className="text-gray-500" />{' '}
            <span className="text-green-500">Online</span>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <Image
            src={`/card.svg`}
            alt="Credit card image"
            width={24}
            height={24}
          />
          <p className="text-zinc-400 text-xs">{price}</p>
          <p className="flex gap-1 sm:hidden">
            <StarIcon size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="text-xs">(4.0)</span>
          </p>
        </div>
        <div className="flex gap-1 border-[1px] p-1 rounded-md mb-4">
          <GraduationCap className="text-zinc-400" />
          <ul className="flex w-full flex-wrap gap-2 list-inside list-disc">
            <li className="text-yellow-600 bg-yellow-100 px-2 rounded-md">
              <span className="-ml-2">Programming</span>
            </li>
            <li className="text-yellow-600 bg-yellow-100 px-2 rounded-md">
              <span className="-ml-2">Development</span>
            </li>
          </ul>
        </div>
        <div className="mb-2">
          <ExpandableText text={description} />
        </div>
        <div className='flex gap-2 items-center'>
          <Image
            src="/verified-users.png"
            alt="Verified users"
            width={66}
            height={24}
          />
          <p className="text-gray-400">100 Reviews</p>
          <ShieldCheck className="text-green-500" />
        </div>
      </div>
      <Button className="rounded-xl bg-yellow-400 text-black font-bold h-12 hover:bg-yellow-400/70" asChild>
        <Link href={`/courses/${id}`}>Read reviews</Link>
      </Button>
    </div>
  );
};

export default CourseCard;
