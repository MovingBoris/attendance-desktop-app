import React from "react";
import Navbar from "../components/NavigationBar";
import Greeting from "../components/GreetingMessage";
import Card from "../components/Card";

function InstructorPage() {
    return (
        <div className="main">
            <Navbar />
            <div className="content">
                <Greeting />
                <div className="card-container">
                    <Card
                        title="View Classes"
                        link="/AdminClasses"
                        text="Class"
                    />
                     <Card
                        title="View Attendance"
                        link="/AdminAttendance"
                        text="Attendance"
                    />
                    <Card
                        title="Edit Attendance"
                        link="https://google.com"
                        text="Attendance"
                    />
                    <Card
                        title="Post Attendance"
                        link="https://google.com"
                        text="Attendance"
                    />
                </div>
            </div>
        </div>
    );
}

export default InstructorPage;