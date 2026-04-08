import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import { AdminContext } from '../context/AdminContext'

const Login = () => {
  const [state, setState] = useState('Admin Login')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const {setatoken,backendurl} = useContext(AdminContext)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <>
      <div className='w-full flex justify-center'>
        <form
          onSubmit={handleSubmit}
          className='hover:scale-105 transition-all duration-700 mt-13 p-10 rounded-2xl shadow-[8px_17px_19px_1px] shadow-black w-fit flex justify-center'
        >
          <div>
            <h1 className='text-2xl font-semibold text-blue-600 mb-2'>
              {state === 'Admin Login' ? 'Admin' : 'Doctor'}
              <span className='text-gray-600'> Login</span>
            </h1>
            <h3 className='mb-2 text-gray-500'>
              {state === 'Admin Login'
                ? 'Login to manage doctors data'
                : 'Login to check appointment status'}
            </h3>

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
              Login
            </button>

            <p className='text-gray-500'>
              {state === 'Admin Login'
                ? 
                <>
                Click here if you are a doctor{' '}
                    <span
                      className='text-blue-700 underline cursor-pointer'
                      onClick={() => setState('Doctor Login')}
                    >Click here</span>
                </>
                : <>Click here if you are admin{' '}
                    <span
                      className='text-blue-700 underline cursor-pointer'
                      onClick={() => setState('Admin Login')}
                    >Click here</span>
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