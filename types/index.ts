
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