import React, { useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { TaskClass } from "../../models/taskClass.class";
import Task from "../pures/task";

const TaskList = () => {
  const task1 = new TaskClass("task", "description", false, LEVELS.URGENT);
  const task2 = new TaskClass("task2", "description", false, LEVELS.NORMAL);
  const task3 = new TaskClass("task3", "description", false, LEVELS.BLOCKING);

  const [taskList, setTaskList] = useState([task1, task2, task3]);
  return (
    <section>
      <ul>
        {taskList.map((item, index) => {
          return <Task key={index} task={item} />;
        })}
      </ul>
    </section>
  );
};

export default TaskList;
