"use client";

import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulaire soumis', { name, email, message });
    toast.success('Votre message a été envoyé !');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id="contact" className=" mt-6 container mx-auto p-4 min-h-screen">
      <h1 className=' font-bold text-amber-900 text-xl mt-5 mb-2 flex justify-center items-center sm:text-3xl md:text-4xl lg:text-4xl'>
      Contactez Nous
      </h1>
      <form onSubmit={handleSubmit} className="bg-white flex-grow shadow-md rounded px-8 pt-3 pb-8 mb-4">
          <div className="mb-6">
            <label htmlFor="name" className="block text-black text-sm font-bold mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline focus:border-amber-800  transition duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-black text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline focus:border-amber-800  transition duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-black text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline focus:border-amber-800 transition duration-300 h-48"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
            >
              Envoyer le message
            </button>
          </div>
        </form>
    </div>
  );
};

export default Contact;