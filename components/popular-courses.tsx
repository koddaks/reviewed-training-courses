import { directions } from '@/mock/directions';
import PopularCoursesItem from './popular-courses-item';

const PopularCourses = () => {
  const colSpans = [
    'col-span-3',
    'col-span-5',
    'col-span-2',
    'col-span-2',
    'col-span-3',
    'col-span-5',
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Найпопулярніші напрямки</h2>
        <div className="grid grid-rows-2 grid-cols-10 gap-4">
          {directions.map((direction, index) => (
            <PopularCoursesItem
              key={index}
              title={direction.name}
              courses={direction.courses}
              className={colSpans[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
