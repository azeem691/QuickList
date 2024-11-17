import React from "react";
import "./EmptyTaskMessage.css";
import Notasks from "./../assets/no_tasks.png";

const EmptyTaskMessage = () => {
  return (
    <div className="empty_task">
      <div className="empty_task_icon">
        <img
          src={Notasks}
          alt="No tasks available"
          className="empty_task_image"
        />
      </div>
      <h4 className="empty_task_title">No tasks available</h4>
      <p>Add a task to get started!</p>
    </div>
  );
};

export default EmptyTaskMessage;
