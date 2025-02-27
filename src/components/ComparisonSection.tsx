import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { Check, X } from 'lucide-react';

interface ListItemProps {
  children: React.ReactNode;
  type: 'positive' | 'negative';
}

/**
 * List item component for comparison section
 */
const ListItem: React.FC<ListItemProps> = ({ children, type }) => {
  const bulletColor = type === 'positive' ? 'text-[#4A6073]' : 'text-[#C98F8F]';
  
  return (
    <li className="flex items-start">
      <span className={`${bulletColor} mr-2`}>•</span>
      <span>{children}</span>
    </li>
  );
};

/**
 * Comparison section showing what therapy is and isn't about
 */
const ComparisonSection: React.FC = () => {
  const negativePoints = [
    '"Just think positive" affirmations.',
    'Short-term coping mechanisms that stop working when life gets real.',
    'Fixing what\'s "wrong" with you.'
  ];

  const positivePoints = [
    <><strong>Understanding why your mind works this way</strong> (and how to shift it).</>,
    <><strong>Navigating anxiety, not just suppressing it.</strong></>,
    <><strong>Building deeper, more meaningful relationships—without overthinking.</strong></>,
    <><strong>Finding clarity in who you are and what you truly want.</strong></>
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading>
          WHY THIS THERAPY IS DIFFERENT
        </SectionHeading>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          You've been told to "just manage it." That's not enough.<br />
          Most therapy teaches you how to <strong>cope</strong> with anxiety.<br />
          This is about <strong>transforming how you experience it.</strong>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#F7F3EB] border border-[#D8E2DC] p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <X className="text-[#C98F8F] mr-2" size={24} />
              <h3 className="font-serif text-xl font-semibold">This is NOT about:</h3>
            </div>
            <ul className="space-y-4">
              {negativePoints.map((point, index) => (
                <ListItem key={index} type="negative">{point}</ListItem>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105">
            <div className="flex items-center mb-4">
              <Check className="text-[#4A6073] mr-2" size={24} />
              <h3 className="font-serif text-xl font-semibold">This IS about:</h3>
            </div>
            <ul className="space-y-4">
              {positivePoints.map((point, index) => (
                <ListItem key={index} type="positive">{point}</ListItem>
              ))}
            </ul>
          </div>
        </div>
        
        <p className="text-center text-lg font-semibold mt-12 max-w-3xl mx-auto">
          Real tools. Real change. And it starts with a free conversation.
        </p>
        
        <div className="text-center mt-8">
          <Button>
            Book Now →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;