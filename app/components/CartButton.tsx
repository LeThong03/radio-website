// app/components/CartButton.tsx
'use client'
import { useCart } from '../context/CartContext'
import Link from 'next/link'

export default function CartButton() {
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
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
  )
}