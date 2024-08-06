import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

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
      <AccordionItem value={`item-${value}`} className=" border-black rounded-lg bg-gray-200">
        <AccordionTrigger >
            <div className="px-4 text-start w-full">
                <p className="line-clamp-1 w-full">{question}</p>
            </div>
        </AccordionTrigger>
        <AccordionContent>
            <div className="px-4 text-start w-full">
          {answer}

            </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FrequentlyAskedQuestionItem;
