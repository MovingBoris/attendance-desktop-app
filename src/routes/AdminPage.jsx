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
                        link="https://google.com"
                        text="Class"
                    />
                    <Card
                        title="View Attendance"
                        link="https://google.com"
                        text="Class"
                    />
                    <Card
                        title="Edit Attendance"
                        link="https://google.com"
                        text="Class"
                    />
                    <Card
                        title="View Instructors"
                        link="https://google.com"
                        text="Class"
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