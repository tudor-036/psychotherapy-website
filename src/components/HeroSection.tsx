import React from 'react';
import Button from './Button';

/**
 * Hero section component with background image and CTA
 */
const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with optional subtle motion */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Person in deep thought"
          className="object-cover w-full h-full opacity-50"
        />
        <div className="absolute inset-0 bg-[#374A60] bg-opacity-60 backdrop-blur-md"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
          Your Mind Won’t Stop Racing. <br /> Here’s How You Take Back Control.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-3xl mx-auto leading-relaxed">
          Lying awake at 2 AM? Overanalyzing everything? Feeling like you should
          have it all together—but don’t? That’s not failure. That’s anxiety.
          And we can change that.
        </p>

        {/* CTA Button */}
        <Button
          variant="secondary"
          className="mt-8 px-8 py-4 text-xl font-semibold bg-[#C98F8F] text-white rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-[#B57C7C]"
        >
          Claim Your Free 15-Min Consultation
        </Button>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#F7F3EB"
            fillOpacity="1"
            d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
