'use client';

import { useState } from 'react';

import { faqData } from '@/mock/faq';
import FrequentlyAskedQuestionItem from './frequently-asked-question-item';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const FrequentlyAskedQuestions = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const questionsToShow = showAll ? faqData : faqData.slice(0, 8);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-center">FAQ</h2>
      <div
        className={cn(
          'flex flex-wrap flex-row w-full justify-between',
          showAll ? 'max-h-[2000px] transition-all duration-500' : 'max-h-[800px] overflow-hidden'
        )}
      >
        {questionsToShow.map((faq, index) => (
          <FrequentlyAskedQuestionItem
            key={index}
            value={index + 1}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
      <div className="w-full text-center mt-4">
        <Button
          onClick={handleShowAll}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {showAll ? 'Показати менше' : 'Дивитися всі'}
        </Button>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
