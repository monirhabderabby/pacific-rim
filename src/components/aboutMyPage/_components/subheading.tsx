import React from 'react';

interface SubHeadingProps {
  subheading: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({ subheading }) => {
  return (
    <h3 className="text-[20px] text-[#3D3D3D] font-bold mt-5">
      {subheading}
    </h3>
  );
};

export default SubHeading;
