import React from 'react';
import { ProduitsTypes } from '../Types/produitsTypes';
import Card from './Card';
import Link from 'next/link';

interface GalerieProps {
  dataProduits: ProduitsTypes[];
  limit?: number;
  showLink?: boolean;
}

export default function Galerie({ dataProduits, limit = 6, showLink = true }: GalerieProps) {
  const limitedProduits = dataProduits.slice(0, limit);

  return (
    <div id='produits' className='max-w-[1000px] w-full mx-auto p-5'>
      <h1 className='font-bold text-amber-900 text-xl mt-5 mb-8 text-center sm:text-3xl md:text-4xl lg:text-4xl'>
        Nos Offres du Jour
      </h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {limitedProduits.length > 0 ? (
          limitedProduits.map((item) => (
            <Card key={item.id} item={item} />
          ))
        ) : (
          <p className='text-center col-span-full'>Aucun produit disponible</p>
        )}
      </div>

      {showLink && dataProduits.length > limit && (
        <div className='mt-8 text-center'>
          <Link href="/Offres" className="bg-amber-800 text-white py-2 px-6 rounded-full hover:bg-amber-900 transition-colors duration-300 inline-block">
            Découvrez toutes nos offres
          </Link>
        </div>
      )}
    </div>
  );
}