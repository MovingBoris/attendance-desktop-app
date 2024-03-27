import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './routes';
import Login from './routes/login';
import Register from './routes/register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path= '/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;