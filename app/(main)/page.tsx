import Articles from '@/components/articles';
import CourseCards from '@/components/course-cards';
import HowItWorks from '@/components/how-it-works';
import PopularCourses from '@/components/popular-courses';
import SearchSection from '@/components/search-section';

const MainPage = () => {

  return (
    <div className="container">
      <SearchSection />
      <CourseCards/>
      <HowItWorks/>
      <PopularCourses/>
      <Articles/>
    </div>
  );
};

export default MainPage;
