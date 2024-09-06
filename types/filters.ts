export type Filters = {
    courseType: string;
    company: string;
    location: string;
    rating: string;
    price: { min: number; max: number };
    duration: string;
    difficulty: string;
  };