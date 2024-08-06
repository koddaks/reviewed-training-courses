import { Rating } from '@mui/material';
import Image from 'next/image';

type CourseItemProps = {
  title: string;
  description: string;
  reviews: number;
  rating: number;
  studentsWhichPassedCourse: number;
  ImageSrc?: string;
};

const CourseItem = ({
  title,
  description,
  reviews,
  rating,
  studentsWhichPassedCourse,
  ImageSrc,
}: CourseItemProps) => {
  return (
    <div className="flex flex-col bg-white shadow rounded-md p-4 w-full  max-w-[298px] h-[270px]">
      <div className="flex flex-col sm:flex-row gap-2 lg:gap-0 justify-between mb-2 items-center">
        {ImageSrc ? (
          <Image src={ImageSrc} alt="course-image" />
        ) : (
          <div className=" w-16 h-14 sm:w-1/2 sm:h-20 lg:w-[120px] lg:h-[80px] bg-gray-200" />
        )}
        <div className="flex flex-col justify-center gap-1">
          <div className=" text-gray-400 flex flex-col sm:flex-row justify-center items-center gap-1">
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
          <div className="text-center text-xs lg:text-sm">
            {reviews} відгуки
          </div>
        </div>
      </div>

      <h2 className="text-center sm:text-start text-xs sm:text-sm lg:text-xl font-bold mb-1 sm:mb-2">
        {title}
      </h2>
      <div className="text-black text-xs lg:text-sm line-clamp-3 text-balance sm:line-clamp-5 lg:line-clamp-4">
        {description}
      </div>

      <div className="text-gray-400 text-[10px] text-center sm:text-start lg:text-xs font-normal mt-auto">
        Навчалося {studentsWhichPassedCourse} студентів
      </div>
    </div>
  );
};

export default CourseItem;
