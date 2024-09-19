import Image from "next/image";
import { Input } from "./ui/input";
// import Filters from "./filters";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { ListFilter } from "lucide-react";
import { Categories } from "@/types";
import { useState } from "react";

interface CompaniesPageTopProps {
  categories: Categories | null;
  className?: string;
}

const CompaniesPageTop: React.FC<CompaniesPageTopProps> = ({
  categories,
  className,
}) => {
  return (
    <div className={className}>
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl font-bold">
          Discover Leading Course Providers
        </h1>
        <p className="text-sm max-w-[450px]">
          Search and compare educational companies. All reviews are verified by
          real students to help you choose wisely.
        </p>
        <div className="flex gap-2 items-center">
          <Image
            src={"/icons/building.svg"}
            alt="building icon"
            width={20}
            height={20}
          />
          <p className="text-xs">1,000,000 Companies</p>
        </div>
      </div>

      <div className="flex justify-between mb-5">
        <div className="relative w-[70%] self-end">
          <Input
            className="border-gray-400 h-[53px] rounded-3xl shadow-lg"
            placeholder="Find your perfect company"
          />
          {/* <div className="absolute right-2 md:right-32 lg:right-52 top-[26px] transform -translate-y-1/2 text-gray-500">
          <Filters />
        </div> */}
          <Button
            type="button"
            className="hidden md:block absolute h-11 w-28 xl:w-48 right-1 rounded-full top-[26px] transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-500/70 text-zinc-950 font-bold"
          >
            Search
          </Button>
        </div>

        <div className="flex flex-col gap-2 items-end">
          <span className="text-gray-500 text-sm hidden md:block">Sort by</span>
          <Select defaultValue="popular">
            <SelectTrigger className="relative w-8 md:w-[200px] md:h-12 bg-transparent border-0  md:border-2 md:border-zinc-300 rounded-full">
              <SelectValue placeholder="Sort by" className="hidden md:block" />
              <ListFilter className="block md:hidden h-6 w-6 absolute top-1/2 -translate-y-1/2 right-1 bg-gray-100" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">The most popular</SelectItem>
              <SelectItem value="recent">The most recent</SelectItem>
              <SelectItem value="hight-rated">Highest rated</SelectItem>
              <SelectItem value="low-rated">Lowest rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* <div className="flex md:flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          Found {companies?.results.length} results for “Tester”
        </h1>
        <div className="flex gap-2">
          <Image
            src="/icons/users.svg"
            alt="Users icon"
            width={20}
            height={20}
          />
          <p>000 Reviews for this search</p>
        </div>
      </div>
    </div> */}

      <>
        <span className="text-gray-500 text-sm hidden md:block mb-3">
          Company Category:
        </span>
        <div className="flex flex-wrap gap-3 w-[100%] md:w-[70%]">
          {categories?.results?.map((category) => (
            <Button
              variant="secondaryBorder"
              size="ellipse"
              key={category.id}
              className="hover:bg-white hover:border-blue-400"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </>
    </div>
  );
};

export default CompaniesPageTop;
