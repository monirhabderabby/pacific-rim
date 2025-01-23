import React from 'react';

interface StoreHeadingProps {
  heading: string;
}

const StoreHeading: React.FC<StoreHeadingProps> = ({ heading }) => {
  return (
    <h2 className="text-xl lg:text-[32px] text-[#2A6C2D] font-bold leading-[38.4px]">
      {heading}
    </h2>
  );
};

export default StoreHeading;
