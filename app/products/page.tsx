// app/products/page.tsx
'use client'
import { products } from '../data/products'
import Link from 'next/link'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-800">Vintage Audio</span>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
              <Link href="/products" className="text-gray-600 hover:text-gray-800">Menu</Link>
              <Link href="/products/cassettes" className="text-gray-600 hover:text-gray-800">Cassettes</Link>
              <Link href="/products/cds" className="text-gray-600 hover:text-gray-800">CDs</Link>
              <Link href="/products/mds" className="text-gray-600 hover:text-gray-800">MDs</Link>
              <Link href="/products/mp3" className="text-gray-600 hover:text-gray-800">MP3</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(products).map(([category, items]) => (
            <Link href={`/products/${category}`} key={category}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={items[0]?.image || '/api/placeholder/400/300'}
                  alt={category}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {category === 'cds' ? 'CDs' : 
                     category === 'mds' ? 'MDs' : 
                     category === 'mp3' ? 'MP3' : 
                     category.charAt(0).toUpperCase() + category.slice(1)}
                  </h2>
                  <p className="text-gray-600">{items.length} products</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}