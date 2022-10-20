import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../models/levels.enum";
import "../../styles/components/taskForm.scss";
import { TaskClass } from "../../models/taskClass.js";

const TaskForm = ({ add, open, openState }) => {
  const refName = useRef("");
  const refDescription = useRef("");
  const refLevel = useRef(LEVELS.NORMAL);
  const handleClick = () => {
    open();
    console.log(openState);
  };
  function addTask(e) {
    e.preventDefault();
    const newTask = new TaskClass(
      refName.current.value,
      refDescription.current.value,
      false,
      refLevel.current.value
    );
    add(newTask);
  }
  return (
    <section className="form">
      <span className="form__icon" onClick={handleClick}>
        {openState ? (
          <i className="fa-solid fa-circle-minus fa-4x "></i>
        ) : (
          <i className="fa-solid fa-circle-plus fa-4x "></i>
        )}

        {/*     <i className="fa-solid fa-circle-plus fa-4x "></i> */}
      </span>
      {openState && (
        <form className="form__container" onSubmit={addTask}>
          <label className="form__label" htmlFor="inputName">
            Task
          </label>
          <input
            className="input-text"
            ref={refName}
            id="inputName"
            type="text"
            placeholder="task"
            required
            autoFocus
          />
          <label className="form__label" htmlFor="inputDescription">
            Description
          </label>
          <input
            className="input-text"
            ref={refDescription}
            id="inputDescription"
            type="text"
            placeholder="Task description"
            required
          />
          <label className="form__label" htmlFor="selectLevel">
            Priority
          </label>
          <select
            className="input-text"
            ref={refLevel}
            defaultValue={LEVELS.NORMAL}
            id="selectLevel"
          >
            <option value={LEVELS.NORMAL}>normal</option>
            <option value={LEVELS.URGENT}>urgent</option>
            <option value={LEVELS.BLOCKING}>blocking</option>
          </select>
          <button className="form__button" type="submit">
            Add
          </button>
        </form>
      )}
    </section>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default TaskForm;
