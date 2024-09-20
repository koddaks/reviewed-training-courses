// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLocationDot,
//   faBuildingColumns,
//   faGlobe,
// } from "@fortawesome/free-solid-svg-icons";
// import Rating from "./Rating/Rating";
// import Submenu from "./Submenu/Submenu";
// import Rewiew from "./Rewiew/Rewiew";
// import Feedback from "./Feedback/Feedback";
// import SortMenuInput from "./SortMenuInput/SortMenuInput";
// import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { fetchCourseById } from "@/data/courses";
import { fetchCompanyById } from "@/data/companies";
import { courseCards } from "@/mock/course-cards";
import { Rating } from "@mui/material";

type Subcategory = {
  id: number;
  name: string;
};

type Category = {
  id: number;
  name: string;
  subcategories: Subcategory[];
};

type Company = {
  id: number;
  name: string;
  website: string;
};

type CourseDetailsProps = {
  id: number;
  title: string;
  categories: Category[];
  price: string;
  company: Company;
  age: string;
  location: string | null;
  website: string;
  contact: string;
  company_logo: string;
  description: string;
  avg_rating: number;
  reviews_count: number;
};

const CourseDetails = async ({
  id,
  title,
  categories,
  price,
  company,
  age,
  location,
  website,
  contact,
  company_logo,
  description,
  avg_rating,
  reviews_count,
}: CourseDetailsProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-start gap-1 mb-14">
        <Image
          src={`/card-lemon-logo.svg`}
          alt={"Course image"}
          width={104}
          height={60}
        />
        <div className="flex flex-col items-start justify-start relative md:gap-3">
          <div className="text-lg font-semibold leading-[26px]">
            <p>{title}</p>
          </div>
          <div className="flex absolute top-[68px] left-[-20px] md:static md:top-auto md:left-auto">
            <Rating
              name="half-rating-read"
              size="medium"
              precision={0.5}
              value={avg_rating}
              readOnly
              className="text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      {/* <Submenu /> */}

      <section id="course" className="mb-6 xl:mb-8">
        <h3 className="text-lg mb-[37px] leading-[26px] md:text-xl md:mb-[41px] md:leading-[31px] xl:text-4xl xl:leading-[47px] xl:mb-12">
          Про курс
        </h3>
        <p className="relative mb-[37px] text-lg leading-[26px] font-semibold md:mb-10 xl:mb-12">
          <span className="text-[#8C8C8C] text-base leading-[25px] tracking-[-0.96px] xl:text-lg xl:tracking-[-1.08px]">
            Ціна за навчання:
          </span>
          {price}
        </p>
        <p className="text-base font-semibold mb-4 tracking-[-0.96px] leading-6 xl:mb-5">
          {description}
        </p>
        <div>
          <p className="text-[#8C8C8C] text-base font-semibold mb-3 leading-6 tracking-[-0.96px] xl:leading-[25px] xl:tracking-[-1.08px]">
            Навички які ви отримаєте:
          </p>
          <ul className="list-disc ml-5 mb-4 xl:mb-8">
            <li className="font-semibold leading-6 tracking-[-0.96px] tracking-[-0.96px]">
              Основи тестування ПЗ
            </li>
            <li className="font-semibold leading-6 tracking-[-0.96px] tracking-[-0.96px]">
              Розробка і виконання тест-кейсів
            </li>
            <li className="font-semibold leading-6 tracking-[-0.96px] tracking-[-0.96px]">
              Інструменти тестування (Selenium, JIRA тощо)
            </li>
            <li className="font-semibold leading-6 tracking-[-0.96px] tracking-[-0.96px]">
              Робота з документацією
            </li>
            <li className="font-semibold leading-6 tracking-[-0.96px] tracking-[-0.96px]">
              Основи SQL
            </li>
            <li className="font-semibold leading-6 tracking-[-0.96px] tracking-[-0.96px]">
              Автоматизація тестування (мови програмування)
            </li>
            <li className="font-semibold leading-6 tracking-[-0.96px] tracking-[-0.96px]">
              Командна робота
            </li>
            <li className="font-semibold leading-6 tracking-[-0.96px] tracking-[-0.96px]">
              Основи Agile і Scrum
            </li>
            <li className="font-semibold leading-6 tracking-[-0.96px] tracking-[-0.96px]">
              Аналіз і планування тестів
            </li>
          </ul>
        </div>
        <p className="text-lg font-semibold leading-[26px] mb-3 md:text-xl md:leading-[29px] md:mb-4">
          Категорії курса
        </p>
        {/* <p className="font-['Roboto'] text-sm font-semibold leading-[14px] mb-3">
          {categories[0]?.name}
        </p> */}
        <p className="font-['Roboto'] text-sm font-semibold leading-[14px] mb-3">
          {categories && categories.length > 0
            ? categories[0].name
            : "No categories available"}
        </p>
        <ul className="list-disc ml-5">
          {categories &&
          categories.length > 0 &&
          categories[0].subcategories ? (
            categories[0].subcategories.map((subcategory) => (
              <li className="mb-2" key={subcategory.id}>
                <a
                  href="#"
                  className="text-[#0A66C2] font-['Roboto'] text-sm font-medium leading-6"
                >
                  {subcategory.name}
                </a>
              </li>
            ))
          ) : (
            <li>Нет доступных подкатегорий</li>
          )}

          {/* {categories[0].subcategories.map((subcategory) => (
            <li className="mb-2" key={subcategory.id}>
              <a
                href="#"
                className="text-[#0A66C2] font-['Roboto'] text-sm font-medium leading-6"
              >
                {subcategory.name}
              </a>
            </li>
          ))} */}
        </ul>
      </section>

      <section className="mb-6 md:flex md:flex-col md:items-start xl:mb-8">
        <h2 className="mb-5 text-lg font-bold leading-[26px] md:text-xl md:leading-[31px] xl:text-4xl xl:leading-[47px] xl:mb-7">
          Про компанію
        </h2>
        <ul className="flex flex-col gap-4 mb-4">
          <li>
            <p className="font-semibold leading-6 tracking-[-0.96px]">
              {location}
            </p>
          </li>
          <li>
            <p className="font-semibold leading-6 tracking-[-0.96px]">
              {company?.name}
            </p>
          </li>
          <li>
            <p className="font-semibold leading-6 tracking-[-0.96px]">
              {website}
            </p>
          </li>
        </ul>

        <ul className="flex flex-col gap-2 p-0 m-0 md:flex-row">
          <li className="w-full">
            <button
              type="button"
              className="flex items-center justify-center border border-[#FDD503] rounded-full bg-[#FDD503] w-full self-stretch py-2 font-['Open_Sans'] text-base font-semibold cursor-pointer transition-colors duration-200 hover:border-[#FFF342] hover:bg-[#FFF342] active:border-[#CF9D00] active:bg-[#CF9D00] md:w-auto md:py-2.5 md:px-6 md:whitespace-nowrap"
            >
              Зв’язатися з компанією
            </button>
          </li>
          <li className="w-full">
            <button
              type="button"
              className="flex items-center justify-center border border-[#FDD503] rounded-full bg-[#FAFAFA] w-full self-stretch py-2 font-['Open_Sans'] text-base font-semibold cursor-pointer md:w-auto md:py-2.5 md:px-6 md:whitespace-nowrap"
            >
              Показати контакти
            </button>
          </li>
        </ul>
      </section>
      <h2 className="text-lg font-bold leading-[26px] mb-5 md:text-2xl md:leading-[36px] xl:text-4xl xl:leading-[47px] xl:mb-7">
        Відгуки
      </h2>
      {/* <Rewiew /> */}
      <button
        type="button"
        className="flex items-center justify-center border border-[#FDD503] rounded-full bg-[#FDD503] w-full self-stretch py-2 font-['Open_Sans'] text-base font-semibold cursor-pointer mb-6 transition-colors duration-200 hover:border-[#FFF342] hover:bg-[#FFF342] active:border-[#CF9D00] active:bg-[#CF9D00]"
      >
        Написати відгук
      </button>
      {/* <SortMenuInput onSortChange={handleSortChange} /> */}
      {/* <Feedback /> */}
      <div className="flex flex-col items-center justify-center py-10">
        <p className="text-[#939090] text-lg font-semibold leading-[26px] mb-1">
          Тут ще ніхто не залишив відгук
        </p>
        <p className="text-center text-[#A0A0A0] text-base font-normal leading-[22px]">
          Станьте першим,
          <br className="block md:hidden" /> хто поділиться враженням!
        </p>
      </div>
    </div>
  );
};

export default CourseDetails;
