import { GraduationCap, MapPin, ShieldCheck, StarIcon } from 'lucide-react';

import Image from 'next/image';

import ExpandableText from './expandable-text';
import { Button } from './ui/button';
import Link from 'next/link';
import { fetchCourseById } from '@/data/courses';
import { fetchCompanyById } from '@/data/companies';
import { courseCards } from '@/mock/course-cards';
import { Rating } from '@mui/material';

type CourseCardProps = {
  id: number;
};

const CourseCard = async ({ id }: CourseCardProps) => {
  const course = courseCards.results.find((course) => course.id === id);
  const rating = 4.5;
  // const course = await fetchCourseById(id);

  // if (!course?.company) {
  //   return null;
  // }
  // const company = await fetchCompanyById(course.company);
  const company = {
    name: 'Горизонт України',
  };

  return (
    <div className="w-full h-full bg-white rounded-lg shadow-md p-5 flex flex-col justify-between">
      <div className="flex flex-row justify-between  pb-6">
        <h2 className="text-sm font-bold w-3/4">{course?.title}</h2>
        <Image
          src={`/card-lemon-logo.svg`}
          alt={course?.title ? course?.title : 'Course image'}
          width={60}
          height={60}
        />
      </div>
      <div className="flex flex-col gap-2 border-t-2 pt-6">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-row md:gap-4 md:justify-between">
            <p className="text-gray-500 w-1/2 md:w-full truncate">
              By <span className="text-black">{company?.name}</span>
            </p>
            <div className="flex gap-2">
              <MapPin className="text-gray-500" />
              <span className="text-green-500">Online</span>
            </div>
          </div>

          <div className="flex gap-1 md:gap-2 items-center">
            <Image
              src={`/icons/card.svg`}
              alt="Credit card image"
              width={24}
              height={24}
            />
            <p className="text-zinc-400 text-xs">{course?.price}</p>
            <p className="flex gap-1 md:hidden items-center">
              <StarIcon size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="text-xs font-bold">(4.0)</span>
            </p>
            <div className="hidden md:flex gap-1 items-center">
              <Rating
                name="half-rating-read"
                size="small"
                precision={0.5}
                value={rating}
                readOnly
                className="text-sm sm:text-base"
              />
              <p className="text-sm">
                (<span>{rating}</span>)
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] gap-2 p-1 py-[9px] rounded-md mb-4">
          <div className="flex gap-1 md:gap-4">
            <div className='flex gap-2 items-center md:w-48'>
              <GraduationCap className="text-zinc-400" />
              <p className="hidden md:block text-zinc-400 text-sm text-nowrap">Information technology:</p>
            </div>
            <ul className="flex w-full flex-wrap gap-2 list-inside list-disc">
              <li className="text-yellow-600 bg-yellow-100 px-2 rounded-md">
                <span className="-ml-2">Programming</span>
              </li>
              <li className="text-yellow-600 bg-yellow-100 px-2 rounded-md">
                <span className="-ml-2">Development</span>
              </li>
            </ul>
          </div>

          <ExpandableText text={course?.description} />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex gap-2 md:gap-4 pb-4 border-b-2 md:border-b-0 mb-4 md:border-r-2 md:pr-6 md:h-full md:mb-0 md:py-2">
            <Image
              src="/verified-users.png"
              alt="Verified users"
              width={66}
              height={24}
            />
            <p className="text-gray-400">100 Reviews</p>
            <div className="flex text-green-500">
              <ShieldCheck />
              <p className="hidden md:block">Verified Via LinkedIn</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-end">
            <Button
              className="w-full md:w-36 rounded-full bg-yellow-400 text-black font-bold h-10 hover:bg-yellow-400/70"
              asChild
            >
              <Link href={`/courses/${course?.id}`}>Read reviews</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
