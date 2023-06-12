import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className = 'container' >
    <div className='auth'>
        <h1>
            Register
        </h1>
        <form>
            
            <input required type = "text" placeholder='Username'/>
            <input required type = "Email" placeholder='Email'/>
            <input required type = "password" placeholder='Password'/>
            <button> Register </button>
            <span>Already have account  ? <Link to = '/'>Login</Link> </span>
        </form>
    </div>
    </div>
  )
}

export default Register