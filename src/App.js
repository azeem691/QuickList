import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import TasksList from "./components/TasksList";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [activeTag, setActiveTag] = useState(null);
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const saveTask = (task) => {
    if (task.id) {
      setData((prevData) => prevData.map((t) => (t.id === task.id ? task : t)));
    } else {
      task.id = uuidv4();
      setData((prev) => [...prev, task]);
    }
  };

  const handleCompletion = (id) => {
    const index = data.findIndex((x) => x.id === id);
    if (index !== -1) {
      const newData = [...data];
      newData[index] = {
        ...newData[index],
        completed: !newData[index].completed,
      };
      setData(newData);
    }
  };

  const deleteTask = (id) => {
    const newData = data.filter((x) => x.id !== id);
    setData(newData);
  };

  const openModal = (task = null) => {
    setEditingTask(task);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setEditingTask(null);
  };

  const filteredTasks = activeTag
    ? data.filter((task) => task.tags.includes(activeTag))
    : data;

  const tasksToDisplay = hideDoneTasks
    ? filteredTasks.filter((task) => !task.completed)
    : filteredTasks;

  return (
    <div className="app">
      {modalVisible && (
        <Modal
          closeModal={closeModal}
          saveTask={saveTask}
          taskToEdit={editingTask}
        />
      )}
      <Header openModal={() => openModal()} />
      <main className="app_main">
        <Sidebar
          setActiveTag={setActiveTag}
          activeTag={activeTag}
          setHideDoneTasks={setHideDoneTasks}
          hideDoneTasks={hideDoneTasks}
        />
        <TasksList
          markCompleted={handleCompletion}
          deleteTask={deleteTask}
          tasks={tasksToDisplay}
          openModal={openModal}
        />
      </main>
    </div>
  );
};

export default App;
