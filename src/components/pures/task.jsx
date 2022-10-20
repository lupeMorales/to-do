import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "../../styles/components/task.scss";
import { TaskClass } from "../../models/taskClass.class";
import { LEVELS } from "../../models/levels.enum";

const Task = ({ task, complete }) => {
  useEffect(() => {
    console.log("created task");
    return () => {
      console.log(`task: ${task.name} is going to unmount`);
    };
  }, [task]);

  //function that return a budge dependin on the level of the task
  function levelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <div className=" task__level task__level-normal">
            <p className="task__level-text">{task.level}</p>
          </div>
        );
      case LEVELS.BLOCKING:
        return (
          <div className="task__level task__level-blocking">
            <p className="task__level-text">{task.level}</p>
          </div>
        );
      case LEVELS.URGENT:
        return (
          <div className="task__level task__level-urgent">
            {" "}
            <p className="task__level-text">{task.level}</p>
          </div>
        );
      default:
        break;
    }
  }

  //function that return icon depending on the status task: completed/not completed
  function taskCompletedIcon() {
    if (task.completed) {
      return (
        <i
          className="fa-sharp fa-solid fa-circle-check fa-lg "
          style={{ color: "green" }}
          onClick={() => complete(task)}
        ></i>
      );
    } else {
      return (
        <i
          className="fa-regular fa-circle fa-lg "
          style={{ color: "grey" }}
          onClick={() => complete(task)}
        ></i>
      );
    }
  }
  return (
    <li className="task">
      <article className="task__container">
        {levelBadge()}

        <h2 className="task__title">{task.name}</h2>
        <h3 className="task__subtitle">{task.description}</h3>
        <div className="task__actions">
          {taskCompletedIcon()}
          <i class="fa-regular fa-trash-can fa-lg"></i>
        </div>
      </article>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.instanceOf(TaskClass).isRequired,
  complete: PropTypes.func.isRequired,
};

export default Task;
