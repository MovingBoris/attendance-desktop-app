import './App.css';
import Button from './components/Button';

//App
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class = "container">
          <h2>Login to View Attendance</h2>
        <Button class ="loginButton" message="Login" />
        </div>
      </header>
    </div>
  );
}

export default App;
