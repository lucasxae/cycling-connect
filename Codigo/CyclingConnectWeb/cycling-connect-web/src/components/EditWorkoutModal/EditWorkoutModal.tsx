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
  workout: Workout;
  handleEditWorkout: (workout: Workout) => void;
}

const EditWorkoutModal: React.FC<NewWorkoutModalProps> = ({
  open,
  handleClose,
  workout,
  handleEditWorkout,
}) => {
  const [receivedWorkout, setWorkout] = useState<Workout>(workout);
  const handleSelectChange = (event: SelectChangeEvent) => {
    workout.weekDay = event.target.value as string;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkout({
      ...receivedWorkout,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = () => {
    handleEditWorkout(receivedWorkout);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Novo Treino</DialogTitle>
      <DialogContent>
        <Select
          disabled={true}
          variant="outlined"
          style={{ color: "black" }}
          value={receivedWorkout.weekDay}
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
          value={receivedWorkout.heartRateZone}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="normal"
          name="totalDistance"
          label="Distância Total"
          type="string"
          fullWidth
          value={receivedWorkout.totalDistance}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="normal"
          name="totalDuration"
          label="Tempo de treino (hh:mm)"
          type="string"
          fullWidth
          value={receivedWorkout.totalDuration}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="normal"
          name="averageSpeed"
          label="Velocidade Média (km/h)"
          type="string"
          fullWidth
          value={receivedWorkout.averageSpeed}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="normal"
          name="lapTime"
          label="Velocidade da Volta/Estímulo"
          type="string"
          fullWidth
          value={receivedWorkout.lapTime}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="normal"
          name="routeSuggestion"
          label="Trajeto Sugerido"
          type="string"
          fullWidth
          value={receivedWorkout.routeSuggestion}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <div style={{ display: "flex" }}>
          <div>
            <Button
              onClick={handleClose}
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
              Salvar
            </Button>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default EditWorkoutModal;
