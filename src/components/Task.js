import React, { useState } from "react";
import ColorCircle from "./ColorCircle";
import icon from "./../assets/options_icon.png";

const Task = ({ taskDetails, markCompleted, deleteTask, openModal }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { completed, title, description, id, tags } = taskDetails;

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleEdit = () => {
    openModal(taskDetails);
    setMenuVisible(false);
  };

  return (
    <div className="task">
      <div className="task_header">
        <h4
          style={{
            textDecoration: completed ? "line-through" : "none",
          }}
          className="task_title"
        >
          {title}
        </h4>
        <div className="actions_button_container">
          <button className="actions_button" onClick={toggleMenu}>
            <img src={icon} className="action_icon" />
          </button>
        </div>
      </div>
      {menuVisible && (
        <div className="dropdown_menu">
          <button type="button" className="dropdown_item" onClick={handleEdit}>
            Edit
          </button>
          <button
            type="button"
            className="dropdown_item"
            onClick={() => deleteTask(id)}
          >
            Delete
          </button>
        </div>
      )}
      <p
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {description}
      </p>
      <div className="task_footer">
        <div className="tags_list">
          {tags.map((x) => (
            <ColorCircle key={x} tagName={x} />
          ))}
        </div>
        <div style={{ color: "#b2afa1" }}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => markCompleted(id)}
            id="markDone"
          />
          <label htmlFor="markDone">Done</label>
        </div>
      </div>
    </div>
  );
};

export default Task;
