import { fetchCourses } from '@/data/courses';
import CourseCard from './course-card';
import { Input } from './ui/input';
import Filters from './filters';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import { ListFilter } from 'lucide-react';
import { Button } from './ui/button';

const CourseList = async () => {
  const courses = await fetchCourses();

  return (
    <div className="flex  flex-col gap-6">
      <div className="relative w-full">
        <Input
          className="border-gray-400 h-[53px] rounded-3xl"
          placeholder="Find your perfect course"
        />
        <div className="absolute right-2 md:right-32 lg:right-52 top-[26px] transform -translate-y-1/2 text-gray-500">
          <Filters />
        </div>
        <Button type="button" className="hidden md:block absolute h-11 w-28 xl:w-48 right-1 rounded-full top-[26px] transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-500/70 text-black">
          Search
        </Button>
      </div>

      <div className="flex md:flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Found {courses?.results.length} results for “Tester”
          </h1>
          <div className="flex gap-2">
            <Image
              src="/icons/users.svg"
              alt="Users icon"
              width={20}
              height={20}
            />
            <p>000 Reviews for this search</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <span className="text-gray-500 text-sm hidden md:block">Sort by</span>

          <Select defaultValue="popular">
            <SelectTrigger className="relative w-8 md:w-[200px] md:h-12 bg-transparent border-0  md:border-2 md:border-zinc-300 rounded-full">
              <SelectValue placeholder="Sort by" className="hidden md:block" />
              <ListFilter className="block md:hidden h-6 w-6 absolute top-1/2 -translate-y-1/2 right-1 bg-gray-100" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="popular">The most popular</SelectItem>
              <SelectItem value="recent">The most recent</SelectItem>
              <SelectItem value="hight-rated">Highest rated</SelectItem>
              <SelectItem value="low-rated">Lowest rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {courses?.results?.map((course) => (
        <CourseCard key={course.id} id={course.id} title={course.title} category={course.category} price={course.price} company={course.company} age={course.age} location={course.location} website={course.website} contact={course.contact} company_logo={course.company_logo} description={course.description} average_rating={course.average_rating} reviews_count={course.reviews_count} />
      ))}
    </div>
  );
};

export default CourseList;
