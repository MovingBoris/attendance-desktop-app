import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import LinkButton from '../components/LinkButton';
import Login from './login';

const Index = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true); // Set showContent to true after 1 second
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`school-login-page ${showContent ? 'show-content' : ''}`}>
            <div className="content-container">
                <div className="container">
                    <h2 className="welcome">NESCC</h2> {/* Added 'welcome' class */}
                    <p className="intro-text">Please login to view attendance and other important information.</p>
                    <LinkButton className="loginButton" message="Login" componentRoute="/login" />
                </div>
            </div>
        </div>
    );
};

export default Index;
