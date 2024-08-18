import Image from 'next/image';
import { FaTrash } from 'react-icons/fa6';
import { IoIosClose } from 'react-icons/io';
import { useProductsContext } from '../Context/CartContext';

interface Props {
  cartModalOpen: boolean;
  handleCartModal: () => void;
}

const CardModal: React.FC<Props> = ({ cartModalOpen, handleCartModal }) => {
  const { produits, decrementQuantity, incrementQuantity, removeFromCart } =
    useProductsContext();

  const totalPrice = produits.reduce(
    (total, produit) => total + (produit.price * produit.quantityProduit),
    0
  );

  if (!cartModalOpen) return null;

  return (
    <div className=' modal flex w-full h-screen bg-black bg-opacity-10'>
        <div
            className={`shadow-md w-[200px] md:w-[250px] lg:w-[250px] fixed inset-0 flex justify-self-end`} // Added overflow-hidden
            >
            <div className="w-full max-w-md bg-white h-full overflow-y-auto">
                <div className="p-4 relative">
                <button onClick={handleCartModal} className="absolute top-2 right-2 text-2xl text-amber-800">
                    <IoIosClose />
                </button>
                <h2 className="text-center font-bold mb-2 mt-2 text-amber-900 text-md sm:text-md md:text-md lg:text-xl">
                    Votre commande
                </h2>

                {produits.length === 0 ? (
                    <p className="text-center mt-3">Aucune commande n'est faite</p>
                ) : (
                    <>
                    {produits.map((produit) => (
                        <div key={produit.id} className="border-b py-4 flex items-center">
                        <img
                            width={50}
                            height={50}
                            alt={produit.name}
                            src={produit.image}
                            className="mr-4"
                        />
                        <div className="flex-grow">
                            <h3 className="text-sm md:text-md lg:text-lg font-semibold">
                            {produit.name}
                            </h3>
                            <p className="text-sm">Prix : {produit.price}€</p>
                            <div className="flex items-center mt-2">
                            <button
                                className="w-6 h-6 bg-amber-800 text-white rounded"
                                onClick={() => decrementQuantity(produit.id)}
                            >
                                -
                            </button>
                            <span className="mx-2">{produit.quantityProduit}</span>
                            <button
                                className="w-6 h-6 bg-amber-800 text-white rounded"
                                onClick={() => incrementQuantity(produit.id)}
                            >
                                +
                            </button>
                            </div>
                        </div>
                        <button
                            className="text-amber-800"
                            onClick={() => removeFromCart(produit.id)}
                        >
                            <FaTrash />
                        </button>
                        </div>
                    ))}
                    <div className="mt-4">
                        <p className="font-bold">Total : {totalPrice.toFixed(2)}€</p>
                        <button className="w-full bg-amber-800 text-white py-2 rounded mt-2">
                        Procéder au paiement
                        </button>
                    </div>
                    </>
                )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default CardModal;