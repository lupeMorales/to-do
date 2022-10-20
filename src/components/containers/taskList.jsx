import React, { useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { TaskClass } from "../../models/taskClass";
import Task from "../pures/task";
import TaskForm from "../pures/taskForm";
import "../../styles/components/taskList.scss";
import image2 from "../../images/addTask (2).svg";

const TaskList = () => {
  const task1 = new TaskClass("taskis", "description", true, LEVELS.URGENT);
  const task2 = new TaskClass("taskta", "description", false, LEVELS.NORMAL);
  const task3 = new TaskClass("task3", "description", false, LEVELS.BLOCKING);

  const [tasks, setTasks] = useState([task1, task2, task3]);

  const [formOpen, setFormOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  //control del ciclo de vida del componente

  useEffect(() => {
    console.log("update takList state");
    setLoading(false);
  }, [tasks]);

  //change task status: completed/not completed
  function completeTask(task) {
    const index = tasks.indexOf(task);
    const tempList = [...tasks];
    tempList[index].completed = !tempList[index].completed;
    setTasks(tempList);
  }

  //delete task
  function removeTask(task) {
    const index = tasks.indexOf(task);
    const tempList = [...tasks];
    tempList.splice(index, 1);
    setTasks(tempList);
  }

  //add new task from taskForm
  function addNewTask(task) {
    console.log("add task");
    const tempList = [...tasks];
    tempList.push(task);
    setTasks(tempList);
  }
  function openForm() {
    setFormOpen(!formOpen);
  }
  //open-clouse formu

  return (
    <div className="container">
      <p
        className="text-listPage"
        style={{ fontSize: "2rem", padding: "30px" }}
      >
        {tasks.length > 0
          ? `There are ${tasks.length} tasks`
          : `There are NO taks. `}
      </p>
      {tasks.length === 0 && (
        <img
          className="image-list"
          src={image2}
          alt="404 error imag"
          title="404 erro image"
        ></img>
      )}

      <section className="container">
        <ul className="list">
          {tasks.map((item, index) => {
            return (
              <Task
                key={index}
                task={item}
                complete={completeTask}
                remove={removeTask}
              />
            );
          })}
        </ul>
      </section>
      {<TaskForm add={addNewTask} open={openForm} openState={formOpen} />}
    </div>
  );
};

export default TaskList;
