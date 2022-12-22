import React from 'react';

const Footer = () => (
  <footer className='bg-white/40 p-4 mt-4'>
    <div className='container mx-auto flex items-center justify-between'>
      <p className='text-gray-800'>Copyright &copy; 2021</p>
      <div className='flex'>
        <a href='#' className='mx-4 text-gray-800 hover:text-gray-600'>Terms</a>
        <a href='#' className='mx-4 text-gray-800 hover:text-gray-600'>Privacy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
