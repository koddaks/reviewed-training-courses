import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

type PopularCoursesCardProps = {
  title: string;
  courses: number;
  imageSrc: string;
  className?: string;
};

const PopularCoursesCard = ({
  title,
  courses,
  imageSrc,
  className,
}: PopularCoursesCardProps) => {
  return (
    <div
      className={cn(
        'bg-gray-200 shadow rounded p-2 sm:p-4 flex flex-col items-center md:items-start h-50 md:h-60 gap-3',
        className
      )}
    >
      <Image src={imageSrc} alt="Course" width={120} height={120} />

      <h3 className="text-xs md:text-xl font-bold mb-2 text-center">
        {title}
      </h3>
      <div className="text-gray-600 w-full flex flex-row md:flex-row justify-between mt-auto items-center">
        <p className="truncate sm:text-xs">
          {courses} <span>курсів</span>
        </p>
        <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
      </div>
    </div>
  );
};

export default PopularCoursesCard;
