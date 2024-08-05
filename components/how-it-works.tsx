import { steps } from '@/mock/how-it-works';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Як це працює</h2>
        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex even:flex-row-reverse justify-between">
              <div className='w-1/3'>
                <Image
                  src="/rectangle.png"
                  alt="How it works"
                  width={404}
                  height={261}
                />
              </div>
              <div className='w-1/2 flex flex-col justify-center '>
                <div className="text-xl font-bold mb-2">{step.title}</div>
                <div className="text-gray-600">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
