import React from 'react';

const Footer = () => (
  <footer className='flex items-center justify-center  mb-12 bg-fixed bg-center bg-cover custom-img p-4 mt-4'>
    <div className='container mx-auto flex items-center  justify-between'>
      <p className='text-white'>Copyright &copy; 2021</p>
      <div className='flex'>
        <a href='#' className='mx-4 text-white hover:text-gray-600'>Terms</a>
        <a href='#' className='mx-4 text-white hover:text-gray-600'>Privacy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
