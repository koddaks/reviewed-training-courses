import { fetchCourseById, fetchMockCourseById } from '@/data/courses';

type CoursePageProps = {
  params: {
    courseId: string;
    description: string;
  };
};

const CoursePage = async ({ params }: CoursePageProps) => {
  const courseId = params.courseId;
  // const course = await fetchCourseById(courseId);
  const course = await fetchMockCourseById(courseId);


  return (
    <div className="container">
         <h2>{course?.title}</h2>
        <p>{course?.description}</p>
    </div>
  );
};

export default CoursePage;
