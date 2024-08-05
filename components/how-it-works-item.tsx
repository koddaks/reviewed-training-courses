import Image from 'next/image';

const HowItWorksItem = ({ step }: { step: any }) => {
  return (
    <div className="flex even:flex-row-reverse justify-between">
      <div className="w-1/3">
        <Image
          src="/rectangle.png"
          alt="How it works"
          width={404}
          height={261}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center ">
        <div className="text-xl font-bold mb-2">{step.title}</div>
        <div className="text-gray-600">{step.description}</div>
      </div>
    </div>
  );
};

export default HowItWorksItem;
