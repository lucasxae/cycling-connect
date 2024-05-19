import React, { useState } from "react";
import Card from "../../components/Card/Card";
import { Select, InputBase, MenuItem, SelectChangeEvent } from "@mui/material";
import CreateDayWorkout from "../../components/CreateDayWorkout/CreateDayWorkout";

const CreateWorkout: React.FC = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div style={containerStyle}>
      <Card>
        <div style={cardHeaderStyle}>
          <h2>Criar Planilha da semana</h2>
        </div>
        <div style={createWorkoutTopContainer}>
          <div style={selectAthleteContainer}>
            <h3 style={athleteHeaderStyle}>Atleta</h3>
            <div style={athleteDropDownStyle}>
              <Select
                size="medium"
                variant="outlined"
                value={age}
                label="Age"
                onChange={handleChange}
                style={selectAthleteStyle}
              >
                <MenuItem value={10}>Eveline</MenuItem>
                <MenuItem value={20}>Samuel</MenuItem>
                <MenuItem value={30}>Ana</MenuItem>
              </Select>
            </div>
          </div>
          <div>
            <button style={addButtonStyle}>Adicionar</button>
          </div>
        </div>
        <div style={weekDaysContainerStyle}>
          <div>
            <div style={wrapperStyle}>
              <div style={mainContainerStyle}>
                <div style={rightContainerStyle}>
                  <h3>Treinos Da Semana</h3>
                </div>
                <div style={leftContainerStyle}></div>
              </div>
            </div>
          </div>
          <CreateDayWorkout
            createdAt="2024-01-01"
            weekDay="Segunda-Feira"
            workoutId="1"
          />
          <CreateDayWorkout
            createdAt="2024-01-01"
            weekDay="Terça-Feira"
            workoutId="1"
          />
          <CreateDayWorkout
            createdAt="2024-01-01"
            weekDay="Quarta-Feira"
            workoutId="1"
          />
        </div>
      </Card>
    </div>
  );
};

const wrapperStyle: React.CSSProperties = {
  paddingTop: "1rem",
};

const rightContainerStyle: React.CSSProperties = {
  color: "#333",
  display: "flex",
  justifyContent: "space-evenly",
  paddingLeft: "1rem",
};

const mainContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};

const leftContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const weekDaysContainerStyle: React.CSSProperties = {
  padding: "1rem 0",
};
const selectAthleteStyle: React.CSSProperties = {
  width: "200px",
};

const createWorkoutTopContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};

const addButtonStyle: React.CSSProperties = {
  backgroundColor: "#f04444",
  color: "white",
  width: "150px  ",
};

const athleteHeaderStyle: React.CSSProperties = {
  margin: "1rem 0",
};

const athleteDropDownStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  color: "#black",
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
  width: "100%",
  display: "flex",
};

const selectAthleteContainer: React.CSSProperties = {
  color: "#333",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

export default CreateWorkout;
