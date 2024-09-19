"use client";
"use strict";
exports.__esModule = true;
// import { fetchCourses } from "@/data/courses";
var company_card_1 = require("./company-card");
var input_1 = require("./ui/input");
// import Filters from "./filters";
var select_1 = require("@/components/ui/select");
var image_1 = require("next/image");
var lucide_react_1 = require("lucide-react");
var button_1 = require("./ui/button");
var react_1 = require("react");
var CourseList = function (_a) {
    var _b;
    var companies = _a.companies;
    var _c = react_1.useState(companies), filteredCompanies = _c[0], setFilteredCompanies = _c[1];
    react_1.useEffect(function () {
        setFilteredCompanies(companies);
    }, [companies]);
    console.log(companies);
    return (React.createElement("div", { className: "flex flex-col gap-6" },
        React.createElement("div", { className: "flex flex-col gap-4" },
            React.createElement("h1", { className: "text-3xl font-bold" }, "Discover Leading Course Providers"),
            React.createElement("p", { className: "text-sm max-w-[450px]" }, "Search and compare educational companies. All reviews are verified by real students to help you choose wisely."),
            React.createElement("div", { className: "flex gap-2 items-center" },
                React.createElement(image_1["default"], { src: "/icons/building.svg", alt: "building icon", width: 20, height: 20 }),
                React.createElement("p", { className: "text-xs" }, "1,000,000 Companies"))),
        React.createElement("div", { className: "flex justify-between" },
            React.createElement("div", { className: "relative w-[70%] self-end" },
                React.createElement(input_1.Input, { className: "border-gray-400 h-[53px] rounded-3xl", placeholder: "Find your perfect company" }),
                React.createElement(button_1.Button, { type: "button", className: "hidden md:block absolute h-11 w-28 xl:w-48 right-1 rounded-full top-[26px] transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-500/70 text-zinc-950 font-bold" }, "Search")),
            React.createElement("div", { className: "flex flex-col gap-2 items-end" },
                React.createElement("span", { className: "text-gray-500 text-sm hidden md:block" }, "Sort by"),
                React.createElement(select_1.Select, { defaultValue: "popular" },
                    React.createElement(select_1.SelectTrigger, { className: "relative w-8 md:w-[200px] md:h-12 bg-transparent border-0  md:border-2 md:border-zinc-300 rounded-full" },
                        React.createElement(select_1.SelectValue, { placeholder: "Sort by", className: "hidden md:block" }),
                        React.createElement(lucide_react_1.ListFilter, { className: "block md:hidden h-6 w-6 absolute top-1/2 -translate-y-1/2 right-1 bg-gray-100" })),
                    React.createElement(select_1.SelectContent, null,
                        React.createElement(select_1.SelectItem, { value: "popular" }, "The most popular"),
                        React.createElement(select_1.SelectItem, { value: "recent" }, "The most recent"),
                        React.createElement(select_1.SelectItem, { value: "hight-rated" }, "Highest rated"),
                        React.createElement(select_1.SelectItem, { value: "low-rated" }, "Lowest rated"))))),
        React.createElement("div", { className: "grid grid-cols-4 gap-4" }, (_b = companies === null || companies === void 0 ? void 0 : companies.results) === null || _b === void 0 ? void 0 : _b.map(function (company) { return (React.createElement(company_card_1["default"], { key: company.id, id: company.id, name: company.name, city: company.city, website: company.website, average_rating: company.average_rating, logo: company.logo })); }))));
};
exports["default"] = CourseList;
