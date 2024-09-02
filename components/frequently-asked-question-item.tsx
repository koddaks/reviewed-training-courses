import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

type FrequentlyAskedQuestionItemProps = {
  question: string;
  answer: string;
  value: number;
};

const FrequentlyAskedQuestionItem = ({
  question,
  answer,
  value,
}: FrequentlyAskedQuestionItemProps) => {
  return (
    <Accordion type="single" className="w-[48%] mb-5" collapsible>
      <AccordionItem
        value={`item-${value}`}
        className=" border-black rounded-lg bg-gray-200"
      >
        <AccordionTrigger className="px-4 text-start w-full">
          <span className="line-clamp-1 w-full">{question}</span>
        </AccordionTrigger>
        <AccordionContent className="px-4 text-start w-full">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FrequentlyAskedQuestionItem;
