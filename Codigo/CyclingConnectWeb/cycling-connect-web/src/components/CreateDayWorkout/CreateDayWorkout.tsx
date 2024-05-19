import { Button, Card } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

interface CreateDayWorkoutProps {
  weekDay: string;
  createdAt: string;
  workoutId: string;
}

const CreateDayWorkout: React.FC<CreateDayWorkoutProps> = (props) => {
  return (
    <div style={wrapperStyle}>
      <div style={mainContainerStyle}>
        <div style={rightContainerStyle}>
          <div style={weekDayStyle}>
            <h4>{props.weekDay}</h4>
          </div>
        </div>
        <div style={leftContainerStyle}>
          <div style={createdAtStyle}>
            <span>{props.createdAt}</span>
          </div>
          <div style={editButtonStyle}>
            <Button endIcon={<EditIcon />}>Editar</Button>
          </div>
          <div style={deleteButtonStyle}>
            <Button endIcon={<DeleteIcon />}>Excluir</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const editButtonStyle: React.CSSProperties = {
  padding: "0 1rem",
};

const deleteButtonStyle: React.CSSProperties = {
  padding: "0 1rem",
};
const createdAtStyle: React.CSSProperties = {
  color: "#333",
  padding: "0 1rem",
};

const weekDayStyle: React.CSSProperties = {
  color: "#333",
  alignItems: "center",
};

const wrapperStyle: React.CSSProperties = {
  paddingTop: "1rem",
};

const rightContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-evenly",
  paddingLeft: "1rem",
};

const mainContainerStyle: React.CSSProperties = {
  borderRadius: "5px",
  border: "1px solid #ccc",
  display: "flex",
  justifyContent: "space-between",
};

const leftContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
};

export default CreateDayWorkout;
