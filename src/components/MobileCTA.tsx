import React from 'react';

/**
 * Mobile-only sticky CTA button
 */
const MobileCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-4 right-4 z-50">
      <button className="bg-[#C98F8F] hover:bg-[#B97A7A] transition-all duration-300 text-white font-semibold px-4 py-3 rounded-lg shadow-lg">
        Book Free Call
      </button>
    </div>
  );
};

export default MobileCTA;