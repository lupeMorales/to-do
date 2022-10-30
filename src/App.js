import "./styles/App.scss";

import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import LoginPage from "./pages/auth/LoginPage";
import SingUPage from "./pages/auth/SingUpPage";
import TaskList from "./components/containers/taskList";

function App() {
  const logged = true;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SingUPage />} />
        <Route
          path="/tasks"
          element={logged ? <TaskList /> : <Navigate replace to={"/login"} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
