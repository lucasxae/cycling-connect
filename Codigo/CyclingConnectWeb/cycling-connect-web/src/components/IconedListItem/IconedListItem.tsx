import React, { useState } from "react";
import { IconType } from "react-icons";

interface IconedListItemProps {
  text: string;
  Icon: IconType;
}

const IconedListItem: React.FC<IconedListItemProps> = ({ Icon, text }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const liStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem",
    backgroundColor: isClicked ? "#F04444" : "transparent",
    borderRadius: "5px",
  };

  const textStyle: React.CSSProperties = {
    fontSize: "16px",
    fontWeight: "bold",
    color: isClicked ? "white" : "#333",
  };

  const iconStyle: React.CSSProperties = {
    height: "30px",
    width: "30px",
    color: isClicked ? "white" : "#333",
    paddingRight: "1rem",
  };

  return (
    <li style={liStyle} onClick={handleClick}>
      <Icon style={iconStyle}></Icon>
      <span className="text" style={textStyle}>
        {text}
      </span>
    </li>
  );
};

export default IconedListItem;
