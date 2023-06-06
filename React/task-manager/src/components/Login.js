import React from 'react';
import { message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

    const newUser = {
    email,
    password
    }

    const login = async() => {
        const user  = await fetch('https://reqres.in/api/login',
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // i am sending data in json format newUSer is an object
        body: JSON.stringify({ ...newUser }),
        })
        const resopnse = await user.json()
        console.log(resopnse)
        if(resopnse.token){
        message.success('Login Successfull')
        navigate('/create-task')
        }

    }
    
  return (
    <div>
        <label htmlFor="email">Email</label>
        <br/>
        <br/>
        <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <br/>
        <label htmlFor="password">Password</label>
        <br/>
        <br/>
        <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <br/>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login