import React from 'react'
import Map from '../components/Map'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
      <Map />
      <div className='flex justify-between mt-4'>
        <div className='w-1/2 p-4'>
          <h2 className='text-2xl font-bold mb-2'>Inquiries</h2>
          <p className='text-gray-800'>
            For any inquiries, questions or commendations, please email info@nkosiza.africa or fill out the following form.
          </p>
        </div>
        <div className='w-1/2 p-4'>
          <h2 className='text-2xl font-bold mb-2'>Office</h2>
          <p className='text-gray-800'>
            15 Bridgewater street, Paarden Eiland, Cape Town. South Africa
          </p>
        </div>
      </div>
      <h1 className='text-2xl font-bold text-center p-4'>Let's work together</h1>
        <form className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" placeholder='Name' />
                <input className='border shadow-lg p-3' type="email" placeholder='Email' />
            </div>
            <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
            <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Contact


