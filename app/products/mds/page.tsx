// app/products/mds/page.tsx
'use client'
import { useCart } from '../../context/CartContext'
import { useRouter } from 'next/navigation'


const mdProducts = [
  {
    id: 'md1',
    name: 'Sony MZ-R90',
    price: 299.99,
    description: 'Premium MiniDisc recorder with remote control and Type-R recording',
    features: ['Type-R recording', 'Remote control', 'Long battery life'],
    image: '/api/placeholder/300/300'
  },
  {
    id: 'md2',
    name: 'Sharp MT-15',
    price: 249.99,
    description: 'Compact MiniDisc player with excellent sound quality',
    features: ['MDLP support', 'Digital recording', 'LCD remote'],
    image: '/api/placeholder/300/300'
  },
  {
    id: 'md3',
    name: 'Kenwood DMC-J7R',
    price: 279.99,
    description: 'High-end MiniDisc deck with digital recording capabilities',
    features: ['Optical input', 'Track marking', 'Title editing'],
    image: '/api/placeholder/300/300'
  },
  {
    id: 'md4',
    name: 'Sony MZ-NH1',
    price: 399.99,
    description: 'Hi-MD player with advanced recording features',
    features: ['Hi-MD format', '1GB storage', 'USB connection'],
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
          {mdProducts.map(product => (
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