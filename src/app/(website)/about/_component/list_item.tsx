import React from "react";

interface ListItemProps {
  title: string;
  spanTitle: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, spanTitle }) => {
  return (
    <li className="text-base text-[#444444] font-normal leading-[19.2px] list-disc pt-2">
      <span className="font-medium">{spanTitle}</span> {title}
    </li>
  );
};

export default ListItem;
