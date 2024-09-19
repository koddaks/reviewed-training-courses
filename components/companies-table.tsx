"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Rating } from "@mui/material";
import { Companies } from "@/types";

type CompaniesTableProps = {
  filteredCompanies: Companies | null;
};

const CompaniesTable = ({ filteredCompanies }: CompaniesTableProps) => {
  const [logos, setLogos] = useState<{ [key: string]: string }>({});

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchLogos = async () => {
      const newLogos: { [key: string]: string } = {};
      for (const company of filteredCompanies!.results) {
        if (company.logo && company.logo !== "None") {
          newLogos[
            company.id
          ] = `https://reviewed-api.azurewebsites.net/api/v1/companies/upload/${company.logo}`;
        } else {
          newLogos[company.id] = "/company-logo.png";
        }
      }
      setLogos(newLogos);
    };

    fetchLogos();
  }, [filteredCompanies!.results]);

  return (
    <>
      {!isMobile ? (
        <table className="table-auto w-full rounded-t-sm text-gray-500">
          <thead className="bg-slate-200">
            <tr>
              <th className="px-4 py-6 text-left">Company</th>
              <th className="px-4 py-6 text-left">Total Courses</th>
              <th className="px-4 py-6 text-left">Reviews</th>
              <th className="px-4 py-6 text-left">Rating</th>
            </tr>
          </thead>
          <tbody className="bg-white border">
            {filteredCompanies!.results.map((company) => (
              <tr key={company.id} className="border cursor-pointer">
                <td className="px-4 py-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={logos[company.id] || "/company-logo.png"}
                      alt={company.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                    <span className="text-black font-bold">{company.name}</span>
                  </div>
                </td>
                <td className="px-4 py-6">10</td>
                <td className="px-4 py-6">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/users.png"}
                      alt="users image"
                      width={100}
                      height={30}
                    />
                    <span className="text-zinc-400">100 reviews</span>
                    <Image
                      src={"/icons/shield-tick.svg"}
                      alt="shield icon"
                      width={20}
                      height={20}
                    />
                  </div>
                </td>
                <td className="px-4 py-6">
                  <div className="flex items-center gap-1">
                    <Rating
                      name="half-rating-read"
                      size="small"
                      precision={0.5}
                      value={company.avg_overall_rating}
                      readOnly
                      className="text-sm sm:text-base"
                    />
                    <span className="text-black font-bold"></span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredCompanies!.results.map((company) => (
            <div
              key={company.id}
              className="border rounded-lg flex flex-col gap-4"
            >
              <div className="flex items-center gap-4 bg-white border p-4 rounded-t-lg">
                <Image
                  src={logos[company.id] || "/company-logo.png"}
                  alt={company.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <span className="text-black text-xl">{company.name}</span>
              </div>

              <div className="p-4">
                <div className="flex justify-between">
                  <p className="text-sm font-bold">Total Courses:</p>
                  <span className="text-zinc-400 text-sm">10</span>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold">Reviews:</p>
                  <div className="flex gap-2">
                    <Image
                      src={"/icons/shield-tick.svg"}
                      alt="shield icon"
                      width={20}
                      height={20}
                    />
                    <span className="text-zinc-400 text-sm">100</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 justify-between">
                  <p className="font-bold">Rating: </p>
                  <div className="flex gap-1 items-center">
                    <Rating
                      name="half-rating-read"
                      size="small"
                      precision={0.5}
                      value={company.avg_overall_rating}
                      readOnly
                      className="text-sm sm:text-base"
                    />
                    <span className="font-bold">
                      {(company.avg_overall_rating / 1.0).toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CompaniesTable;
