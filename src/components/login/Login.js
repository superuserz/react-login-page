import { useState } from "react";


const INITIAL_USERSET = [{ username: "admin", password: "admin" }];
const INITIAL_USERNAME = '';
const INITIAL_PASSWORD = '';


function Login() {
    //Maintain a temporary List of users for login/register.
    const [registeredUsers, setRegisteredUsers] = useState(INITIAL_USERSET);
    const [username, setUsername] = useState(INITIAL_USERNAME);
    const [password, setPassword] = useState(INITIAL_PASSWORD);
    const resetInputs = () => {
        setUsername('');
        setPassword('');
    }
    const onUsernameChangeHandler = (e) => { setUsername(e.target.value); }
    const onPasswordChangeHandler = (e) => { setPassword(e.target.value); }
    const onRegister = () => {
        if (isFormValid()) {
            userExists() ? window.alert('User Exists') : registerUser(username, password);
        }
    }
    const isFormValid = () => {
        if (username === '' || password === '') {
            window.alert('Please Enter Required Details');
            return false;
        } else {
            return true;
        }
    }
    const userExists = () => {
        return registeredUsers.some(user => {
            return user.username === username;
        });
    }
    const registerUser = (username, password) => {
        setRegisteredUsers((existingUsers) => {
            return [...existingUsers, {
                username: username,
                password: password
            }]
        })
        window.alert('Successfully Registered. Please continue with Login');
        resetInputs();
    }
    const onLogin = () => {
        (isFormValid() && authenticateUser(username, password)) ? (userExists() ? window.alert('Welcome : ' + username) : window.alert('Kindly Register First')) : window.alert('Please Try Again');
    }

    const authenticateUser = (username, password) => {
        for (const user of registeredUsers) {
            if (user.username === username) {
                if (user.password === password) {
                    return true;
                } else {
                    window.alert('Password Incorrect');
                    return false;
                }
            }
        }
    }

    return (
        <div className="login-container">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
            <div className="loginform-container">
                <h2 className="loginform-header">Account Login</h2>
                <div className="loginform-input-container">
                    <label className="loginform-label">Username</label>
                    <input type="text" value={username} onChange={onUsernameChangeHandler}></input>
                </div>
                <div className="loginform-input-container">
                    <label className="loginform-label">Password</label>
                    <input type="password" value={password} onChange={onPasswordChangeHandler}></input>
                </div>
                <div className="loginform-input-actions-container">
                    <button className="loginform-input-actions" onClick={onLogin}>Login</button>
                    <button className="loginform-input-actions" onClick={onRegister}>Register</button>
                </div>
            </div>
        </div>
    );
}
export default Login;

