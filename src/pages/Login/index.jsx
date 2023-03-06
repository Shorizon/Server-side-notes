import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: "{password}`)
  };
  
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label type="username" value={username} onChange={handleUsername} />
        </div>
        <div>
            <label type="password" value={password} onChange={handlePassword} />
        </div>
        <button type="submit">Submit</button>
        </form>
    </div>
  );
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (

  );
};

const App = () => {
    return (
        <div>
            <Login />
            <Signup />
        </div>
    );
};

export default App;