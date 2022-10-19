import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/task.scss";

const Task = () => {
  return (
    <li className="task">
      <article className="task__container">
        <div className="task__level">normal</div>

        <h2 className="task__title">Lorem ipsum</h2>
        <h3 className="task__subtitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h3>
        <div className="task__actions">
          <i class="fa-regular fa-circle fa-lg"></i>
          <i class="fa-regular fa-trash-can fa-lg"></i>
        </div>
      </article>
    </li>
  );
};

Task.propTypes = {};

export default Task;
