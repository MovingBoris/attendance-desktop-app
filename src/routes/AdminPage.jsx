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
                        link="/Classes"
                        text="Class"
                    />
                    <Card
                        title="Add Attendance"
                        link="/AddAttendance"
                        text="Class"
                    />
                    <Card
                        title="Edit Classes"
                        link="/EditClass"
                        text="Class"
                    />
                    <Card
                        title="Add Class"
                        link="/AddClass"
                        text="Class"
                    />
                    <Card
                        title="View Attendance"
                        link="/AdminAttendance"
                        text="Attendance"
                    />
                    <Card
                        title="Edit Attendance"
                        link="/EditAttendance"
                        text="Attendance"
                    />
                    <Card
                        title="View Instructors"
                        link="/ViewInstructors"
                        text="Instructors"
                    />
                    <Card
                        title="Edit Instructors"
                        link="/EditInstructors"
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

export default AdminPage;