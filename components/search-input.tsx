import { cn } from '@/lib/utils';
import { Input } from './ui/input';

import { Search } from 'lucide-react';

type SearchInputProps = {
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

export const SearchInput = ({
  placeholder,
  disabled,
  className,
}: SearchInputProps) => {
  return (
    <div className={cn(className)}>
      <Input
        placeholder={placeholder}
        disabled={disabled}
        className={cn('rounded-3xl border-black-1000')}
        suffix={
          <Search className="w-6 h-6 hover:opacity-50 transform transition-all duration-300" />
        }
      />
    </div>
  );
};
