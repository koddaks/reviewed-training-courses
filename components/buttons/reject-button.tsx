import { Button } from '../ui/button';
import { X } from 'lucide-react';

export const RejectButton = () => {
  return (
    <Button size="lg" variant="reject" className="px-9 py-[20px]">
      Button
      <X className="ml-2 w-5 h-6" />
    </Button>
  );
};
