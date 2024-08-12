'use client';

import { Categories, Category } from '@/types';
import axios from 'axios';
import { useState } from 'react';
import { Button } from './ui/button';


type CategoriesProps = {
    initialCategories: Categories | null;
};

const CategoriesList = ({ initialCategories }: CategoriesProps) => {
    const [categories, setCategories] = useState<Category[]>(initialCategories?.results || []);
    const [nextUrl, setNextUrl] = useState<string | null>(initialCategories?.next || null);

    console.log(categories);
  
    const loadMore = async () => {
        if (nextUrl) {
          console.log('Loading more categories from:', nextUrl); // Добавь это для отладки
          try {
            const response = await axios.get<Categories>(nextUrl);
            setCategories((prev) => [...prev, ...response.data.results]);
            setNextUrl(response.data.next);
          } catch (error) {
            console.error('Error loading more categories:', error);
          }
        }
      };
  
    return (
      <div>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
        {nextUrl && <Button onClick={loadMore}>Load More</Button>}
      </div>
    );
};

export default CategoriesList;
