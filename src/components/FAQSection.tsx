import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isExpanded: boolean;
  toggleExpand: () => void;
}

/**
 * Individual FAQ item component
 */
const FAQItem: React.FC<FAQItemProps> = ({ 
  question, 
  answer, 
  isExpanded, 
  toggleExpand 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center"
        onClick={toggleExpand}
      >
        {question}
        <ChevronDown 
          className={`transition-transform duration-300 ${isExpanded ? 'transform rotate-180' : ''}`} 
          size={20} 
        />
      </button>
      
      {isExpanded && (
        <div className="px-6 py-4 bg-[#F7F3EB] border-t border-gray-200">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

/**
 * FAQ section component with expandable questions
 */
const FAQSection: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "I'm not sure therapy will work for me.",
      answer: "That's exactly why this consultation is free—so you can explore without pressure or commitment."
    },
    {
      question: "I don't want to dig up emotions I'm not ready for.",
      answer: "You control the pace. Therapy isn't about reliving trauma—it's about gaining clarity on your own terms."
    },
    {
      question: "I'm worried about the cost.",
      answer: "The first consultation is free. After that, flexible options are available."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F3EB]">
      <div className="max-w-3xl mx-auto">
        <SectionHeading>
          WHAT'S STOPPING YOU? (Eliminating Objections)
        </SectionHeading>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isExpanded={expandedFaq === index}
              toggleExpand={() => toggleFaq(index)}
            />
          ))}
        </div>
        
        <p className="text-center text-lg font-semibold mt-8">
          Take the first step now. You don't have to keep struggling alone.
        </p>
        
        <div className="text-center mt-8">
          <Button>
            Book a Free Consultation →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;