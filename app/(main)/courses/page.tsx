import CourseCard from '@/components/course-card';
import { fetchCourses } from '@/data/courses';

const CoursesPage = async () => {
  const courses = await fetchCourses();

  return (
    <div className="container">
      <div className="flex  flex-col gap-6">
        {courses?.results?.map((course) => (
          <CourseCard key={course.id} id={course.id}  />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
