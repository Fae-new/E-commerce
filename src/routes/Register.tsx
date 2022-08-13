import React, { useState, useRef } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';





const Register = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordConfirmRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>



  const register = async () => {

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('passwords do not match')
    }
    if (passwordRef.current.value === '' || passwordConfirmRef.current.value === '' || emailRef.current.value === '') {
      return setError('please input the required fields')
    }


    setLoading(true)
    setError('')

    await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        setLoading(false)
        navigate('/')
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;

        if (error.code === 'auth/wrong-password') { setError('Username or Password is incorrect') }
      });



  }

  if (loading) {
    return <div className='loader'>Loading</div>
  }

  return (
    <div className='form' >
      <h1>Create an account</h1>
      <p className='subtext'> Let's get started</p>

      <label htmlFor="email">Email</label> <br />
      <input type="email"
        placeholder='Enter your email'
        autoComplete='none'
        ref={emailRef}
      /><br />

      <label htmlFor="password">Password</label><br />
      <input type="password"
        name="password"
        placeholder='Enter your password'
        ref={passwordRef}
      />

      <label htmlFor="password">Confirm Password</label><br />
      <input type="password"
        name="password"
        ref={passwordConfirmRef}
        placeholder='Confirm your password'
      />

      <p style={{ color: 'red', textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>{error}</p>

      <p className='form-btn' onClick={register}>Create account</p>


    </div>
  )
}

export default Register;