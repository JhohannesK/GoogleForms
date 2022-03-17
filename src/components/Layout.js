import React from 'react'
import SignIn from './pages/signInpage'


const Layout = () => {
      return (
            <div className='flex flex-col items-center justify-center gap-y-5 text-center w-full px-12 md:border md:w-[35rem] rounded-xl md:pt-16'>
                  <div className='flex text-3xl font-medium text-center pointer-events-none'>
                        <p className='text-blue-500'>G</p>
                        <p className='text-red-600'>o</p>
                        <p className='text-yellow-500'>o</p>
                        <p className='text-blue-500'>g</p>
                        <p className='text-green-700'>l</p>
                        <p className='text-red-600'>e</p>
                  </div>
                  <span className='text-4xl font-light'>Sign in</span>
                  <span className='text-xl'>to continue to Gmail</span>
                  <SignIn />
            </div>
      )
}

export default Layout