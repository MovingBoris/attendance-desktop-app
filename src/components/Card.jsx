import React from "react";
import './CardStyle.css'

function Card({ title, link, text}) {
    return (
        <a href={link} className="card-link">
            <div className="card">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </a>
    );
}

export default Card;