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
                        title="Example"
                        link="https://google.com"
                        text="This is an exmaple"
                    />
                    <Card
                        title="Example 2"
                        link="https://google.com"
                        text="This is an exmaple 2"
                    />
                </div>
            </div>
        </div>
    );
}

export default InstructorPage;