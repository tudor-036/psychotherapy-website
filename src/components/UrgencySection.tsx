import React from 'react';
import SectionHeading from './SectionHeading';
import CheckItem from './CheckItem';
import Button from './Button';

/**
 * Urgency section component to drive immediate action
 */
const UrgencySection: React.FC = () => {
  const benefits = [
    "You don't have to be \"bad enough\" to deserve clarity.",
    "You don't have to keep feeling stuck.",
    "Change starts the moment you decide it does."
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F3EB]">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading className="mb-6">
          WHY NOW? WHY NOT LATER?
        </SectionHeading>
        <p className="text-lg mb-8">
          Another week will pass. Another month.
        </p>
        <p className="text-lg mb-8">
          You'll wake up, scroll your phone, go to work, make plans, overthink, feel exhausted, tell yourself you'll figure it out later… and nothing will change.
        </p>
        <p className="text-lg mb-8">
          You don't have to wait until you're in crisis to get help.
        </p>
        
        <ul className="text-left space-y-4 mb-8 max-w-xl mx-auto">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckItem>{benefit}</CheckItem>
            </li>
          ))}
        </ul>
        
        <div className="relative">
          <Button variant="secondary">
            Book Now →
          </Button>
          <p className="text-sm text-[#C98F8F] font-semibold mt-4">
            Spots are limited. Availability will not last.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            No commitment. No pressure. Just clarity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;