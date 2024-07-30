import { Button } from '@/components/ui/button';
import { Logo } from './logo';

const Footer = () => {
  return (
    <div className="flex flex-row fixed bottom-0 w-full h-[300px] p-4 border-t bg-black-1000 text-white">
      <div className="md:max-w-screen-2xl lg:max-w-[1280px] mx-auto flex items-center w-full justify-between">
        <Logo variant="white" />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost">
            Pivacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
