import { motion } from 'framer-motion'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [ error , setError ] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password)
            return setError('Please fill in all fields');
        if(!email.includes("@"))
            return setError('Please enter a valid email address');
        setError('');
        console.log("logging in with", { email, password, remember });
    }


  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-purple-900 px-4 pt-24 pb-11'>
        <motion.div
         className='bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut'}}
        >
            <motion.h2
            className='text-2xl font-bold text-center text-purple-800 mb-6'
            initial={{ scale: 0.9 , y: 0 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}
            >
                Welcome Back! 👋
            </motion.h2>


            {/* Social Buttons */}
            <div className='space-y-3 mb-6'>
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='w-full flex items-center justify-center bg-purple-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors'
                onClick={() => alert('Google Sign In Clicked')}
                >
                    <FcGoogle size={20} className='mr-2'/> Sign in with Google
                </motion.button>
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='w-full flex items-center justify-center bg-gray-800 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-gray-900 transition-colors'
                onClick={() => alert('GitHub Sign In Clicked')}
                >
                    <FaGithub size={20} className='mr-2'/>
                    Sign in with GitHub
                </motion.button>
            </div>


            {/* Divider */}
            <div className='relative text-center my-6'>
                <span className='text-gray-500 text-sm bg-white px-2 relative z-10'>or sign in with email
                    <div className='absolute top1/2 left-0 w-full h-px bg-gray-200'></div>
                </span>
            </div>

            {/* Email and Password Inputs */}
            <form className='space-y-5'>
                <div>
                    <label className='block mb-1 font-medium text-gray-700'>Email</label>
                    <input 
                    type='email'
                    className='w-full px-4 py-2 border rounded-lg focus:outlone-none focus-ring-2 focus:ring-purple-500 transition-colors'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    />
                </div>

                <div>
                    <label className='block mb-1 font-medium text-gray-700'>Password</label>
                    <div className='relative'>
                        <input 
                        type={showPassword ? 'text' : 'password'}
                        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter your password'
                        />
                        <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 top-2 text-sm text-purple-600 hover:text-purple-800 transition-colors'
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>


                <div>
                    <input 
                    id='remember'
                    type='checkbox'
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className='mr-2 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 transition-colors'
                    />
                    <label
                    htmlFor='remember'
                    className='text-sm text-gray-700 cursor-pointer'
                    >
                        Remember Me
                    </label>
                </div>

                {error && (
                    <motion.div
                    className='text-red-500 text-sm mt-2'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    >
                        {error}
                    </motion.div>
                )}

                <motion.button
                className='w-full bg-purple-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors'
                type='submit'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                    Sign In
                </motion.button>

            </form>

            <p className='text-center text-sm text-gray-500 mt-4'>
                Don't have an account? 
                <motion.a
                href='/register'
                className='text-purple-600 hover:text-purple-800 font-medium ml-1'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                    Sign Up
                </motion.a>
                </p>
        </motion.div>
    </div>
  )
}

export default Login