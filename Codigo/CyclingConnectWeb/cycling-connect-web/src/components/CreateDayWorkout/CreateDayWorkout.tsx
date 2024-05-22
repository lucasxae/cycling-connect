import { Button, Card } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import EditWorkoutModal from "../EditWorkoutModal/EditWorkoutModal";

interface Workout {
  createdAt: string;
  weekDay: string;
  workoutId: string;
  heartRateZone: string;
  totalDistance: string;
  totalDuration: string;
  averageSpeed: string;
  lapTime: string;
  routeSuggestion: string;
}

interface CreateDayWorkoutProps {
  workout: Workout;
  onDelete: (workoutId: string) => void;
  onEdit: (workout: Workout) => void;
}

const CreateDayWorkout: React.FC<CreateDayWorkoutProps> = (props) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const { workout, onDelete, onEdit } = props;

  const handleDeleteClick = () => {
    onDelete(workout.workoutId);
  };

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    onEdit(workout);
  };

  return (
    <div style={wrapperStyle}>
      <div style={mainContainerStyle}>
        <div style={rightContainerStyle}>
          <div style={weekDayStyle}>
            <h4>{workout.weekDay}</h4>
          </div>
        </div>
        <div style={leftContainerStyle}>
          <div style={createdAtStyle}>
            <span>{workout.createdAt}</span>
          </div>
          <div style={editButtonStyle}>
            <Button
              variant="outlined"
              onClick={handleEditClick}
              endIcon={<EditIcon />}
            >
              Editar
            </Button>
          </div>
          <div style={deleteButtonStyle}>
            <Button
              variant="outlined"
              onClick={handleDeleteClick}
              endIcon={<DeleteIcon />}
            >
              Excluir
            </Button>
          </div>
        </div>
      </div>
      <EditWorkoutModal
        workout={workout}
        open={editModalOpen}
        handleEditWorkout={onEdit}
        handleClose={handleCloseEditModal}
      />
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
