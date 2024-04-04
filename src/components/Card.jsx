import React from "react";
import "./CardStyle.css";
const Card = ({ title, link, text }) => {
  return (
    <a href={link} className="card-link" target="_self" rel="noopener noreferrer">
      <div className="card">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
    </a>
  );
};

export default Card;