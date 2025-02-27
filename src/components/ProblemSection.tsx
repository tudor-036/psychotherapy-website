import React from 'react';
import SectionHeading from './SectionHeading';
import CheckItem from './CheckItem';
import Button from './Button';

/**
 * Problem section component highlighting why users are stuck
 */
const ProblemSection: React.FC = () => {
  const problems = [
    "Your mind is constantly running, analyzing every little thing.",
    "Decisions feel like a game of mental chess—exhausting and never-ending.",
    "You crave deeper connections, but your relationships feel distant.",
    "You tell yourself it's just stress, but the anxiety never really goes away."
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F3EB]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading>
          WHY YOU'RE STILL STUCK (The Real Problem)
        </SectionHeading>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          You've tried to figure it out on your own. You've intellectualized your emotions, maybe even dabbled in therapy before.
        </p>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-center mb-6">But the same patterns keep showing up:</p>
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <CheckItem>{problem}</CheckItem>
            </div>
          ))}
        </div>
        
        <p className="text-center text-lg font-semibold mt-8 max-w-3xl mx-auto">
          The truth? You don't need more willpower—you need the right approach.
        </p>
        
        <div className="text-center mt-12">
          <Button>
            Book a Free Consultation →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;