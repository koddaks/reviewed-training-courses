import CourseCards from '@/components/course-cards';
import HowItWorks from '@/components/how-it-works';
import PopularCourses from '@/components/popular-courses';
import SearchSection from '@/components/search-section';

const MainPage = () => {

  return (
    <div className="px-2 lg:px-6 xl:px-4">
      <SearchSection />
      <CourseCards/>
      <HowItWorks/>
      <PopularCourses/>
    </div>
  );
};

export default MainPage;
