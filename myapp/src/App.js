import React, { useState } from 'react';
import './App.css';
import { Button, message } from 'antd';
import axios from 'axios';
function App() {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const validateForm = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)
    // Add your form validation logic here
  };
  const [messageApi, contextHolder] = message.useMessage();
  const info = async () => {
   
     const api = await axios.post('http://192.168.50.107:3001/login',JSON.stringify({ name,pwd}),{
      headers : {
        'Content-Type': 'application/json'
      }
     })
 messageApi.success(api.data.message);

  };

  return (
    
    <div className="App">
       {contextHolder}
      <div className="content">
        <div className="description">
          <div id="face">Facebook</div>
          <div id="description">Facebook helps you connect and share with the people in your life.</div>
        </div>
        <div className="form">
          <form id="loginForm" onSubmit={validateForm}>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              id="fName"
              value={name}
              placeholder="Email address or phone number"
            />
            <input 
              type={checkbox ? 'password' : 'text'}
              onChange={(e) => setPwd(e.target.value)}
              id="fName"
              value={pwd}
              placeholder="Password"
            />
            <div style={{
              position: 'relative',
              top: '-8px',
              marginLeft: '148px',
            }}>Show Password</div>
            <input
              onClick={() => setCheckbox(!checkbox)}
              type="checkbox"
              style={{
                marginLeft: '300px', // Added 'px' here
                position: 'relative',
                top: '-29px'
              }}
            />
            <button id="login" onClick={info}><h2>Log in</h2></button>
            <div id="forgot">Forgotten Password?</div>
            <hr width="70%"></hr>
            <button id="new">Create a new account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
