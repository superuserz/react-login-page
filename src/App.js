import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <div className="loginform-container">

        <h2 className="loginform-header">Account Login</h2>
        <div className="loginform-input-container">
          <label className="loginform-label">Username</label>
          <input type="text"></input>
        </div>
        <div className="loginform-input-container">
          <label className="loginform-label">Password</label>
          <input type="password"></input>
        </div>
        <div className="loginform-input-actions-container">
          <button className="loginform-input-actions">Login</button>
          <button className="loginform-input-actions">Register</button>
        </div>

      </div>
    </div>

  );
}

export default App;
