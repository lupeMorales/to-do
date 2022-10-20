import React, { useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { TaskClass } from "../../models/taskClass.class";
import Task from "../pures/task";

const TaskList = () => {
  const task1 = new TaskClass("taskis", "description", true, LEVELS.URGENT);
  const task2 = new TaskClass("taskta", "description", false, LEVELS.NORMAL);
  const task3 = new TaskClass("task3", "description", false, LEVELS.BLOCKING);

  const [tasks, setTasks] = useState([task1, task2, task3]);

  const [loading, setLoading] = useState(true);

  //control del ciclo de vida del componente

  useEffect(() => {
    console.log("update takList state");
    setLoading(false);
  }, [tasks]);

  //change task status: completed/not completed
  function completeTask(task) {
    console.log("complete mi siela", task);
    const index = tasks.indexOf(task);
    const tempList = [...tasks];
    tempList[index].completed = !tempList[index].completed;
    setTasks(tempList);
  }
  return (
    <section>
      <ul>
        {tasks.map((item, index) => {
          return <Task key={index} task={item} complete={completeTask} />;
        })}
      </ul>
    </section>
  );
};

export default TaskList;
