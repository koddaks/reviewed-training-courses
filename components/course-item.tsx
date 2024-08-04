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
    <div className="flex flex-col bg-white shadow rounded-md p-4 w-full max-w-[298px] h-[270px]">
      <div className="flex justify-between mb-2">
        {ImageSrc ? (
          <Image src={ImageSrc} alt="course-image" />
        ) : (
          <div className="w-[120px] h-[80px] bg-gray-200 " />
        )}
        <div className="flex flex-col justify-center gap-1">
          <div className=" text-gray-400 flex justify-center items-center gap-1">
            <Rating
              name="half-rating-read"
              size="small"
              precision={0.5}
              value={rating}
              readOnly
            />
            <p className="text-sm">
              (<span>{rating}</span>)
            </p>
          </div>
          <div className="text-center">{reviews} відгуки</div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="text-black text-sm line-clamp-4 ">{description}</div>

      <div className="text-gray-400 text-xs font-normal mt-auto">
        Навчалося {studentsWhichPassedCourse} студентів
      </div>
    </div>
  );
};

export default CourseItem;
