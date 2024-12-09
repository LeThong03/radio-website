// app/products/cassettes/page.tsx
'use client'
import { useCart } from '../../context/CartContext'
import { useRouter } from 'next/navigation'


const cassetteProducts = [
  {
    id: 'c1',
    name: 'Sony Walkman WM-10',
    price: 149.99,
    description: 'Classic 1980s portable cassette player, fully restored with original belt and new foam pads',
    features: ['Auto-reverse', 'Dolby NR', 'Metal tape capability'],
    image: '/api/placeholder/300/300'
  },
  {
    id: 'c2',
    name: 'AIWA HS-PX505',
    price: 129.99,
    description: 'Premium cassette player with advanced Dolby noise reduction and bass boost',
    features: ['Digital display', 'Bass boost', 'Auto-reverse'],
    image: '/api/placeholder/300/300'
  },
  {
    id: 'c3',
    name: 'Technics M240X',
    price: 199.99,
    description: 'Vintage deck cassette player with wood panels, perfect for home audio systems',
    features: ['Dual capstan', '2-motor mechanism', 'LED meters'],
    image: '/api/placeholder/300/300'
  },
  {
    id: 'c4',
    name: 'Nakamichi Dragon',
    price: 899.99,
    description: 'The legendary auto-reverse cassette deck, fully restored',
    features: ['NAAC system', '3-head design', 'Manual azimuth'],
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
                {cassetteProducts.map(product => (
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