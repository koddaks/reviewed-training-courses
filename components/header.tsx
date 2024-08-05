import { Logo } from './logo';
import Navbar from './navbar';
import { InputField } from './input-field';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <div className="fixed top-0 w-screen z-10 h-[76px] px-4 border-b shadow-xl bg-white flex items-center ">
      <div className="container mx-auto flex items-center w-full justify-between">
        <div className="flex items-center justify-between w-1/2">
          <Logo />
          <div className="relative md:w-1/2 w-full">
            <InputField
              placeholder="Пошук"
              className="border-2 border-gray-200  rounded-xl py-[20px] px-8"
              icon={<Search />}
              iconClassName="left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
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
