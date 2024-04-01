import React from "react";
import './Greeting.css';

function Greeting() {
    const timeOfDay = () => {
        const currentTime = new Date().getHours();
        if (currentTime >= 5 && currentTime < 12) {
            return 'Morning';
        }
        else if (currentTime >= 12 && currentTime < 18) {
            return 'Afternoon';
        }
        else {
            return 'Evening';
        }
    };
    
    return (
        <div className="greeting">
            <h1>Good {timeOfDay()}!</h1>
        </div>
    );
} 

export default Greeting;