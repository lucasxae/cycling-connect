import React from "react";
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import Card from "../components/Card/Card";

interface MainLayoutProps {
  children: React.ReactNode; // Adicione uma prop para o conteúdo do contêiner direito
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <div style={mainContainerStyle}>
        <div style={sideBarContainerStyle}>
          <Sidebar></Sidebar>
          <div style={footerContainerStyle}>
            <Card>
              <span style={appNameStyle}>Cycling Connect</span>
              <span style={appVersionStyle}>Version 1.0</span>
            </Card>
          </div>
        </div>
        <div style={rightContainerStyle}>{children}</div>
      </div>
    </>
  );
};

const mainContainerStyle: React.CSSProperties = {
  display: "flex",
};

const rightContainerStyle: React.CSSProperties = {
  position: "fixed",
  marginLeft: "288px",
  height: "calc(100% - 8rem) ",
  width: "calc(100% - 288px - 2rem)",
};

const sideBarContainerStyle: React.CSSProperties = {
  position: "fixed",
  height: "calc(100% - 6rem)",
  width: "288px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const footerContainerStyle: React.CSSProperties = {
  padding: "1rem",
  height: "3rem",
};

const appNameStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#333",
};

const appVersionStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "#777",
  display: "block",
};

export default MainLayout;
