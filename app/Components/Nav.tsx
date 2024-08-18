'use client';
import React, { useState, useEffect } from 'react';
import { CiCoffeeCup } from "react-icons/ci";
import { MdCoffeeMaker } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { BiCoffee } from "react-icons/bi";
import { IoMdHome, IoMdMenu } from "react-icons/io"
import { RiTeamFill } from "react-icons/ri"
import { FaUser } from "react-icons/fa"
import { MdContactMail } from "react-icons/md"
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { AiFillCodepenCircle } from "react-icons/ai"
import { MdWorkHistory } from "react-icons/md";
import CardModal from "./CardModal";
import { useProductsContext } from "../Context/CartContext";


const Nav: React.FC = () => {
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { produits } = useProductsContext();
  const [totalProduitCount, setTotalProduitCount] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const newTotalCount = produits.reduce((totalCount, produit) => totalCount + produit.quantityProduit, 0);
    setTotalProduitCount(newTotalCount);

    // Manage body overflow on modal open/close
    if (cartModalOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    // Cleanup function to reset overflow on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [cartModalOpen, produits]);

  const handleCartModal = () => {
    setCartModalOpen(!cartModalOpen);
  };

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path ? 'text-amber-800 font-bold' : 'hover:text-amber-800';
  };

  return (
    <nav className='fixed z-50 shadow-md bg-white h-50 justify-between items-center p-5 text-black w-full'>
      <div className="flex z-10 w-full justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer mx-2">
          <BiCoffee className="bg-amber-800 text-white rounded-md font-bold text-4xl sm:text-4xl lg:text-5xl md:text-4xl" />
        </div>

        {/* Menu for medium and large screens */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className={isActive('/')}>Accueil</Link>
          <Link href="/Offres" className={isActive('/Offres')}>Nos offres</Link>
          <Link href="/About" className={isActive('/About')}>À propos</Link>
          <Link href="/Contact" className={isActive('/Contact')}>Contact</Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={handleMobileMenu} className="md:hidden text-2xl">
          <IoMdMenu />
        </button>

        <button onClick={handleCartModal} className="px-2 bg-white justify-center rounded-md hover:text-amber-950 relative cursor-pointer text-amber-800 flex items-center gap-2">
          <span className="absolute top-0 text-white right-0 bg-amber-800 rounded-full text-[12px] lg:text-[14px] font-bold flex items-center justify-center h-4 w-4">{totalProduitCount}</span>
          <FaCartShopping className="text-2xl lg:text-4xl" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 text-center">
          <Link href="/" className="block hover:text-amber-800">Accueil</Link>
          <Link href="/Offres" className="block hover:text-amber-800">Nos offres</Link>
          <Link href="/About" className="block hover:text-amber-800">À propos</Link>
          <Link href="/Contact" className="block hover:text-amber-800">Contact</Link>
        </div>
      )}

      <CardModal cartModalOpen={cartModalOpen} handleCartModal={handleCartModal} />
    </nav>
  );
};

export default Nav;