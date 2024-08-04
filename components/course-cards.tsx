'use client';

import { courses } from '@/mock/courses';
import CourseItem from './course-item';
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from './ui/carousel';

const CourseCards = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Найкращі школи</h2>

        <div className="w-full flex justify-center">
          <Carousel className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
            <CarouselContent className=" flex">
              {Array.from(courses).map((course, index) => (
                <CarouselItem key={index} className="basis-1/4">
                  <CourseItem
                    title={course.title}
                    description={course.description}
                    reviews={course.reviews}
                    rating={course.rating}
                    studentsWhichPassedCourse={course.studentsWhichPassedCourse}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center">
             <CarouselDots/>

            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CourseCards;
