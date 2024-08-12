import Articles from '@/components/articles';
import CategoriesList from '@/components/categories-list';
import CourseCards from '@/components/course-cards';
import FrequentlyAskedQuestions from '@/components/frequently-asked-questions';
import HowItWorks from '@/components/how-it-works';
import PopularCourses from '@/components/popular-courses';
import SearchSection from '@/components/search-section';
import { fetchAllCategories } from '@/data/categories';

const MainPage = async () => {
  const categories = await fetchAllCategories();

  return (
    <div className="container">
      <CategoriesList initialCategories={categories} />
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
