import { fetchCourses } from '@/data/courses';
import CourseCard from './course-card';
import { InputField } from './input-field';
import Image from 'next/image';
import { Input } from './ui/input';
import Filters from './filters';

const CourseList = async () => {
  const courses = await fetchCourses();

  return (
    <div className="flex  flex-col gap-6">
      <div className="relative w-full">
        <Input
          className="border-gray-400 h-[53px] rounded-3xl"
          placeholder="Find your perfect course"
        />
        <div className="absolute right-10 top-[26px] transform -translate-y-1/2 text-gray-500">
          <Filters />
        </div>
      </div>

      {courses?.results?.map((course) => (
        <CourseCard key={course.id} id={course.id} />
      ))}
    </div>
  );
};

export default CourseList;
