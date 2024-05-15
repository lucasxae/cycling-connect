import React, { useState } from "react";
import Card from "../components/Card/Card";

const CreateWorkout: React.FC = () => {
  return (
    <div style={containerStyle}>
      <Card>
        <div style={cardHeaderStyle}>
          <h2>Criar Planilha da semana</h2>
        </div>
        <div style={atletaContainer}>
          <span>Atleta</span>
        </div>
      </Card>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  whiteSpace: "nowrap",
  padding: "1rem",
  width: "100%",
  height: "100%",
};

const cardHeaderStyle: React.CSSProperties = {
  color: "#333",
  textAlign: "left",
  paddingLeft: "1rem",
  width: "100%",
  display: "flex",
};

const atletaContainer: React.CSSProperties = {
  marginTop: "1rem",
  paddingLeft: "1rem",
  color: "#333",
  textAlign: "left",
  display: "block",
};

export default CreateWorkout;
