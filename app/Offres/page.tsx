import React from 'react'
import Offres from './Offres'
import Footer from '../Components/Footer'
import { ToastContainer } from 'react-toastify';


export default function page() {
  return (
    <>
      <Offres />
      <Footer />
      <ToastContainer />
    </>
  )
}
