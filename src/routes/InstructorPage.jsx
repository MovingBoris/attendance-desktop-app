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
                        link="/Classes"
                        text="Class"
                    />
                     <Card
                        title="View Attendance"
                        link="/AdminAttendance"
                        text="Attendance"
                    />
                    <Card
                        title="Add Attendance"
                        link="/AddAttendance"
                        text="Attendance"
                    />
                    <Card
                        title="View Instructors"
                        link="/ViewInstructors"
                        text="Instructors"
                    />
                    <Card
                        title="CSV Class Upload"
                        link="/CsvUpload"
                        text="Class"
                    />
                    <Card
                        title="QR Code Generator"
                        link="/QRGenerator"
                        text="Utility"
                    />
                </div>
            </div>
        </div>
    );
}

export default InstructorPage;