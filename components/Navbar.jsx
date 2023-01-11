import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [logo, setLogo] = useState(
    'https://ludumobucket.s3.eu-central-1.amazonaws.com/Nkosiza+/Logo/Nkosiza-logo-transparent/Nkosiza+Large.png'
  );

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#f5f9f2');
        setTextColor('#083b27');
        setLogo(
          'https://ludumobucket.s3.eu-central-1.amazonaws.com/Nkosiza+/Logo/Nkosiza+green.png'
        );
      } else {
        setColor('transparent');
        setTextColor('#faf3de');
        setLogo(
          'https://ludumobucket.s3.eu-central-1.amazonaws.com/Nkosiza+/Logo/option+2.png'
        );
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white/20'>
        <Link href='/' className='flex items-center'>
        <Image 
              className='flex container' 
              src={logo} 
              alt='Logo'
              priority='high'
              width={115}
              height={80} 
        />
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='relative p-4'>
            <Link href='/about'>About</Link>
              <ul className='absolute hidden'>
                  <li>
                      <a href='/vision' className='block py-2 px-4'>Our vission</a>
                  </li>
                  <li>
                      <a href='/mission' className='block py-2 px-4'>Our mission</a>
                  </li>
                  <li>
                      <a href='/philosophy' className='block py-2 px-4'>Our philosophy</a>
                  </li>
              </ul>
            </li>
          <li className='p-4'>
            <Link href='/services'>Services</Link>
          </li>
          <li className='p-4'>
            <Link href='/#gallery'>Gallery</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        
        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='relative p-4 text-4xl hover:text-gray-500'>
              <Link href='/about'>About</Link>
              <ul className='absolute hidden'>
                  <li>
                      <a href='/vision' className='block  py-2 px-4'>Our vision</a>
                  </li>
                  <li>
                      <a href='/mission' className='block  py-2 px-4'>Our mission</a>
                  </li>
                  <li>
                      <a href='/philosophy' className='block  py-2 px-4'>Our philosophy</a>
                  </li>
              </ul>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/services'>Services</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>Gallery</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;