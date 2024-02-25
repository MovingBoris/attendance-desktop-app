import '../App.css';
import LinkButton from '../components/LinkButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';

const Index = () => {
    return (
    <header className="App-header">
        <div className="container">
            <h2>Login to View Attendance</h2>
            <LinkButton className="loginButton" message="Login" componentRoute="/login" />
        </div>
    </header>
    );
};

export default Index;