/* import LoginFormik from "./components/pures/loginFormik"; */
/* import RegisterFormik from "./components/pures/registerFormik"; */
import LoginPage from "./pages/auth/LoginPage";
import Home from "./pages/home/Home";
import "./styles/App.scss";
/* import Error404 from "./pages/404/error404.jsx"; */
/* import Task from "./components/pures/task"; */
/* import TaskList from "./components/containers/taskList"; */

function App() {
  return (
    <div className="App">
      {/*    {<Error404 />} */}
      {/*      <Task /> */}
      {/*   <TaskList /> */}
      {/*       <LoginFormik /> */}
      {/*     <RegisterFormik /> */}
      {<Home />}
      {/*     <LoginPage /> */}
    </div>
  );
}

export default App;
