import React from 'react';

interface StoreTextProps {
  storetext: string;
}

const StoreText: React.FC<StoreTextProps> = ({ storetext }) => {
  return (
    <p className="text-base text-[#444444] font-normal leading-[19.2px]">
      {storetext}
    </p>
  );
};

export default StoreText;
