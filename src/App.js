import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './routes';
import Login from './routes/login';
import Register from './routes/register';
import AdminPage from './routes/AdminPage';
import Classes from './routes/Classes';
import CsvUpload from './routes/csvupload';
import ViewInstructors from './routes/ViewInstructors';
import AdminAttendance from './routes/AdminAttendance';
import InstructorPage from './routes/InstructorPage';
import PostInstructor from './routes/PostInstructor';
import EditClass from './routes/EditClass';
import AddClass from './routes/AddClass';
import EditAttendance from './routes/EditAttendance';
import EditInstructors from './routes/EditInstructors';
import QRGenerator from './routes/QRGenerator';
import AddAttendance from './routes/AddAttendance';
import Unauthorized from './routes/Unauthorized';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path= '/register' element={<Register/>}/>
          <Route path= '/AdminPage' element={<AdminPage />} />
          <Route path= '/InstructorPage' element={<InstructorPage />} />
          <Route path= '/Classes' element={<Classes/>} />
          <Route path= '/csvupload' element={<CsvUpload/>} />
          <Route path= '/ViewInstructors' element={<ViewInstructors/>} />
          <Route path= '/AdminAttendance' element={<AdminAttendance/>} />
          <Route path= '/PostInstructor' element={<PostInstructor/>} />
          <Route path= '/EditClass' element={<EditClass/>} />
          <Route path= '/AddClass' element={<AddClass/>} />
          <Route path= '/EditAttendance' element={<EditAttendance />} />
          <Route path= '/EditInstructors' element={<EditInstructors />} />
          <Route path= '/QrGenerator' element={<QRGenerator />} />
          <Route path= '/AddAttendance' element={<AddAttendance />} />
          <Route path = '/Unauthorized' element = {<Unauthorized/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;