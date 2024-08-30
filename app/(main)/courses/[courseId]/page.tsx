import CourseCard from '@/components/course-card';

type CoursePageProps = {
  params: {
    courseId: string;
  };
};

const CoursePage = async ({ params }: CoursePageProps) => {
  return (
    <div className="container">
      <CourseCard params={params} />
    </div>
  );
};

export default CoursePage;
