"use client"

import { useState, useEffect } from "react";
import { doc, getDocs } from "firebase/firestore";
import Image from "next/image";
import Header from "./Components/Header";
import { collection } from "firebase/firestore";
import {db} from "../app/db/firebaseConfig";
import Galerie from "./Components/Galerie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ProduitsTypes} from '../app/Types/produitsTypes'
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";



export default function Home() {
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
    <>
      <Header />
      <Galerie dataProduits={dataProduits} />
      <About />
      <ToastContainer />
      <Contact />
      <Footer />
    </>
  );
}