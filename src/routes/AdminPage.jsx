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
                        title="CITC 1301"
                        link="https://google.com"
                        text="Class"
                    />
                    <Card
                        title="CITC 1302"
                        link="https://google.com"
                        text="Class"
                    />
                </div>
            </div>
        </div>
    );
}

export default AdminPage;