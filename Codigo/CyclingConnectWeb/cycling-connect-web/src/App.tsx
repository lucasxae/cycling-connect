import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import Nav from "./components/Nav/Nav.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import CreateWorkout from "./pages/CreateWorkout.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainLayout>
        <CreateWorkout></CreateWorkout>
      </MainLayout>
    </>
  );
}

export default App;
