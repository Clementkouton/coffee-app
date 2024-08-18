import React from 'react'
import { FaCoffee } from 'react-icons/fa'
import Offres from '../Offres/Offres'
export default function About() {
  return (
    <section id="about" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 text-center mb-8">À Propos de Nous</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" 
              alt="Notre café" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">Notre Passion pour le Café</h3>
            <p className="text-gray-700 mb-4">
              Chez "Le Goût du Jour", nous croyons que chaque tasse de café raconte une histoire. 
              Notre passion pour les grains de qualité et les méthodes de torréfaction artisanales 
              nous pousse à offrir une expérience gustative unique à chaque client.
            </p>
            <ul className="text-gray-700 mb-6">
              <li className="flex items-center mb-2">
                <FaCoffee className="text-amber-700 mr-2" />
                Sélection rigoureuse des grains
              </li>
              <li className="flex items-center mb-2">
                <FaCoffee className="text-amber-700 mr-2" />
                Torréfaction artisanale
              </li>
              <li className="flex items-center">
                <FaCoffee className="text-amber-700 mr-2" />
                Saveurs uniques et authentiques
              </li>
            </ul>
            <a 
              href="/Offres" 
              className="bg-amber-800 text-white py-2 px-4 rounded hover:bg-amber-900 transition-colors"
            >
              Découvrez nos offres
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}