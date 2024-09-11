export type Category = {
  id: number;
  name: string;
  parent: number;
};

export type Categories = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Category[];
};

export type Course = {
  id: number;
  title: string;
  city: string;
  price: string;
  company: string;
};

export type CourseDetails = {
  id: number;
  title: string;
  category: string;
  price: string;
  company: string;
  age: string;
  location: string;
  website: string;
  contact: string;
  company_logo: string;
  description: string;
  average_rating: number;
  reviews_count: number;
};

export type Courses = {
  count: number;
  next: string | null;
  previous: string | null;
  results: CourseDetails[];
};


export type Company = {
    id: number;
    name: string;
    city: string;
    website: string;
}

export type Companies = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Company[];
}
