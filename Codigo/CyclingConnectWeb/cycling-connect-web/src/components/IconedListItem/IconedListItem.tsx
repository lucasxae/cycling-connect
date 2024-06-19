import React, { useState, useEffect } from "react";
import { IconType } from "react-icons";
import { Link, useLocation, useResolvedPath } from "react-router-dom";

interface IconedListItemProps {
  text: string;
  Icon: IconType;
  href: string;
}

const IconedListItem: React.FC<IconedListItemProps> = ({
  Icon,
  text,
  href,
}) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname === href);

  useEffect(() => {
    setIsActive(location.pathname === href);
  }, [location.pathname, href]);

  const liStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem",
    backgroundColor: isActive ? "#F04444" : "transparent",
    borderRadius: "5px",
  };

  const textStyle: React.CSSProperties = {
    fontSize: "16px",
    fontWeight: "bold",
    color: isActive ? "white" : "#333",
  };

  const iconStyle: React.CSSProperties = {
    height: "30px",
    width: "30px",
    color: isActive ? "white" : "#333",
    paddingRight: "1rem",
  };

  return (
    <li style={liStyle}>
      <Icon style={iconStyle}></Icon>
      <Link to={href}>
        <span className="text" style={textStyle}>
          {text}
        </span>
      </Link>
    </li>
  );
};

export default IconedListItem;
