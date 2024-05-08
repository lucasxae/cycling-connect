import { useState } from "react";
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
