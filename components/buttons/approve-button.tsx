import { Button } from "../ui/button";
import { Check } from 'lucide-react';


export const ApproveButton = () => {
  return (
    <Button size="lg" variant="approve" className="px-9 py-[21px] hover:bg-greendark transition-colors duration-300">
      Button <Check className="ml-2 w-6 h-6 " />
    </Button>
  );
};
