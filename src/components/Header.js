import React from "react";

const Header = ({ openModal }) => {
  return (
    <header className="app_header">
      <h1>Quick List</h1>
      <button className="app_header_button" onClick={() => openModal()}>
        +
      </button>
    </header>
  );
};

export default Header;
