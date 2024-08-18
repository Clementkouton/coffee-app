"use client";

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaUser, FaEnvelope, FaCommentAlt, FaPhone, FaMapMarkerAlt, FaClock, FaQuestionCircle } from 'react-icons/fa';

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
    <div className="bg-amber-50 min-h-screen">
      {/* Section 1: Hero */}
      <section className="  text-white  w-full h-[50vh] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1533471129834-efd868c99265?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        <div className=' py-24 w-full h-full bg-black bg-opacity-60'>
        <div className="container mt-10 w-full  justify-center items-center text-center ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl px-5">Nous sommes là pour répondre à toutes vos questions</p>
        </div>
        </div>
      </section>

      {/* Section 2: Informations de contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-8 text-center">Nos Coordonnées</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaPhone className="text-4xl text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
              <p>+229 69 40 51 98</p>
            </div>
            <div className="text-center">
              <FaEnvelope className="text-4xl text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>contact@legoutdujour.com</p>
            </div>
            <div className="text-center">
              <FaMapMarkerAlt className="text-4xl text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Adresse</h3>
              <p>223 Rue du Café, Godomey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Formulaire de contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-8 text-center">Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-amber-900 text-sm font-bold mb-2 flex items-center">
                <FaUser className="mr-2" /> Nom
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-amber-800 transition duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-amber-900 text-sm font-bold mb-2 flex items-center">
                <FaEnvelope className="mr-2" /> Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-amber-800 transition duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-amber-900 text-sm font-bold mb-2 flex items-center">
                <FaCommentAlt className="mr-2" /> Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-amber-800 transition duration-300 h-48"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Section 4: FAQ et Heures d'ouverture */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">FAQ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-amber-800 mb-2 flex items-center">
                    <FaQuestionCircle className="mr-2" /> Comment puis-je passer une commande ?
                  </h3>
                  <p>Vous pouvez passer une commande directement sur notre site web ou en nous appelant.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-800 mb-2 flex items-center">
                    <FaQuestionCircle className="mr-2" /> Quels sont vos délais de livraison ?
                  </h3>
                  <p>Nos délais de livraison varient entre 2 à 5 jours ouvrables selon votre localisation.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Heures d'ouverture</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <FaClock className="mr-2 text-amber-800" /> Lundi - Vendredi: 7h00 - 20h00
                </li>
                <li className="flex items-center">
                  <FaClock className="mr-2 text-amber-800" /> Samedi: 8h00 - 22h00
                </li>
                <li className="flex items-center">
                  <FaClock className="mr-2 text-amber-800" /> Dimanche: 9h00 - 18h00
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;