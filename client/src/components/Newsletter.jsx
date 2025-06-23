import React from 'react'

function Newsletter() {
  return (
    <div className='flex flex-col items-center justify-center w-full my-32 space-y-4 text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>Never miss an update!</h1>
        <p className='pb-8 md:text-lg text-gray-500/70'>Subscribe to get our latest blog, new tech, and exclusive content delivered straight to your inbox.</p>
        <form className='flex items-center justify-between w-full h-12 max-w-2xl shadow md:h-13'>
            <input type="email" placeholder='Enter your email address' className='w-full h-full p-2 px-3 text-gray-500 border border-r-0 border-gray-300 rounded-md outline-none' required />
            <button type='submit' className='px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600'>Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter