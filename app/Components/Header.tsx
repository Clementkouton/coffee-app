import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'


export default function Header() {
  return (

    <header className=' w-full h-screen bg-cover bg-center ' style={{backgroundImage: "url('https://images.unsplash.com/photo-1723002010382-f745117c0cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        <div className=' w-full h-full bg-black bg-opacity-60 flex items-center justify-center flex-col'>
        <h1 className=' mb-2 lg:m-3 text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-6xl'>Le Goût  <span className=' bg-white px-1 lg:px-2 text-amber-900 rounded font-bold'>Du Jour</span> </h1>
        <p className=' px-5 cursor-text text-white font-bold m-2 text-center text-[14px] md:text-[16px] lg:text-[18px]'><b>Le 'Goût du Jour' </b>: l'endroit idéal pour explorer de nouvelles saveurs.</p>
        <a href="#produits" className=' bg-white rounded-md font-bold m-2 lg:m-3 text-amber-800 text-2xl sm:text-2xl md:text-4xl lg:text-4xl hover:bg-amber-900 hover:text-white transition-all'><MdKeyboardArrowDown/></a>
        </div>
    </header>
  )
}
