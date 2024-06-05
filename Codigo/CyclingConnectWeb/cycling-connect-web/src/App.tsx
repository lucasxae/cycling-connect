import { useState } from "react";
import MainLayout from "./layouts/MainLayout.tsx";
import CreateWorkout from "./pages/CreateWorkout/CreateWorkout.tsx";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Feedbacks from "./pages/Feedbacks/Feedbacks.tsx";
import { Login } from "./pages/Login/login.tsx";
import EventsPage from "./pages/Events/Events.tsx";
function App() {
  const [count, setCount] = useState(0);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#f04444",
      },
      secondary: {
        main: "#f44336",
      },
      text: {
        primary: "#333",
        secondary: "#333",
      },
    },
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Routes>
            <Route path="/planilhas" element={<CreateWorkout />}></Route>
            <Route path="/feedbacks" element={<Feedbacks />}></Route>
            <Route path="/eventos" element={<EventsPage />}></Route>
          </Routes>
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
