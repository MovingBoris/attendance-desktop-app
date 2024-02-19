import './App.css';
import LinkButton from './components/LinkButton';

//App
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class = "container">
          <h2>Login to View Attendance</h2>
          <LinkButton class ="loginButton" message="Login" localLink='./routes/login'/>
        </div>
      </header>
    </div>
  );
}

export default App;
