import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space, Button } from 'antd';
import './Login.css';

const LoginForm = () => {
    return (
        <div className='log'>
            <Space direction='vertical'>
                <span>UserName</span>
                <Input placeholder="Basic usage" />
                <span>Password</span>
                <Input.Password placeholder="input password" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                    <Button type='primary'>Login</Button>
                </div>
            </Space>
        </div>
    );
};

export default LoginForm;
