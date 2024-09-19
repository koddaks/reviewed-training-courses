import { api } from "@/services/api";
import { Review } from "@/types";

export async function fetchReviewById(id: number): Promise<Review | null> {
  try {
    const response = await api.get(`/reviews/companies/list/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
