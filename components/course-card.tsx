import Image from 'next/image';

type CourseCardProps = {
  id: number;
  title: string;
  category: number | null;
  price: string;
  company: string;
  age: string;
  location: string;
  website: string;
  contact: string;
  description: string;
};

const CourseCard = async ({
  id,
  title,
  category,
  price,
  company,
  age,
  location,
  website,
  contact,
  description,
}: CourseCardProps) => {
  return (
    <div className='w-full h-full bg-white rounded-lg shadow-md p-4 flex flex-col justify-between'>
      <div className="flex flex-row justify-between border-b-2 pb-6 mb-6">
        <h2 className="text-sm font-bold">{title}</h2>
        <Image
          src={`/card-lemon-logo.svg`}
          alt={title}
          width={60}
          height={60}
        />
      </div>
    </div>
  );
};

export default CourseCard;
