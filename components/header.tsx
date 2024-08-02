import { Logo } from './logo';
import Navbar from './navbar';
import { SearchInput } from './search-input';



const Header = () => {
  return (
    <div className="fixed top-0 w-full h-[76px] px-4 border-b shadow-sm bg-white flex items-center ">
      <div className="container mx-auto flex items-center w-full justify-between">
        <div className="flex items-center justify-between w-1/2">
          <Logo />
          <div className="relative md:w-1/2 w-full">
          <SearchInput placeholder="Пошук"/>
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
