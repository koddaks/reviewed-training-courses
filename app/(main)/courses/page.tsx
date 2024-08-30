import CourseCard from '@/components/course-card';
import { fetchCourseCards } from '@/data/course-cards';

const CoursesPage = async () => {
  const courses = await fetchCourseCards();

  return (
    <div className="container">
      <div className="flex  flex-col gap-6">
        {courses?.map((course) => (
          <CourseCard key={course.id} id={course.id} title={course.title} category={course?.category} price={course.price} company={course.company} age={course.age} location={course.location} website={course.website} contact={course.contact} description={course.description} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
