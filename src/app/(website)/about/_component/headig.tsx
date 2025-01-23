// package import 
import React from 'react';


interface HeadingProps {
  heading: string; 
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
  return (
    <h2 className="text-xl font-bold text-[#3D3D3D] left-6">
      {heading}
    </h2>
  );
};

export default Heading;

