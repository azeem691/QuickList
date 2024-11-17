import React from "react";
import "./TasksList.css";
import Task from "./Task";
import EmptyTaskMessage from "./EmptyTaskMessage";

const TasksList = ({ tasks, markCompleted, deleteTask, openModal }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        <div className="taskslist_container">
          {tasks.map((x) => (
            <Task
              markCompleted={markCompleted}
              deleteTask={deleteTask}
              key={x.id}
              taskDetails={x}
              openModal={openModal}
            />
          ))}
        </div>
      ) : (
        <EmptyTaskMessage />
      )}
    </div>
  );
};

export default TasksList;
