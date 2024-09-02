import { fetchCourseById } from '@/data/courses';

type CoursePageProps = {
  params: {
    courseId: string;
    description: string;
  };
};

const CoursePage = async ({ params }: CoursePageProps) => {
  const courseId = params.courseId;
  const course = await fetchCourseById(courseId);
  return (
    <div className="container">
         <h2>{course?.title}</h2>
        <p>{course?.description}</p>
    </div>
  );
};

export default CoursePage;
