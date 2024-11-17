import React from "react";
import Tag from "./Tag";

const Sidebar = ({
  setActiveTag,
  activeTag,
  setHideDoneTasks,
  hideDoneTasks,
}) => {
  const handleTagSelect = (tag) => {
    if (activeTag === tag) {
      setActiveTag(null);
    } else {
      setActiveTag(tag);
    }
  };

  const handleCheckboxChange = () => {
    setHideDoneTasks(!hideDoneTasks);
  };

  return (
    <aside>
      <Tag
        tagName="work"
        selectTag={handleTagSelect}
        selected={activeTag === "work"}
      />
      <Tag
        tagName="study"
        selectTag={handleTagSelect}
        selected={activeTag === "study"}
      />
      <Tag
        tagName="entertainment"
        selectTag={handleTagSelect}
        selected={activeTag === "entertainment"}
      />
      <Tag
        tagName="family"
        selectTag={handleTagSelect}
        selected={activeTag === "family"}
      />

      <div
        style={{
          color: "#b2afa1",
          paddingLeft: "4px",
        }}
      >
        <input
          type="checkbox"
          id="hideDoneTasks"
          checked={hideDoneTasks}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="hideDoneTasks">Hide Done Tasks</label>
      </div>
    </aside>
  );
};

export default Sidebar;
