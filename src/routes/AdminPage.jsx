import React from "react";
import Navbar from "../components/NavigationBar";
import Greeting from "../components/GreetingMessage";
import Card from "../components/Card";

function AdminPage() {
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
                        title="Edit Classes"
                        link="/EditClass"
                        text="Class"
                    />
                    <Card
                        title="Post Classes"
                        link="https://google.com"
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
                        title="View Instructors"
                        link="/AdminInstructors"
                        text="Instructors"
                    />
                    <Card
                        title="Edit Instructors"
                        link="https://google.com"
                        text="Instructors"
                    />
                    <Card
                        title="Add Instructor"
                        link="/PostInstructor"
                        text="Instructors"
                    />
                    <Card
                        title="CSV Class Upload"
                        link="/CsvUpload"
                        text="Class"
                    />
                </div>
            </div>
        </div>
    );
}

export default AdminPage;