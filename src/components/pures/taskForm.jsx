import React from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../models/levels.enum";
import "../../styles/components/taskForm.scss";

const TaskForm = () => {
  return (
    <section className="form">
      <span className="form__icon">
        <i className="fa-solid fa-circle-plus fa-4x "></i>
      </span>

      <form className="form__container" /* onSubmit={gg} */>
        <label className="form__label" htmlFor="inputName">
          Task
        </label>
        <input
          id="inputName"
          type="text"
          placeholder="task"
          required
          autoFocus
        ></input>
        <label className="form__label" htmlFor="inputDescription">
          Description
        </label>
        <input
          id="inputDescription"
          type="text"
          placeholder="description"
          required
          autoFocus
        ></input>
        <label className="form__label" htmlFor="selectLevel">
          Priority
        </label>
        <select>
          <option value={LEVELS.NORMAL}>"normal"</option>
          <option value={LEVELS.URGENT}>"urgent"</option>
          <option value={LEVELS.BLOCKING}>"blocking"</option>
        </select>
        <button className="form__button" type="submit">
          Add
        </button>
      </form>
    </section>
  );
};

TaskForm.propTypes = {};

export default TaskForm;
