import CourseCards from '@/components/course-cards';
import SearchSection from '@/components/search-section';

const MainPage = () => {

  return (
    <div className="px-8 lg:px-6 xl:px-4">
      <SearchSection />
      <CourseCards/>
    </div>
  );
};

export default MainPage;
