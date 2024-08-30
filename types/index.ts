
export type Category = {
    id: number;
    name: string;
    parent: number;
}

export type Categories = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Category[];
}

export type Course = {
    id: number;
    title: string;
    price: string;
    company: string;
}

export  type Courses = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Course[];
}

export type CourseDetails = {
    id: number;
    title: string;
    category: number | null;
    price: string;
    company: string;
    age: string;
    location: string;
    website: string;
    contact: string;
    description: string;
}