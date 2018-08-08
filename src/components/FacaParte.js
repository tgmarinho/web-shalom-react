import React from "react";

const FacaParte = ({ title, text }) => {
  return (
    <div className="tc">
      <h1 className="h2">{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default FacaParte;
