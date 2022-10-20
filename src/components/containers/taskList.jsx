import React, { useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { TaskClass } from "../../models/taskClass";
import Task from "../pures/task";
import TaskForm from "../pures/taskForm";

const TaskList = () => {
  const task1 = new TaskClass("taskis", "description", true, LEVELS.URGENT);
  const task2 = new TaskClass("taskta", "description", false, LEVELS.NORMAL);
  const task3 = new TaskClass("task3", "description", false, LEVELS.BLOCKING);
  const task4 = new TaskClass("taskta", "description", false, LEVELS.NORMAL);
  const task5 = new TaskClass("task3", "description", false, LEVELS.BLOCKING);

  const [tasks, setTasks] = useState([task1, task2, task3, task4, task5]);

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
  return (
    <>
      <p style={{ fontSize: "2.4rem", padding: "30px" }}>Your tasks</p>
      <section>
        <ul>
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
      {<TaskForm add={addNewTask} />}
    </>
  );
};

export default TaskList;
