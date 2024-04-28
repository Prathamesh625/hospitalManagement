import React, { useState } from 'react'
import Style from "./SignIn.module.css"
import { CreateUser } from '../Api';
import { useNavigate } from 'react-router';
import { SignInUser } from '../Api';

function SignIn() {

    const navigate = useNavigate()

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')

    const handleUsername = (e) => {
        setUserName(e.target.value)
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    
    const submitHandler = async (e) => {

        e.preventDefault()

        if (!userName || !password) return alert("Please enter all details")
        
        const response = await SignInUser(userName, password)

        if (response.data.status === "success") {

            navigate("/add/patient")

        }
        
    }

  return (
      <form className={Style.card} onSubmit={submitHandler}>
          <h2 className={Style.title}>Sign In</h2>
            <input
              className={Style.input}
             
              placeholder='Enter Your Hospital Id'

          />
          
          {/* username */}
          <input
              className={Style.input}
              value={userName}
              onChange={handleUsername}
              placeholder='Enter Your Username'
          />

          {/* password */}
          <input
              className={Style.input}
              value={password}
              onChange={handlePassword}
              placeholder='Enter Your Password'

          />
          <input
              className={Style.button}
              type='submit'
              value="Sign In" />
      </form>
  )
}

export default SignIn