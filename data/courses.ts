import { api } from "@/services/api";
import { Courses } from "@/types";

export async function fetchCourses(): Promise<Courses | null> {
    try {
      const response = await api.get('/courses');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }