import { cn } from '@/lib/utils';
import { Input } from './ui/input';

type InputFieldProps = {
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
}: InputFieldProps) => {
  return (
      <Input
        placeholder={placeholder}
        disabled={disabled}
        className={cn('rounded-3xl border-black', className)}
        icon={
          icon
        }
        iconClassName={iconClassName}
      />
  );
};
