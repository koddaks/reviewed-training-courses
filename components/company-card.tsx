"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import { fetchLogo } from "@/data/companies";
import { api } from "@/services/api";
import { Rating } from "@mui/material";

type CompanyCardProps = {
  id: number;
  name: string;
  city: string;
  website: string;
  average_rating: number;
  total_courses: number;
  total_reviews_count: number;
  logo: string;
};

const CompanyCard = ({
  id,
  name,
  city,
  website,
  average_rating,
  total_courses,
  total_reviews_count,
  logo,
}: CompanyCardProps) => {
  const [logoURL, setLogoURL] = useState<string>("/company-logo.png");

  const formattedRating = (average_rating / 1.0).toFixed(1);

  useEffect(() => {
    const getLogo = async () => {
      if (logo && logo !== "None") {
        // const response = await fetch(logo);
        // const blob = await response.blob();
        // const imageObjectURL = URL.createObjectURL(blob);
        // console.log(imageObjectURL);
        // setLogoURL(imageObjectURL);
        setLogoURL(
          `https://reviewed-api.azurewebsites.net/api/v1/companies/upload/${logo}`
        );
      } else {
        setLogoURL("/company-logo.png");
      }
    };

    getLogo();
  }, [logo]);

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between cursor-pointer">
      <div className="flex justify-between mb-8">
        <Image
          src={String(logoURL)}
          alt={name}
          width={80}
          height={80}
          className="object-contain"
        />
        <div className="flex flex-col gap-2 items-end">
          <div className="flex gap-2 items-center">
            <Rating
              name="half-rating-read"
              size="small"
              precision={0.5}
              value={average_rating}
              readOnly
              className="text-sm sm:text-base"
            />
            <p className="font-bold">({formattedRating})</p>
          </div>
          <p className="text-zinc-400 text-sm">{total_courses} courses</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-bold">{name}</p>
        <div className="flex gap-1">
          <p className="text-zinc-400 text-sm">{total_reviews_count} reviews</p>
          <Image
            src={"/icons/shield-tick.svg"}
            alt="shield icon"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
