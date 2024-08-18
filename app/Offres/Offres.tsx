"use client";

import React, { useEffect, useState } from 'react';
import { FaCoffee, FaLeaf, FaMedal, FaGlobeAmericas } from 'react-icons/fa';
import { ProduitsTypes } from '../Types/produitsTypes';
import Galerie from '../Components/Galerie';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../db/firebaseConfig';
import { ToastContainer } from 'react-toastify';
import Galeries from './Galeries';

// Données factices pour les produits
 

export default function Offres() {
    const [dataProduits, setDataProduits] = useState<ProduitsTypes[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    
      const produitsCollection = collection(db, "produits");
      const produitsSnapshot = await getDocs(produitsCollection)
      const produitsData = produitsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as ProduitsTypes[];
      setDataProduits(produitsData)
    } 
    
    console.log(dataProduits)
  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Section 1: Hero */}
      <section className=" bg-cover bg-center text-white" style={{backgroundImage: "url('https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"}}>
        <div className='pb-16 pt-32 bg-black bg-opacity-50 h-full w-full'>
            <div className="  container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Nos Offres</h1>
            <p className="text-xl mb-8">Découvrez notre sélection de cafés d'exception</p>
            </div>
        </div>
      </section>

      {/* Section 2: Caractéristiques */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Pourquoi choisir nos cafés ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <FaCoffee className="text-4xl text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Qualité supérieure</h3>
              <p>Nous sélectionnons les meilleurs grains pour une expérience gustative incomparable.</p>
            </div>
            <div className="text-center">
              <FaLeaf className="text-4xl text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Culture durable</h3>
              <p>Nos cafés sont cultivés dans le respect de l'environnement et des producteurs.</p>
            </div>
            <div className="text-center">
              <FaMedal className="text-4xl text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Torréfaction artisanale</h3>
              <p>Chaque lot est torréfié avec soin pour révéler les meilleures saveurs.</p>
            </div>
            <div className="text-center">
              <FaGlobeAmericas className="text-4xl text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Origines variées</h3>
              <p>Découvrez des cafés provenant des meilleures régions productrices du monde.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Galerie de produits */}
      <section className="py-16 bg-white">
          
        <Galeries dataProduits={dataProduits} />
        
        
        
      </section>

      {/* Section 4: Processus de commande */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Comment commander ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Choisissez vos produits</h3>
              <p className=' text-start'>Parcourez notre sélection et ajoutez vos cafés préférés au panier.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Passez votre commande</h3>
              <p className=' text-start'>Vérifiez votre panier et procédez au paiement sécurisé.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Recevez votre café</h3>
              <p className=' text-start'>Nous préparons et expédions votre commande dans les plus brefs délais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Témoignages */}
      <section className="py-16 bg-amber-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Ce que disent nos clients</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <img src="https://images.unsplash.com/photo-1533689476487-034f57831a58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8MHwwfHx8MA%3D%3D" alt="Photo de profil de Marie D." className="w-20 h-20 rounded-full mb-4" />
                        <p className="mb-4">"Le meilleur café que j'ai jamais goûté. Je suis un client fidèle maintenant !"</p>
                        <p className="font-semibold">- Marie D.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <img src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww" alt="Photo de profil de Pierre L." className="w-20 h-20 rounded-full mb-4" />
                        <p className="mb-4">"La qualité est constante et le service client est excellent. Je recommande !"</p>
                        <p className="font-semibold">- Pierre L.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHwwfDB8fHww" alt="Photo de profil de Sophie M." className=" w-20 h-20 rounded-full mb-4" />
                        <p className="mb-4">"J'apprécie vraiment la variété des origines proposées. Chaque tasse est une découverte."</p>
                        <p className="font-semibold">- Clement M.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}