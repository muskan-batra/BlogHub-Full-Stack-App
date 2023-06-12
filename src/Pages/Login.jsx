import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className = 'container' >
    <div className='auth'>
        <h1>
            Login
        </h1>
        <form>
            
            <input type = "text" placeholder='username'/>
            <input required type = "Email" placeholder='Email'/>
            <input type = "password" placeholder='username'/>
            <button> Login </button>
            <span>Don't you have an account ? <Link to = '/register'>Register</Link> </span>
        </form>
    </div>
    </div>
  )
}

export default Login