import { useState } from "react";
import MainLayout from "./layouts/MainLayout.tsx";
import CreateWorkout from "./pages/CreateWorkout/CreateWorkout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
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
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Routes>
          <Route path="/planilhas" element={<CreateWorkout />}></Route>
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
