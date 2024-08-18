import React from 'react'
import { toast } from 'react-toastify'
import { ProduitsTypes } from '../Types/produitsTypes'
import { GiWorld } from 'react-icons/gi'
import { PiCoffeeBeanFill } from 'react-icons/pi'
import { RiRedPacketFill } from 'react-icons/ri'
import { useProductsContext } from '../Context/CartContext'



interface CardProps {
    item: ProduitsTypes;
}


export default function Card({item}: CardProps) {

  const {addToCart} = useProductsContext();

  const handleAddCart = () => {
    addToCart(item)
    toast.success(`x1 ${item.name} est ajouté à votre commande`)
  }


  return (
    <div  className=' panier bg-white rounded-lg shadow-md p-4 relative z-[50px] flex flex-col justify-between gap-2'>
      <img src={item.image} alt={item.name} className=' w-full' />
      <p className=' text-[14px] text-gray-900 flex items-center gap-2'>
        <span className=' font-bold flex items-center gap-1'>
          <RiRedPacketFill /> <span className=' font-bold'> Quantité:</span>
        </span>
        <span> Packet de{item.quantityPack}g</span>
      </p>
      <p className=' text-[14px] text-gray-900 flex items-center gap-2'>
        
        <span className=' font-bold flex items-center gap-1'>
          <GiWorld /> <span className=' font-bold'> Origine:</span>
        </span>
        <span> {item.country}</span>
      </p>
      <p className=' text-[14px] text-gray-900 flex items-center gap-2'>
        
        <span className=' font-bold flex items-center gap-1'>
          <PiCoffeeBeanFill /> <span className=' font-bold'> Puissanc:</span>
        </span>
        <span> {item.strengh}</span>
      </p>
      
      <p className=' text-[14px] text-gray-900 '>
        {item.description}
      </p>
      <p className=' price bg-amber-800 text-white font-bold mt-2 absolute top-2 right-2 p-2 rounded-md'>{item.price}€</p>
      <button onClick={handleAddCart} className=' self-end w-full bg-amber-800 hover:bg-amber-900 rounded-md p-2 text-white transition-all'>Ajouter au panier</button>
    </div>
  )
}
