import React, { useState, FormEvent } from 'react';
/* import connectToDatabase from '../utils/connectToDatabase' */
import Map from './Map';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Send POST request to API route
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, comment }),
    });

    // Clear form inputs
    setName('');
    setEmail('');
    setComment('');
  };

  return (
    <div className="max-w-[1240px] m-auto p-4 min-h-screen">
      <Map />
      <div className="mt-8 text-2xl font-light text-center text-gray-800">
        Leave us a message
      </div>
      <form className="flex w-full m-auto p-0" onSubmit={handleSubmit}>
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10  rounded-lg shadow:bg-gray-800">
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
              <div className="relative">
                <input
                  type="text"
                  id="contact-form-name"
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative">
                <input
                  type="text"
                  id="contact-form-email"
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="text-gray-700">
                <textarea
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  id="comment"
                  placeholder="Enter your comment"
                  name="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </label>
            </div>
            <div className="col-span-2 text-right pb-24">
              <button
                type="submit"
                className="py-2 px-4 bg-emerald-900 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
