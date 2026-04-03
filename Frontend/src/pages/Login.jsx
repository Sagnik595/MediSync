import React, { useState } from 'react'
import Nav from '../components/Nav'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  return (
    <>
      <Nav />
      <div className='w-full flex justify-center'>
        <form
          onSubmit={handleSubmit}
          className='hover:scale-105 transition-all duration-700 mt-22 p-10 rounded-2xl shadow-[8px_17px_19px_1px] shadow-black w-fit flex justify-center'
        >
          <div>
            <h1 className='text-2xl font-semibold text-gray-600 mb-2'>
              {state === 'Sign Up' ? 'Sign Up' : 'Login'}
            </h1>
            <h3 className='mb-2 text-gray-500'>
              {state === 'Sign Up'
                ? 'Create an account to book appointment'
                : 'Please login to book appointment'}
            </h3>

            {state === 'Sign Up' && (
              <>
                <label className='text-gray-600' htmlFor='name'>Full Name</label><br />
                <input
                  className='mb-3 mt-1 p-1 w-77.5 border border-gray-600 rounded-[5px]'
                  id='name'
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                /><br />
              </>
            )}

            <label className='text-gray-600' htmlFor='email'>Email</label><br />
            <input
              className='mb-3 mt-1 p-1 w-77.5 border border-gray-600 rounded-[5px]'
              id='email'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br />

            <label className='text-gray-600' htmlFor='password'>Password</label><br />
            <input
              className='mb-3 mt-1 p-1 w-77.5 border border-gray-600 rounded-[5px]'
              id='password'
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            /><br />

            <button
              type='submit'
              className='mb-4 mt-3 cursor-pointer p-2 rounded-[5px] text-center w-77.5 font-bold text-white bg-[#5F6FFF] hover:bg-blue-700 transition-all duration-700'
            >
              {state === 'Sign Up' ? 'Create Account' : 'Login'}
            </button>

            <p className='text-gray-500'>
              {state === 'Sign Up'
                ? <>Already have an account?{' '}
                    <span
                      className='text-blue-700 underline cursor-pointer'
                      onClick={() => setState('Login')}
                    >Login here</span>
                  </>
                : <>Don't have an account?{' '}
                    <span
                      className='text-blue-700 underline cursor-pointer'
                      onClick={() => setState('Sign Up')}
                    >Sign up here</span>
                  </>
              }
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login