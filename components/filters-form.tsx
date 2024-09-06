import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Filters } from '@/types/filters';

type FiltersFormProps = {
  className?: string;
};

const FiltersForm = ({ className }: FiltersFormProps) => {
  // Стейты для хранения выбранных значений фильтров
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    courseType: '',
    company: '',
    location: '',
    rating: '',
    price: { min: 0, max: 10000 },
    duration: '',
    difficulty: '',
  });

  // Функция для проверки, есть ли активные фильтры
  const areFiltersSelected = () => {
    return (
      selectedFilters.courseType !== '' ||
      selectedFilters.company !== '' ||
      selectedFilters.location !== '' ||
      selectedFilters.rating !== '' ||
      selectedFilters.price.min !== 0 ||
      selectedFilters.price.max !== 10000 ||
      selectedFilters.duration !== '' ||
      selectedFilters.difficulty !== ''
    );
  };

  // Очистка всех фильтров
  const clearAllFilters = () => {
    setSelectedFilters({
      courseType: '',
      company: '',
      location: '',
      rating: '',
      price: { min: 0, max: 10000 },
      duration: '',
      difficulty: '',
    });
  };

  // Удаление одного фильтра
  const removeFilter = (filterKey: string) => {
    if (filterKey === 'price') {
      setSelectedFilters({
        ...selectedFilters,
        price: { min: 0, max: 10000 }, // Сброс цены
      });
    } else {
      setSelectedFilters({ ...selectedFilters, [filterKey]: '' });
    }
  };

  return (
    <form className={cn('grid items-start gap-4 w-full pb-4', className)}>
      <div className="flex flex-wrap gap-2 mb-4 px-4">
        {Object.keys(selectedFilters).map((filterKey) => {
          const key = filterKey as keyof Filters;
          if (
            key === 'price' &&
            (selectedFilters.price.min !== 0 ||
              selectedFilters.price.max !== 10000)
          ) {
            return (
              <div
                key={filterKey}
                className="flex items-center px-3 py-1 bg-gray-200 rounded-full text-sm"
              >
                <span>
                  Price: {selectedFilters.price.min} -{' '}
                  {selectedFilters.price.max}
                </span>
                <button
                  onClick={() => removeFilter(key)}
                  className="ml-2 text-red-500"
                >
                  x
                </button>
              </div>
            );
          } else if (key !== 'price' && selectedFilters[key]) {
            return (
              <div
                key={filterKey}
                className="flex items-center px-3 py-1 bg-gray-200 rounded-full text-sm"
              >
                <span>
                  {filterKey}: {selectedFilters[key]}
                </span>
                <button
                  onClick={() => removeFilter(key)}
                  className="ml-2 text-red-500"
                >
                  x
                </button>
              </div>
            );
          }
          return null;
        })}
        {areFiltersSelected() && (
          <button onClick={clearAllFilters} className="text-blue-500 ml-4">
            Clear all
          </button>
        )}
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="courseType">
          <AccordionTrigger className="px-4">
            <p>Course type</p>
            <ChevronDown />
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2 p-4">
              <Input
                id="course-type"
                placeholder="Enter course type"
                value={selectedFilters.courseType}
                onChange={(e) =>
                  setSelectedFilters({
                    ...selectedFilters,
                    courseType: e.target.value,
                  })
                }
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="company">
          <AccordionTrigger className="px-4">
            <p>Company</p>
            <ChevronDown />
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2 p-4">
              <Input
                id="company"
                placeholder="Enter company name"
                value={selectedFilters.company}
                onChange={(e) =>
                  setSelectedFilters({
                    ...selectedFilters,
                    company: e.target.value,
                  })
                }
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location">
          <AccordionTrigger className="px-4">
            <p>Location</p>
            <ChevronDown />
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2 p-4">
              <Input
                id="location"
                placeholder="Enter location"
                value={selectedFilters.location}
                onChange={(e) =>
                  setSelectedFilters({
                    ...selectedFilters,
                    location: e.target.value,
                  })
                }
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger className="px-4">
            <p>Rating</p>
            <ChevronDown />
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2 p-4">
              <Input
                id="rating"
                placeholder="Enter rating"
                value={selectedFilters.rating}
                onChange={(e) =>
                  setSelectedFilters({
                    ...selectedFilters,
                    rating: e.target.value,
                  })
                }
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="px-4">
            <p>Price</p>
            <ChevronDown />
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center gap-2 p-4">
              <Input
                type="number"
                id="min-price"
                placeholder="Min"
                value={selectedFilters.price.min}
                onChange={(e) =>
                  setSelectedFilters({
                    ...selectedFilters,
                    price: {
                      ...selectedFilters.price,
                      min: parseInt(e.target.value, 10),
                    },
                  })
                }
              />
              <span>-</span>
              <Input
                type="number"
                id="max-price"
                placeholder="Max"
                value={selectedFilters.price.max}
                onChange={(e) =>
                  setSelectedFilters({
                    ...selectedFilters,
                    price: {
                      ...selectedFilters.price,
                      max: parseInt(e.target.value, 10),
                    },
                  })
                }
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="duration">
          <AccordionTrigger className="px-4">
            <p>Course Duration</p>
            <ChevronDown />
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2 p-4">
              <Input
                id="duration"
                placeholder="Enter course duration"
                value={selectedFilters.duration}
                onChange={(e) =>
                  setSelectedFilters({
                    ...selectedFilters,
                    duration: e.target.value,
                  })
                }
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="difficulty">
          <AccordionTrigger className="px-4">
            <p>Difficulty Level</p>
            <ChevronDown />
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2 p-4">
              <Input
                id="difficulty"
                placeholder="Enter difficulty level"
                value={selectedFilters.difficulty}
                onChange={(e) =>
                  setSelectedFilters({
                    ...selectedFilters,
                    difficulty: e.target.value,
                  })
                }
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex justify-between mt-4 px-4">
        <Button type="button" variant="ghost" onClick={clearAllFilters}>
          Clear all
        </Button>
        <Button type="button" className="rounded-full bg-yellow-500 text-black">
          Apply filters
        </Button>
      </div>
    </form>
  );
};

export default FiltersForm;
