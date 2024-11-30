import React, { useState, useEffect } from "react";
import "./Modal.css";
import Tag from "./Tag";

const Modal = ({ closeModal, saveTask, taskToEdit }) => {
  const initialData = {
    id: 0,
    title: "",
    description: "",
    tags: [],
    completed: false,
  };

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({
    title: false,
    description: false,
  });

  useEffect(() => {
    if (taskToEdit) {
      setFormData(taskToEdit);
    } else {
      setFormData(initialData);
    }
  }, [taskToEdit]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectTag = (tag) => {
    if (formData.tags.includes(tag)) {
      const filteredTags = formData.tags.filter((x) => x !== tag);
      setFormData((prev) => ({
        ...prev,
        tags: filteredTags,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
    }
  };

  const checkActiveTag = (tag) => {
    return formData.tags.includes(tag);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    const newErrors = {
      title: !formData.title,
      description: !formData.description,
    };

    setErrors(newErrors);

    if (!newErrors.title && !newErrors.description) {
      // If there are no errors, save the task and close the modal
      saveTask(formData);
      setFormData(initialData);
      closeModal();
    }
  };

  return (
    <div className="modal_container">
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <div className="modal_header">
            <button className="modal_cancel_btn" onClick={closeModal}>
              Cancel
            </button>
            <input
              type="submit"
              className="modal_add_btn"
              value={taskToEdit ? "Edit" : "Add"}
            />
          </div>
          <div className="modal_content">
            <div className="form_input">
              <h4>Title</h4>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInput}
                placeholder="Add a title..."
              />
              {errors.title && (
                <p className="error_message">Title is mandatory</p>
              )}
            </div>
            <div className="form_input">
              <h4>Description</h4>
              <textarea
                className="multilineInput"
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleInput}
                placeholder="Add a description..."
              ></textarea>
              {errors.description && (
                <p className="error_message">Description is mandatory</p>
              )}
            </div>
            <div className="form_input">
              <h4>Select Tags</h4>
              <div className="tags_button_list">
                <Tag
                  tagName="work"
                  selectTag={selectTag}
                  selected={checkActiveTag("work")}
                />
                <Tag
                  tagName="study"
                  selectTag={selectTag}
                  selected={checkActiveTag("study")}
                />
                <Tag
                  tagName="entertainment"
                  selectTag={selectTag}
                  selected={checkActiveTag("entertainment")}
                />
                <Tag
                  tagName="family"
                  selectTag={selectTag}
                  selected={checkActiveTag("family")}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
