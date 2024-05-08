import React from "react";
import "./Nav.css";
import userProfilePic from "../../../public/zelda8bit.png";
import { GoBellFill, GoSearch } from "react-icons/go";

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div style={leftContainerStyle}>
        <img src={userProfilePic} alt="User Profile" style={profilePicStyle} />
        <span style={userNameStyle}>{"Pedro"}</span>
      </div>
      <div style={centerContainerStyle}>
        <div style={searchContainerStyle}>
          {" "}
          <GoSearch style={searchIconStyle} />
          <input type="text" placeholder="Pesquisar" style={searchStyle} />
        </div>
      </div>
      <div style={rightContainerStyle}>
        <GoBellFill size={25} style={{ color: "black" }} />
      </div>
    </header>
  );
};

const searchContainerStyle: React.CSSProperties = {
  position: "relative",
  display: "inline-block",
  width: "100%",
};

const headerStyle: React.CSSProperties = {
  background: "white",
  color: "white",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const leftContainerStyle: React.CSSProperties = {
  paddingRight: "2rem",
  height: "2rem",
  display: "flex",
  alignItems: "center",
};

const userNameStyle: React.CSSProperties = {
  marginLeft: "10px",
  color: "black",
  fontWeight: "bold",
  fontSize: "1rem",
};

const centerContainerStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingRight: "2rem",
};

const rightContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginLeft: "1rem",
};

const profilePicStyle: React.CSSProperties = {
  width: "2rem",
  height: "2rem",
  borderRadius: "50%",
};

const searchStyle: React.CSSProperties = {
  backgroundColor: "#F5F5F5",
  padding: "0.5rem",
  paddingLeft: "2rem", // Ajustado para criar espaço para o ícone
  width: "100%", // Ajustado para ocupar toda a largura
  borderRadius: "20px", // Para torná-lo arredondado
  border: "none",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)", // Opcional: adiciona uma sombra sutil
};

const searchIconStyle: React.CSSProperties = {
  // Added to position the icon
  position: "absolute",
  left: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  paddingRight: "1rem",
  color: "#F04444",
};

export default Header;
