// app/products/mp3/page.tsx
'use client'
import { useCart } from '../../context/CartContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const mp3Products = [
  {
    id: 'm1',
    name: 'iPod Classic 160GB',
    price: 249.99,
    description: 'Vintage 6th generation iPod with massive storage capacity',
    features: ['160GB storage', 'Click wheel', '36-hour battery'],
    image: '/api/placeholder/300/300'
  },
  {
    id: 'm2',
    name: 'Creative Zen X-Fi',
    price: 129.99,
    description: 'High-quality MP3 player with X-Fi sound enhancement',
    features: ['SD card slot', 'X-Fi technology', 'FM radio'],
    image: '/api/placeholder/300/300'
  },
  {
    id: 'm3',
    name: 'Sony NW-A55',
    price: 199.99,
    description: 'Hi-Res audio player with advanced sound features',
    features: ['Hi-Res Audio', 'DSEE HX', 'Bluetooth'],
    image: '/api/placeholder/300/300'
  },
  {
    id: 'm4',
    name: 'FiiO M11',
    price: 449.99,
    description: 'Professional digital audio player with dual DAC',
    features: ['Dual AK4493EQ DACs', 'Android OS', 'Balanced output'],
    image: '/api/placeholder/300/300'
  }
];

export default function CassettesPage() {
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
            {mp3Products.map(product => (
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