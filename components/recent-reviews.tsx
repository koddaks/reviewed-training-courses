"use client";

import { Reviews } from "@/types";
import { useEffect, useState } from "react";
import { fetchReviewById } from "@/data/reviews";
import ReviewCard from "./review-card";
import { Companies } from "@/types";

interface RecentReviewsProps {
  companies: Companies | null;
}

const RecentReviews: React.FC<RecentReviewsProps> = ({ companies }) => {
  const [reviews, setReviews] = useState<Reviews | null>();

  useEffect(() => {
    const getReviews = async () => {
      if (companies) {
        const allReviews = await Promise.all(
          companies.results.map(async (company) => {
            const response = await fetchReviewById(company.id);
            return response;
          })
        );

        const reviews: Reviews = {
          results: allReviews,
        };

        setReviews(reviews);
      }
    };

    getReviews();
  }, [companies]);

  return (
    <div className="py-10 px-7 bg-yellow-100 rounded-md">
      <h2 className="font-black text-3xl mb-6">Recent Reviews</h2>
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-3">
        {(() => {
          let count = 0;
          return reviews?.results?.map((reviewWrapper) =>
            reviewWrapper?.results?.map((review: any) => {
              if (count < 3) {
                count++;
                return (
                  <ReviewCard
                    key={review.id}
                    id={review.id}
                    text={review.text}
                    author={review.author}
                    short_description={review.short_description}
                    rating={review.rating}
                    company={review.company}
                  />
                );
              }
              return null;
            })
          );
        })()}
      </div>
    </div>
  );
};

export default RecentReviews;
