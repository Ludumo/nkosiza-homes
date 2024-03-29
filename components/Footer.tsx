import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-emerald-900 pt-32 pb-8 xl:pt-8">
      <div className="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300">
        <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                Contacts
              </h2>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-emerald-900 dark:hover:text-white">
                  <a
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    href="mailto:info@nkosiza.africa"
                  >
                    info@nkosiza.africa
                  </a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-emerald-900 dark:hover:text-white">
                  15 Bridgewater street
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-emerald-900 dark:hover:text-white">
                  Paarden Eiland
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-emerald-900 dark:hover:text-white">
                  Cape Town
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                Quick links
              </h2>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link href="/">Home</Link>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link href="/about">About</Link>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link href="/services">Services</Link>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link href="/#gallery">Gallery</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-evenly">
          <a href="#">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
