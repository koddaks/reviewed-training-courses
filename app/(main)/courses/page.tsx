import { fetchCompanies } from "@/data/companies";
import CompanyList from "@/components/company-list";
import { categories } from "@/mock/categories";
import RecentReviews from "@/components/recent-reviews";
import CompaniesPageTop from "@/components/companies-page-top";

const CoursesPage = async () => {
  const companies = await fetchCompanies();

  return (
    <div className="container">
      <CompaniesPageTop categories={categories} className="mb-16" />
      <CompanyList companies={companies} className="mb-20" />
      <RecentReviews companies={companies} />
    </div>
  );
};

export default CoursesPage;
