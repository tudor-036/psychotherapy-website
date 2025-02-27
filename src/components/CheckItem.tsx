import React from 'react';
import { Check } from 'lucide-react';

interface CheckItemProps {
  children: React.ReactNode;
}

/**
 * Reusable check item component for lists
 */
const CheckItem: React.FC<CheckItemProps> = ({ children }) => {
  return (
    <div className="flex items-start">
      <Check className="text-[#4A6073] mt-1 mr-3 flex-shrink-0" size={20} />
      <p>{children}</p>
    </div>
  );
};

export default CheckItem;