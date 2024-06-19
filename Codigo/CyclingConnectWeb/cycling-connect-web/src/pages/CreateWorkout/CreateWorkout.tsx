import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import Card from "../../components/Card/Card";

import {
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
  duration,
} from "@mui/material";
import CreateDayWorkout from "../../components/CreateDayWorkout/CreateDayWorkout";
import CreateWorkoutModal from "../../components/CreateWorkoutModal/CreateWorkoutModal";
import axios from "axios";
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

interface WorkoutApiResponse {
  date: string;
  diaSemana: string;
  id: string;
  intensity: string;
  totalDistance: string;
  duration: string;
  averageSpeed: string;
  lapSpeed: string;
  suggestedRoute: string;
  status: string;
}

interface Athlete {
  id: string;
  username: string;
  email: string;
}

const CreateWorkout: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [open, setOpen] = useState(false);
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/users/getAthlete", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") || "",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAthletes(data);
        setSelectedAthlete(data[0]);
      })
      .catch((error) => {
        console.error("Erro ao buscar atletas:", error);
      });
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (event: SelectChangeEvent) => {
    const athleteId = event.target.value as string;
    const athlete = athletes.find((a) => a.id === athleteId) as Athlete;
    fetch(`http://localhost:8080/exercise/getWeeklyExercise/${athlete.email}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") || "",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        setWorkouts(
          data.map((w: WorkoutApiResponse) => {
            return {
              createdAt: w.date,
              weekDay: w.diaSemana,
              workoutId: w.id,
              heartRateZone: w.intensity,
              totalDistance: w.totalDistance,
              totalDuration: w.duration,
              averageSpeed: w.averageSpeed,
              lapTime: w.lapSpeed,
              routeSuggestion: w.suggestedRoute,
            };
          })
        )
      )
      .catch((error) => console.error("Erro ao buscar workouts:", error));
    setSelectedAthlete(athlete || null);
  };

  const handleAddWorkout = (workout: Workout) => {
    setWorkouts((prevWorkouts) => [
      ...prevWorkouts,
      {
        ...workout,
        workoutId: (prevWorkouts.length + 1).toString(),
        createdAt: format(new Date().toISOString(), "dd/MM/yyyy"),
      },
    ]);
  };

  const handleEditWorkout = (workout: Workout) => {
    setWorkouts((prevWorkouts) => [
      ...prevWorkouts.map((prevWorkout) => {
        if (prevWorkout.workoutId === workout.workoutId) {
          return workout;
        }
        return prevWorkout;
      }),
    ]);
  };

  const handleDeleteWorkout = (workoutId: string) => {
    setWorkouts((prevWorkouts) =>
      prevWorkouts.filter((workout) => workout.workoutId !== workoutId)
    );
  };

  const handleSave = () => {
    console.log("Salvando workouts:", workouts);
    axios
      .post(
        "http://localhost:8080/exercise/create",
        {
          exercises: workouts.map((workout) => ({
            lapSpeed: workout.lapTime,
            suggestedRoute: workout.routeSuggestion,
            duration: workout.totalDuration,
            averageSpeed: parseInt(workout.averageSpeed),
            totalDistance: parseInt(workout.totalDistance),
            intesity: workout.heartRateZone,
            date: workout.createdAt,
            email: selectedAthlete?.email,
          })),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token") || "",
          },
        }
      )
      .then((response) => {
        console.log("Workouts salvos com sucesso:", response.data);
      })
      .catch((error) => {
        console.log("Erro ao salvar workouts:", error);
      });
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
                onChange={handleChange}
                style={selectAthleteStyle}
              >
                {athletes.map((athlete) => (
                  <MenuItem key={athlete.id} value={athlete.id}>
                    {athlete.username}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
          <div>
            <button style={addButtonStyle} onClick={handleOpen}>
              Adicionar
            </button>
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
          {workouts.map((workout, index) => (
            <CreateDayWorkout
              key={index}
              workout={workout}
              onDelete={handleDeleteWorkout}
              onEdit={handleEditWorkout}
            />
          ))}
        </div>
        <div style={saveButtonContainerStyle}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
            onClick={handleSave}
          >
            Salvar
          </Button>
        </div>
      </Card>
      <CreateWorkoutModal
        open={open}
        handleClose={() => setOpen(false)}
        handleAddWorkout={handleAddWorkout}
      />
    </div>
  );
};

const saveButtonContainerStyle: React.CSSProperties = {
  display: "flex",
  width: "100%",
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
  height: "70%",
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
