import Articles from '@/components/articles';
import CourseCards from '@/components/best-courses';
import FrequentlyAskedQuestions from '@/components/frequently-asked-questions';
import HowItWorks from '@/components/how-it-works';
import PopularCourses from '@/components/popular-courses';
import SearchSection from '@/components/search-section';
import { fetchAllCategories } from '@/data/categories';

const MainPage = async () => {
  const categories = await fetchAllCategories();

  return (
    <div className="container">
      <SearchSection />
      <CourseCards />
      <HowItWorks />
      <PopularCourses />
      <Articles />
      <FrequentlyAskedQuestions />
    </div>
  );
};

export default MainPage;
