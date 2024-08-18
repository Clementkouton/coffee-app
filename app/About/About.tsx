import React from 'react';
import { FaCoffee, FaLeaf, FaUsers, FaMedal, FaGlobe, FaHandshake, FaRecycle, FaSeedling } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-amber-50">
      {/* Section 1: Hero */}
      <section className=" bg-cover bg-center text-white" style={{backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3')"}}>
        <div className='py-20 bg-black bg-opacity-50 flex w-full h-full'>
            <div className="container mx-auto px-4 pt-5 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Notre Histoire</h1>
            <p className="text-xl mb-8">Découvrez la passion qui anime Le Goût du Jour</p>
            </div>
        </div>
      </section>

      {/* Section 2: Notre Passion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center mb-12">Notre Passion pour le Café</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                alt="Notre café"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-amber-800 mb-4">L'Art de la Torréfaction</h3>
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
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Notre Engagement */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center mb-12">Notre Engagement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaLeaf className="text-5xl text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Durabilité</h3>
              <p className="text-gray-700">Nous nous engageons à utiliser des pratiques durables dans toute notre chaîne de production.</p>
            </div>
            <div className="text-center">
              <FaUsers className="text-5xl text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Communauté</h3>
              <p className="text-gray-700">Nous soutenons activement les communautés locales et les producteurs de café.</p>
            </div>
            <div className="text-center">
              <FaMedal className="text-5xl text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Qualité</h3>
              <p className="text-gray-700">Nous ne faisons aucun compromis sur la qualité de nos produits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Notre Histoire */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center mb-12">Notre Histoire</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-semibold text-amber-800 mb-4">Des Racines Profondes</h3>
              <p className="text-gray-700 mb-4">
                Fondé en 2010, Le Goût du Jour est né de la passion de deux amis pour le café de qualité. 
                Ce qui a commencé comme un petit café local s'est transformé en une entreprise reconnue, 
                tout en conservant nos valeurs d'origine : qualité, authenticité et respect.
              </p>
              <p className="text-gray-700">
                Aujourd'hui, nous sommes fiers de servir des milliers de clients chaque jour, 
                tout en maintenant notre engagement envers l'excellence et la durabilité.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
                alt="Notre histoire"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Nos Valeurs */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <FaGlobe className="text-5xl text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Responsabilité Globale</h3>
              <p className="text-gray-700">Nous pensons à l'impact global de chacune de nos actions.</p>
            </div>
            <div className="text-center">
              <FaHandshake className="text-5xl text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Partenariats Équitables</h3>
              <p className="text-gray-700">Nous cultivons des relations équitables avec nos fournisseurs.</p>
            </div>
            <div className="text-center">
              <FaRecycle className="text-5xl text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Éco-responsabilité</h3>
              <p className="text-gray-700">Nous nous efforçons de réduire notre empreinte environnementale.</p>
            </div>
            <div className="text-center">
              <FaSeedling className="text-5xl text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation Continue</h3>
              <p className="text-gray-700">Nous cherchons constamment à nous améliorer et à innover.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}