import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";


const Signin = () => {
  const navigate = useNavigate()
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const login = async () => {


    if (passwordRef.current.value === '' || emailRef.current.value === '') {
      return setError('please input the required fields')
    }

    setError('')
    setLoading(true)
    await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {

        // const user = userCredential.user;
        setLoading(false)
        navigate('/', { replace: true })

      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;

        if (error.code === 'auth/wrong-password') { setError('Username or Password is incorrect') }
      });



  }


  const testData = () => {
    emailRef.current.value = 'test@gmail.com'
    passwordRef.current.value = '123456'

  }

  if (loading) {
    return <div className='loader'>Loading</div>
  }


  return (


    <div className='form' >
      <h1>Welcome back</h1>
      <p className='subtext'> Welcome back! Please enter your details</p>

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


      <p style={{ color: 'red', textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>{error}</p>
      <p className='form-btn' onClick={login}>Sign in</p>
      <p onClick={testData} className='form-btn' style={{ backgroundColor: 'black', color: 'white' }}> Use Test Data</p>

      <p style={{ textAlign: 'center' }}>Don't have an account? <Link to={'/register'}> <span style={{ fontWeight: 'bold' }}>Sign up</span></Link></p>

    </div>
  )
}

export default Signin;