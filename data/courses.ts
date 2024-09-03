import { courseCards } from '@/mock/course-cards';
import { courses } from '@/mock/courses';
import { api } from '@/services/api';
import { Course, CourseDetails, Courses } from '@/types';

export async function fetchCourses(): Promise<Courses | null> {
  try {
    const response = await api.get('/courses');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export async function fetchCourseById(
  id: string
): Promise<CourseDetails | null> {
  try {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export async function fetchMockCourseById(
  id: string
): Promise<CourseDetails | null> {
  const response = courseCards.filter((course) => course.id === +id);
  return response[0];
}
