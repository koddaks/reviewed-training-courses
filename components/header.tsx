import { Logo } from './logo';
import Navbar from './navbar';

const Header = () => {
  return (
    <div className="fixed top-0 w-full h-[76px] px-4 border-b shadow-sm bg-white flex items-center ">
      <div className="container mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="md:block flex items-center justify-between w-72">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
