import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space, Button } from 'antd';
import './Login.css';
import { useHistory } from 'react-router-dom';
import backgroundImage from './headset.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [usernameInvalidError, setUsernameInvalidError] = useState(false);
  const [passwordInvalidError, setPasswordInvalidError] = useState(false);

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    display: 'flex',
  };

  const history = useHistory();

  const handleLogin = () => {
    // Check for empty fields
    if (username.trim() === '') {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    if (password.trim() === '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    // Check for invalid characters (spaces or special characters) in the username
    if (/[\s!@#$%^&*(),.?":{}|<>]/.test(username)) {
      setUsernameInvalidError(true);
    } else {
      setUsernameInvalidError(false);
    }

    // Check for invalid characters (spaces or special characters) in the password
    if (/[\s!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordInvalidError(true);
    } else {
      setPasswordInvalidError(false);
    }
    if (
      username.trim() !== '' &&
      password.trim() !== '' &&
      !/[\s!@#$%^&*(),.?":{}|<>]/.test(username) &&
      !/[\s!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      history.push('/App');
    }
  };

  return (
    <div className='login-container' style={backgroundImageStyle}>
      <div className='log'>
        <Space direction='vertical'>
          <span>UserName</span>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ borderColor: usernameError || usernameInvalidError ? 'red' : undefined }}
          />
          {usernameError && <p style={{ color: 'red', margin: 0 }}>Username is required</p>}
          {usernameInvalidError && <p style={{ color: 'red', margin: 0 }}>Invalid characters in username</p>}
          <span>Password</span>
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            required
            style={{ borderColor: passwordError || passwordInvalidError ? 'red' : undefined }}
          />
          {passwordError && <p style={{ color: 'red', margin: 0 }}>Password is required</p>}
          {passwordInvalidError && <p style={{ color: 'red', margin: 0 }}>Invalid characters in password</p>}
          <div className='Box'>
            <center>
              <Button type='primary' onClick={handleLogin}>
                Login
              </Button>
            </center>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default Login;