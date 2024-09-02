import Image from 'next/image';

type HowItWorksCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const HowItWorksCard = ({ title, description, imageSrc }: HowItWorksCardProps) => {
  return (
    <div className="flex even:flex-row-reverse justify-between">
      <div className="w-1/3">
        <Image
          src={imageSrc}
          alt="How it works"
          width={404}
          height={261}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
