import { faqData } from "@/mock/faq";
import FrequentlyAskedQuestionItem from "./frequently-asked-question-item";

const FrequentlyAskedQuestions = () => {
    return (
        <section>
        <h2 className="text-3xl font-bold mb-6 text-center">FAQ</h2>
        <div className="flex flex-wrap flex-row w-full justify-between">
          {faqData.map((faq, index) => (
            <FrequentlyAskedQuestionItem key={index} value={index + 1} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    )
}

export default FrequentlyAskedQuestions;