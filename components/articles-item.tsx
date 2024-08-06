import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

type ArticlesItemProps = {
  title: string;
  description: string;
  link: string;
  linkText: string;
  imageSrc: string;
};

const ArticlesItem = ({
  title,
  link,
  linkText,
  description,
  imageSrc,
}: ArticlesItemProps) => {
  return (
    <div className="min-h-[453px] md:min-h-[300px] lg:max-w-80 xl:max-w-[404px] flex flex-col md:items-center md:text-center lg:text-start justify-between bg-gray-300 lg:bg-transparent p-4 rounded-md mb-4">
      <div className="flex flex-col md:flex-row lg:flex-col">
        <div className="flex justify-center">
          <Image src={imageSrc} alt="Article image" width={404} height={269} />
        </div>
        <div className="w-full">
          <h3 className="text-xl font-bold mb-4 mt-4">{title}</h3>
          <p className="text-lg pb-2">{description}</p>
        </div>
      </div>

      <div className="w-full">
        <Button
          variant="link"
          className="flex flex-col md:flex-row justify-end p-0"
          asChild
        >
          <Link
            href={link}
            className="font-bold underline underline-offset-4 md:items-end lg:justify-start"
          >
            {linkText}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ArticlesItem;
