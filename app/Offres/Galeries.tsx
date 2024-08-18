import { ProduitsTypes } from '../Types/produitsTypes'
import Card from '../Components/Card'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling

interface  GalerieProps{
    dataProduits: ProduitsTypes[]
}


export default function Galerie({dataProduits}: GalerieProps) {
  return (
    <div id='produits' className=' max-w-[1000px] w-full mx-auto p-5'>
      
      <h1 className=' font-bold text-amber-900 text-xl mt-5 mb-2 flex justify-center items-center sm:text-3xl md:text-4xl lg:text-4xl'>
      Nos Offres du Jour
      </h1>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {dataProduits.length > 0 ? (
              dataProduits.map((item) => (
                  <Card key={item.id} item={item} />
              ))
          ) : (
              <p className='flex justify-center text-center items-center'>Aucun produit disponible</p>
          )}
                  
            
        </div>
      
    </div>
  )
}
