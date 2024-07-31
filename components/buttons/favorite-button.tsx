'use client';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import { useState } from 'react';

export const FavoriteButton = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Button
      size="sm"
      className={cn(
        'w-28 h-10 text-black rounded-xl bg-grey hover:bg-greyLight gap-2',
        isActive && 'bg-greyLight'
      )}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <Heart
        className={cn('w-4 h-4 ', isActive && 'text-purple fill-purple')}
      />
      <span className="text-black">Зберегти</span>
    </Button>
  );
};
