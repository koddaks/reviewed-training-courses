import CourseCards from '@/components/course-cards';
import HowItWorks from '@/components/how-it-works';
import SearchSection from '@/components/search-section';

const MainPage = () => {

  return (
    <div className="px-8 lg:px-6 xl:px-4">
      <SearchSection />
      <CourseCards/>
      <HowItWorks/>
    </div>
  );
};

export default MainPage;
