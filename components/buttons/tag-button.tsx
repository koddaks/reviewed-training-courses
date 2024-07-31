'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Dot } from 'lucide-react';
import { cn } from '@/lib/utils';

export const TagButton = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <Button
      onClick={() => {
        setDisabled(!disabled);
      }}
      size="lg"
      //   disabled={disabled}
      variant="outline"
      className={cn(
        'group px-9 py-5  border-yellow hover:bg-greyLight hover:border-greyLight transition-colors duration-300',
        disabled && 'text-greyDark border-greyDark'
      )}
    >
      <Dot
        className={cn(
          'w-10 h-10 -ml-4 text-yellow  group-hover:text-purple transition-colors duration-300',
          disabled && 'text-greyDark'
        )}
      />
      <span className="relative -ml-2 text-black">Tag</span>
    </Button>
  );
};
