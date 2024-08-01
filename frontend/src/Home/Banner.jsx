import React from 'react'
import frontimg from '../assets/frontimg.png'
function Banner() {
  return (
    <div className='sm:flex justify-evenly mt-4 items-center'>
        <div className='text-center min-h-[50vh] sm:min-h-0'>
            <h1 className='text-4xl font-bold '>
                Welcome to Nutrify Website
            </h1>
            <h3>Healthy living  Made easy!!</h3>
            <button className="btn btn-accent mt-5">Login</button>
            <h6 className='text-xs'>Sign in & get started today.</h6>
            
        </div>
        <div className="">
            <img src={frontimg} alt="frontimg" className='h-[55vh] block m-auto' />
        </div>
      
    </div>
  )
}

export default Banner