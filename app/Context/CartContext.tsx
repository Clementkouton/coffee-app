"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { ProduitsTypes } from "../Types/produitsTypes" 

interface ProduitsContextTypes{
    produits: ProduitsTypes[];
    addToCart: (produit: ProduitsTypes) => void;
    incrementQuantity: (produitId: string) => void;
    decrementQuantity: (produitId: string) => void;
    removeFromCart: (produitId: string) => void;
}

interface ProduitsProviderProps {
    children: ReactNode;
}

const ProduitsContext = createContext<ProduitsContextTypes | undefined> (undefined)

export const ProduitsProvider : React.FC<ProduitsProviderProps> = ({children}) => {

    const [produits, setProduits] = useState<ProduitsTypes[]>([])

    const addToCart = (produit: ProduitsTypes) => {
        const existingProductIndex = produits.findIndex((p) => p.id === produit.id);
        if (existingProductIndex !== -1) {
            const updateProduits = [...produits];
            updateProduits[existingProductIndex].quantityProduit += 1;
            setProduits(updateProduits);
        } else {
            // Ajouter le nouveau produit avec une quantité initiale de 1
            setProduits([...produits, { ...produit, quantityProduit: 1 }]);
        }
    }

    const decrementQuantity = (produitId: string) =>{
        const updateProduits = produits.map(produit =>{
            if (produit.id === produitId) {
                if (produit.quantityProduit > 1) {
                    return {...produit, quantityProduit: produit.quantityProduit -1}
                }else {
                    return null
                }
            } 
            return produit;
        }).filter(produit => produit !== null) as ProduitsTypes[];
        setProduits(updateProduits)
    }

    const incrementQuantity = (produitId: string) => {
        setProduits(preProduits => preProduits.map(produit => produit.id === produitId ? {...produit, quantityProduit: produit.quantityProduit +1}: produit))
    }

    const removeFromCart = (produitId: string) => {
        setProduits(produits.filter(produit => produit.id !== produitId))
    }

    return (
        <ProduitsContext.Provider value={{produits, addToCart, removeFromCart, decrementQuantity, incrementQuantity}}>
            {children}
        </ProduitsContext.Provider>
    )
}

export const useProductsContext = () => {
    const context = useContext(ProduitsContext);
    if (!context) {
        throw new Error('Erreur')
    }
    return context;
}





