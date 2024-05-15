import { useState } from "react";
import MainLayout from "./layouts/MainLayout.tsx";
import CreateWorkout from "./pages/CreateWorkout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/planilhas" element={<CreateWorkout />}></Route>
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
