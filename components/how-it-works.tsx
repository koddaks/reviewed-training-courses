import { steps } from '@/mock/how-it-works';
import HowItWorksItem from './how-it-works-item';

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold mb-6">Як це працює</h2>
      <div className="flex flex-col gap-8">
        {steps.map((step, index) => (
          <HowItWorksItem
            key={index}
            title={step.title}
            imageSrc="/rectangle.png"
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
