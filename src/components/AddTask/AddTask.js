import { useState } from "react";
import classes from "./AddTask.module.css";
import Prioritize from "./Prioritize";
import Date from "./Date";

const AddTask = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isPriority, setIsPriority] = useState(false);
  const isCompleted = false;

  const addTaskHandler = (event) => {
    event.preventDefault();

    if (enteredTitle.trim().length === 0 || enteredDate.trim().length === 0) {
      return;
    }

    props.onAddTask(
      enteredTitle,
      enteredDescription,
      enteredDate,
      isPriority,
      isCompleted
    );
    setEnteredTitle("");
    setEnteredDescription("");
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const dateChangeHandler = (enteredDate2) => {
    setEnteredDate(enteredDate2);
  };

  const priorityHandler = (priorityStatus) => {
    setIsPriority(priorityStatus);
  };

  return (
    <div className={classes.card}>
      <h2>
        Add ToDo Item
      </h2>
      <form onSubmit={addTaskHandler}>
        <input
          type="text"
          className={classes.input}
          placeholder="Title"
          onChange={titleChangeHandler}
          value={enteredTitle}
        />
        <textarea
          rows="10"
          className={classes.inputDesc}
          placeholder="Description"
          onChange={descriptionChangeHandler}
          value={enteredDescription}
        />
        <div className={classes.connector}>
          <Date enteredDate2={dateChangeHandler} />
          <Prioritize onClick={priorityHandler} />

        </div>
        <button type="submit" className={classes.button}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddTask;
