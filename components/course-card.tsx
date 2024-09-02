'use client';

import { GraduationCap, MapPin, Plus, Star, StarIcon } from 'lucide-react';

import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

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
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full h-full bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      <div className="flex flex-row justify-between border-b-2 pb-6 mb-6">
        <h2 className="text-sm font-bold w-3/4">{title}</h2>
        <Image
          src={`/card-lemon-logo.svg`}
          alt={title}
          width={60}
          height={60}
        />
      </div>
      <div className="flex flex-col gap-2">
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
        <div className="flex gap-2 border-[1px] p-2 rounded-md">
          <GraduationCap className="text-zinc-400" />
          <ul className="flex justify-around w-full flex-wrap gap-1 list-inside list-disc">
            <li className="text-yellow-600 bg-yellow-100 px-2 rounded-md">
              <span className="-ml-2">Programming</span>
            </li>
            <li className="text-yellow-600 bg-yellow-100 px-2 rounded-md">
              <span className="-ml-2">Development</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div
            onClick={toggleDescription}
            className={cn(
              'relative text-gray-500 p-2 text-sm w-full transition-max-height text-ellipsis overflow-hidden',
              isExpanded
                ? 'max-h-transition-screen'
                : 'max-h-16 overflow-hidden'
            )}
          >
            {description}
            <Button
              onClick={toggleDescription}
              className={cn(
                'absolute -bottom-[2px] right-2 p-0 bg-white h-4 text-black',

                isExpanded && 'bottom-[10px] right-4'
              )}
              variant="ghost"
            >
              {isExpanded ? 'Show Less' : '...More Details'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
