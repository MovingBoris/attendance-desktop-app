import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './routes';
import Login from './routes/login';
import Register from './routes/register';
import AdminPage from './routes/AdminPage';
import AdminClasses from './routes/AdminClasses';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path= '/register' element={<Register/>}/>
          <Route path= '/AdminPage' element={<AdminPage />} />
            <Route path= '/AdminClasses' element={<AdminClasses/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;