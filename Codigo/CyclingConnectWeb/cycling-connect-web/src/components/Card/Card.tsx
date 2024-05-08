import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div style={cardStyle}>{children}</div>;
};

const cardStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  padding: "1rem",
  height: "100%",
};

export default Card;
