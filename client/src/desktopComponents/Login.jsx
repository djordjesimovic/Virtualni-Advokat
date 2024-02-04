import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const Function = () => {
    console.log('test')
    navigate('home', { replace: true });
  }
  return (
    <div>
      <div>Login</div>
      <button onClick={() => navigate('../home', { replace: true })}>Click</button>
    </div>
  )
}

export default Login