'use client';

import { useState, useEffect } from 'react';
import { ChevronUp, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type ExpandableTextProps = {
  text: string;
};

const ExpandableText = ({ text }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleText = () => {
    setIsAnimating(true);
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isAnimating) {
      timer = setTimeout(() => {
        setIsAnimating(false);
      }, 900); // Замените 700 на фактическое время анимации в мс
    }

    return () => clearTimeout(timer);
  }, [isAnimating]);

  return (
    <div
      className={cn(
        'relative text-gray-500 py-4 text-sm w-full transition-max-height overflow-hidden',
        isExpanded ? 'max-h-transition-screen' : 'max-h-16 overflow-hidden'
      )}
    >
      <p onClick={toggleText}>{text}</p>
      <Button
        onClick={toggleText}
        className={cn(
          'absolute h-4 text-black p-0 bg-white -bottom-[2px] right-2',
          isExpanded && '-bottom-0 right-1/2 translate-x-1/2 w-full',
          !isAnimating || !isExpanded && '-bottom-0 right-1/2 translate-x-1/2 w-full'
        )}
        variant="ghost"
      >
        {isAnimating  ? (
          <ChevronUp />
        ) : isExpanded ? (
            <ChevronUp />
          
        ) : (
          '...More Details'
        )}
      </Button>
    </div>
  );
};

export default ExpandableText;
