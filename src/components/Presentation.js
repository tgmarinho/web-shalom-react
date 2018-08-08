import React from "react";

const Presentation = ({ title, description }) => {
  return (
    <div className="tc">
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
};

export default Presentation;
