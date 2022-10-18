import { useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import TasksList from "./components/TasksList/TasksList";

function App() {
  const [tasksList, setTasksList] = useState([]);

  const addTaskHandler = (
    title,
    description,
    date,
    isPriority,
    isCompleted
  ) => {

    if (description.trim().length === 0) {
      description = "No description";
    }

    setTasksList((prevTasksList) => {
      return [
        ...prevTasksList,
        {
          title,
          description,
          date,
          isPriority,
          isCompleted,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const deleteTaskHandler = (key) => {
    const updatedTasksList = tasksList.filter((current) => current.id !== key);
    setTasksList(updatedTasksList);
  };

  const changeTaskStatusHandler = (key) => {
    const updatedTasksList = tasksList.map((current) => {
      if (current.id === key) {
        if (current.isCompleted === false) {
          current.isCompleted = true;
        } else if (current.isCompleted === true) {
          current.isCompleted = false;
        }
        return current;
      }
      return current;
    });
    setTasksList(updatedTasksList);
  };

  const sortingTasksHandler = (isSortingUp) => {
    console.log(isSortingUp);
    if (isSortingUp) {
      tasksList.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    } else {
      tasksList.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      });
    }
  };

  return (
    <div>
      <AddTask onAddTask={addTaskHandler} />
      <TasksList
        tasks={tasksList}
        onDeleteTask={deleteTaskHandler}
        onStatusTask={changeTaskStatusHandler}
        onSortingTasks={sortingTasksHandler}
      />
    </div>
  );
}

export default App;
