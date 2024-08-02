import { Logo } from './logo';
import Navbar from './navbar';
import { InputField } from './input-field';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <div className="fixed top-0 w-full h-[76px] px-4 border-b shadow-sm bg-white flex items-center ">
      <div className="container mx-auto flex items-center w-full justify-between">
        <div className="flex items-center justify-between w-1/2">
          <Logo />
          <div className=" md:w-1/2 w-full">
            <InputField
              placeholder="Пошук"
              icon={
                <Search className="w-5 h-5 hover:opacity-50 transform transition-all duration-300" />
              }
              iconClassName='bg-yellow-500 rounded-full bg-yellow'
            />
          </div>
        </div>

        <div className="md:block flex items-center justify-between w-72">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
