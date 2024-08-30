import { fetchCourseById } from '@/data/courses';

type CourseCardProps = {
  params: {
    courseId: string;
  };
};

const CourseCard = async ({ params }: CourseCardProps) => {
  const courseId = params.courseId;
  const course = await fetchCourseById(courseId);


  return (
    <div className="card">
        <h2>{course?.title}</h2>
        <p>{course?.description}</p>
    </div>
  )
};

export default CourseCard;
