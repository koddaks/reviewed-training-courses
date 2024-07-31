import { Logo } from './logo';
import Navbar from './navbar';

const Header = () => {
  return (
    <div className=" fixed top-0 w-full h-[76px] px-4 border-b shadow-sm bg-white flex items-center ">
      <div className="md:max-w-screen-2xl lg:max-w-[1280px] mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
