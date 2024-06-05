import React from "react";

interface CardProps {
  children: React.ReactNode;
  background?: string;
}

const Card: React.FC<CardProps> = ({ children, background }) => {
  const cardStyle: React.CSSProperties = {
    background: background ? background : "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    padding: "1rem",
    height: "100%",
    textAlign: "center",
    border: "1px solid #f0f0f0",
  };
  return <div style={cardStyle}>{children}</div>;
};

export default Card;
