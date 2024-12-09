// app/components/Navigation.tsx
'use client'
import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function Navigation() {
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-800">Vintage Audio</span>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link href="/products" className="text-gray-600 hover:text-gray-800">Menu</Link>
            <Link href="/products/cassettes" className="text-gray-600 hover:text-gray-800">Cassettes</Link>
            <Link href="/products/cds" className="text-gray-600 hover:text-gray-800">CDs</Link>
            <Link href="/products/mds" className="text-gray-600 hover:text-gray-800">MDs</Link>
            <Link href="/products/mp3" className="text-gray-600 hover:text-gray-800">MP3</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            <Link href="/cart" className="relative">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Cart
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    {itemCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}