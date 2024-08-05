import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

type PopularCoursesItemProps = {
  title: string;
  courses: number;
  ImageSrc?: string;
  className?: string;
};

const PopularCoursesItem = ({
  title,
  courses,
  ImageSrc,
  className,
}: PopularCoursesItemProps) => {
  return (
    <div className={cn("bg-gray-200 shadow rounded p-4 flex flex-col items-start  h-60", className)}>
      {ImageSrc ? (
        <Image src={ImageSrc} alt="Course" width={120} height={120} />
      ) : (
        <div className="w-[120px] h-[120px] bg-gray-300 mb-4"></div>
      )}
      <div className="text-xl font-bold mb-2 text-center">{title}</div>
      <div className="text-gray-600 flex w-full justify-between">
        <p>{courses} courses</p>
        <ArrowUpRight  />
      </div>
    </div>
  );
};

export default PopularCoursesItem;
