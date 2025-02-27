import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
}

/**
 * Individual testimonial component
 */
const Testimonial: React.FC<TestimonialProps> = ({ quote, name }) => {
  return (
    <div className="bg-[#F7F3EB] p-6 rounded-lg shadow-md">
      <Quote className="text-[#C98F8F] mb-4" size={24} />
      <p className="mb-6">{quote}</p>
      <p className="font-semibold">{name}</p>
    </div>
  );
};

/**
 * Testimonial section component
 */
const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote: "I was afraid therapy would be overwhelming. But this helped me understand myself in a way I never have before.",
      name: "Sarah M."
    },
    {
      quote: "I didn't think therapy was for me, but after just a few sessions, I finally feel like I have clarity over my life.",
      name: "Michael R."
    },
    {
      quote: "If you're on the fence, just book the consultation. It's free, and I promise, you won't regret it.",
      name: "Emma L."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading>
          WHAT OTHERS ARE SAYING (Social Proof & Trust-Building)
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index} 
              quote={testimonial.quote} 
              name={testimonial.name} 
            />
          ))}
        </div>
        
        <p className="text-center text-lg font-semibold mt-12">
          This works. And it can work for you too.
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

export default TestimonialSection;