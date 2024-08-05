import { steps } from '@/mock/how-it-works';
import HowItWorksItem from './how-it-works-item';

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Як це працює</h2>
        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <HowItWorksItem key={index} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
