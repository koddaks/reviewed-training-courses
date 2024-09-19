"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Rating } from "@mui/material";
import { Button } from "./ui/button";

type ReviewCardProps = {
  id: number | undefined;
  text: string | undefined;
  author: string | undefined;
  short_description: string | undefined;
  rating: number | undefined;
  company: string | undefined;
};

const ReviewCard = ({
  id,
  text,
  author,
  // short_description,
  rating,
}: // company,
ReviewCardProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 450);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col cursor-pointer">
      <div className="flex justify-between mb-4">
        <div className="flex gap-3">
          <div className="w-[60px] h-[60px] bg-gray-500 rounded-3xl block"></div>
          <div className="flex flex-col justify-between">
            <div className="flex gap-1 items-start">
              <p>{author}</p>
              <Image
                src={"/icons/shield-tick.svg"}
                alt="shield icon"
                width={20}
                height={20}
              />
            </div>
            <span className="text-zinc-400 text-sm">Student</span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex gap-2 items-center">
            {isMobile ? (
              <div className="flex gap-2 items-center">
                <Image
                  src={"/icons/star.svg"}
                  alt="star icon"
                  width={15}
                  height={15}
                />
                <span className="text-sm sm:text-base">
                  {rating!.toFixed(1)}
                </span>
              </div>
            ) : (
              <Rating
                name="half-rating-read"
                size="small"
                precision={0.5}
                value={rating}
                readOnly
                className="text-sm sm:text-base"
              />
            )}
          </div>
          <p className="text-zinc-400 text-sm">00/00/2024</p>
        </div>
      </div>
      <div className="mb-5">
        <p className="text-zinc-400 text-sm">{text}</p>
      </div>
      <Button
        variant="outline"
        size="ellipse"
        className="border-orange-400 border-2 text-orange-400"
      >
        Read more
      </Button>
    </div>
  );
};

export default ReviewCard;
