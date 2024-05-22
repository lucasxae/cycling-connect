// NewWorkoutModal.tsx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

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

interface NewWorkoutModalProps {
  open: boolean;
  handleClose: () => void;
  handleAddWorkout: (workout: Workout) => void;
}

const CreateWorkoutModal: React.FC<NewWorkoutModalProps> = ({
  open,
  handleClose,
  handleAddWorkout,
}) => {
  const [newWorkout, setNewWorkout] = useState({
    createdAt: "",
    weekDay: "",
    workoutId: "",
    heartRateZone: "",
    totalDistance: "",
    totalDuration: "",
    averageSpeed: "",
    lapTime: "",
    routeSuggestion: "",
  });

  const [weekDay, setWeekDay] = useState(newWorkout.weekDay);

  const handleSelectChange = (event: SelectChangeEvent) => {
    setWeekDay(event.target.value as string);
    newWorkout.weekDay = event.target.value as string;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewWorkout({
      ...newWorkout,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = () => {
    handleAddWorkout(newWorkout);
    setWeekDay("");
    setNewWorkout({
      createdAt: "",
      weekDay: "",
      workoutId: "",
      heartRateZone: "",
      totalDistance: "",
      totalDuration: "",
      averageSpeed: "",
      lapTime: "",
      routeSuggestion: "",
    });
    handleClose();
  };

  const handleCancel = () => {
    setWeekDay("");
    setNewWorkout({
      createdAt: "",
      weekDay: "",
      workoutId: "",
      heartRateZone: "",
      totalDistance: "",
      totalDuration: "",
      averageSpeed: "",
      lapTime: "",
      routeSuggestion: "",
    });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Novo Treino</DialogTitle>
      <DialogContent>
        <Select
          variant="outlined"
          style={{ color: "black" }}
          value={weekDay}
          inputProps={{
            name: "weekDay",
          }}
          placeholder={"Dia da Semana"}
          onChange={handleSelectChange}
        >
          <MenuItem value={"Segunda-Feira"}>Segunda-Feira</MenuItem>
          <MenuItem value={"Terça-Feira"}>Terça-Feira</MenuItem>
          <MenuItem value={"Quarta-Feira"}>Quarta-Feira</MenuItem>
          <MenuItem value={"Quinta-Feira"}>Quinta-Feira</MenuItem>
          <MenuItem value={"Sexta-Feira"}>Sexta-Feira</MenuItem>
          <MenuItem value={"Sábado"}>Sábado</MenuItem>
          <MenuItem value={"Domingo"}>Domingo</MenuItem>
        </Select>
        <TextField
          autoFocus
          margin="normal"
          name="heartRateZone"
          label="Zona Cardíaca"
          type="text"
          fullWidth
          value={newWorkout.heartRateZone}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="normal"
          name="totalDistance"
          label="Distância Total"
          type="string"
          fullWidth
          value={newWorkout.totalDistance}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="normal"
          name="totalDuration"
          label="Tempo de treino (hh:mm)"
          type="string"
          fullWidth
          value={newWorkout.totalDuration}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="normal"
          name="averageSpeed"
          label="Velocidade Média (km/h)"
          type="string"
          fullWidth
          value={newWorkout.averageSpeed}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="normal"
          name="lapTime"
          label="Velocidade da Volta/Estímulo"
          type="string"
          fullWidth
          value={newWorkout.lapTime}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="normal"
          name="routeSuggestion"
          label="Trajeto Sugerido"
          type="string"
          fullWidth
          value={newWorkout.routeSuggestion}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <div style={{ display: "flex" }}>
          <div>
            <Button
              onClick={handleCancel}
              style={{ display: "flex", flex: "flex-start" }}
            >
              Cancelar
            </Button>
          </div>
          <div>
            <Button
              onClick={handleSave}
              style={{ display: "flex", flex: "flex-start" }}
            >
              Adicionar
            </Button>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default CreateWorkoutModal;
