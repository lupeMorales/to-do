import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/task.scss";
import { TaskClass } from "../../models/taskClass.class";

const Task = ({ task }) => {
  return (
    <li className="task">
      <article className="task__container">
        <div className="task__level">{task.level}</div>

        <h2 className="task__title">{task.name}</h2>
        <h3 className="task__subtitle">{task.description}</h3>
        <div className="task__actions">
          <i class="fa-regular fa-circle fa-lg"></i>
          <i class="fa-regular fa-trash-can fa-lg"></i>
        </div>
      </article>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.instanceOf(TaskClass).isRequired,
};

export default Task;
