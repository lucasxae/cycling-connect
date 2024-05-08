import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router
import "./Nav.css";
import userProfilePic from "../../public/zelda8bit.png";
import { GoBellFill } from "react-icons/go";

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div style={leftContainerStyle}>
        <img src={userProfilePic} alt="User Profile" style={profilePicStyle} />
      </div>
      <div style={centerContainerStyle}>
        <input type="text" placeholder="Pesquisar" style={searchStyle} />
      </div>
      <div style={rightContainerStyle}>
        <GoBellFill size={25} />
      </div>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  background: "#333",
  color: "#fff",
  padding: "1rem",
  display: "flex",
  alignItems: "center",
};

const leftContainerStyle: React.CSSProperties = {
  marginRight: "1rem",
  height: "30px",
};

const centerContainerStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
  alignItems: "center",
};

const rightContainerStyle: React.CSSProperties = {
  textAlign: "right",
  height: "30px",
  marginLeft: "1rem",
};

const profilePicStyle: React.CSSProperties = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
};

const searchStyle: React.CSSProperties = {
  display: "flex",
  padding: "0.5rem",
  width: "70%", // Adjust according to your design
  borderRadius: "20px", // To make it round
  border: "none",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)", // Optional: adds a subtle shadow
};

export default Header;
