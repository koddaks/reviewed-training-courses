import { Search } from 'lucide-react';
import { InputField } from './input-field';
import { Button } from './ui/button';
import Image from 'next/image';

const SearchSection = () => {
  return (
    <section className="container w-full flex flex-row justify-between items-center">
      <div className="w-1/2 flex flex-col gap-4 ">
        <h1 className="text-5xl font-bold">
          Знайдіть свій <span className="text-yellow">курс</span>
        </h1>
        <p>
          Шукаєте курси для розвитку? Введіть назву або використайте фільтри для
          звуження результатів.
        </p>
        <div className="flex gap-2 items-center w-full">
          <div className="relative w-3/6">
            <InputField
              placeholder="Пошук"
              className="border-2 border-grayNobel bg-gray-200 rounded-xl py-[20px] px-8"
              icon={<Search />}
              iconClassName="left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
            />
          </div>

          <Button className="h-11 bg-yellowLight text-black py-4 px-4 rounded-xl text-base hover:bg-yellowLight/80">
            Знайти курс
          </Button>
        </div>
      </div>
      <Image
        src="/woman-laptop.png"
        alt="Woman working on laptop"
        width={614}
        height={475}
      />
    </section>
  );
};

export default SearchSection;
