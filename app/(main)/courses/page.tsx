import { fetchCourses } from '@/data/courses';

const CoursesPage = async () => {
  const courses = await fetchCourses();

  return (
    <div className="container">
      <h1>Courses Page</h1>
    </div>
  );
};

export default CoursesPage;
