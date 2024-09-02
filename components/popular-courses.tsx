import { directions } from '@/mock/directions';
import PopularCoursesItem from './popular-courses-card';
import { cn } from '@/lib/utils';

const PopularCourses = () => {
  const colSpans = [
    'sm:col-span-3',
    'sm:col-span-5',
    'sm:col-span-2',
    'sm:col-span-2',
    'sm:col-span-3',
    'sm:col-span-5',
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Найпопулярніші напрямки</h2>
      <div className="grid grid-rows-2 grid-cols-10 gap-2 md:gap-4">
        {directions.map((direction, index) => (
          <PopularCoursesItem
            key={index}
            title={direction.name}
            courses={direction.courses}
            imageSrc="/rectangle-small.png"
            className={cn('col-span-10', colSpans[index])}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
