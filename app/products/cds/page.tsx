// app/products/cds/page.tsx
'use client'
import { useCart } from '../../context/CartContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const cdProducts = [
  {
    id: 'd1',
    name: 'Sony Discman D-50',
    price: 179.99,
    description: 'First generation portable CD player, fully restored vintage unit',
    features: ['Anti-skip protection', 'LCD display', 'Bass boost'],
    image: '/api/placeholder/300/300'
  },
  {
    id: 'd2',
    name: 'Pioneer PD-F1009',
    price: 299.99,
    description: '100-disc changer with advanced disc management system',
    features: ['100-disc capacity', 'Remote control', 'Digital output'],
    image: '/api/placeholder/300/300'
  },
  {
    id: 'd3',
    name: 'Technics SL-PG490',
    price: 159.99,
    description: 'High-end single disc player with MASH digital converter',
    features: ['Optical output', '20-track programming', 'Random play'],
    image: '/api/placeholder/300/300'
  },
  {
    id: 'd4',
    name: 'Marantz CD-63',
    price: 249.99,
    description: 'Audiophile CD player with premium DAC',
    features: ['Premium DAC', 'Gold-plated outputs', 'Remote control'],
    image: '/api/placeholder/300/300'
  }
];

export default function CDsPage() {
   const { addItem } = useCart()
        const router = useRouter()
      
        const handleAddToCart = (product: any) => {
          addItem(product)
          router.push('/cart')
        }
      
        return (
          <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cdProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-600 mt-1">{product.description}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xl font-bold">${product.price}</span>
                        <button 
                          onClick={() => handleAddToCart(product)}
                          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      }