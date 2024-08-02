import { cn } from '@/lib/utils';
import { Input } from './ui/input';

import { Search } from 'lucide-react';

type SearchInputProps = {
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconClassName?: string;
};

export const InputField = ({
  placeholder,
  disabled,
  className,
  icon,
  iconClassName,
}: SearchInputProps) => {
  return (
      <Input
        placeholder={placeholder}
        disabled={disabled}
        className={cn('rounded-3xl border-black-1000', className)}
        icon={
          icon
        }
        iconClassName={iconClassName}
      />
  );
};
