"use client";

import CompanyCard from "./company-card";
import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Companies } from "@/types";
import CompaniesTable from "./companies-table";

interface CourseListProps {
  companies: Companies | null;
  className?: string;
}

const CompanyList: React.FC<CourseListProps> = ({ companies, className }) => {
  const [filteredCompanies, setFilteredCompanies] = useState<Companies | null>(
    companies
  );

  useEffect(() => {
    setFilteredCompanies(companies);
  }, [companies]);

  const [view, setView] = useState("grid");
  console.log(companies);

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <div className="self-end flex items-center gap-2">
        <span className="text-gray-500 text-sm hidden md:block">View by:</span>
        <div>
          <Button
            variant="outline"
            className="rounded-r-none border-r rounded-l-3xl"
            onClick={() => setView("grid")}
          >
            <Image
              src={
                view === "grid" ? "/icons/grid-active.svg" : "/icons/grid.svg"
              }
              alt="grid icon"
              width={20}
              height={20}
              className="object-contain"
            />
          </Button>
          <Button
            variant="outline"
            className="rounded-l-none border-l rounded-r-3xl"
            onClick={() => setView("list")}
          >
            <Image
              src={
                view === "list" ? "/icons/list-active.svg" : "/icons/list.svg"
              }
              alt="list icon"
              width={20}
              height={20}
              className="object-contain"
            />
          </Button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCompanies?.results?.map((company) => (
            <CompanyCard
              key={company.id}
              id={company.id}
              name={company.name}
              city={company.city}
              website={company.website}
              average_rating={company.avg_overall_rating}
              total_courses={company.total_courses}
              total_reviews_count={company.total_reviews_count}
              logo={company.logo}
            />
          ))}
        </div>
      ) : (
        <CompaniesTable filteredCompanies={filteredCompanies} />
      )}
    </div>
  );
};

export default CompanyList;
