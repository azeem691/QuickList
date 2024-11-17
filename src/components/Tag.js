import React from "react";
import "./Tag.css";
import ColorCircle from "./ColorCircle";

const Tag = ({ tagName, selectTag, selected }) => {
  const handleTagClick = () => {
    if (selectTag) {
      selectTag(tagName);
    }
  };

  return (
    <button
      style={{ backgroundColor: selected ? "#efefef" : "transparent" }}
      type="button"
      className="tag_container"
      onClick={handleTagClick}
    >
      <ColorCircle tagName={tagName} />
      <h5>{tagName}</h5>
    </button>
  );
};

export default Tag;
