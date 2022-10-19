import "./styles/App.scss";
/* import Error404 from "./pages/404/error404.jsx"; */
/* import Task from "./components/pures/task"; */
import TaskList from "./components/containers/taskList";

function App() {
  return (
    <div className="App">
      {/*    <Error404 /> */}
      {/*      <Task /> */}
      <TaskList />
    </div>
  );
}

export default App;
