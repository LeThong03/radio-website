// app/cart/page.tsx
'use client'
import { useCart } from '../context/CartContext'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CartPage() {
  const { items, removeItem, total } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const router = useRouter()

  const handleCheckout = async () => {
    setIsCheckingOut(true)
    try {
      router.push('/checkout')
    } catch (error) {
      setIsCheckingOut(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven&apos;t added any items yet.</p>
          <Link 
            href="/products" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {items.map((item, index) => (
                <div 
                  key={item.id}
                  className={`flex items-center p-6 ${
                    index !== items.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold text-blue-600">{item.name}</h3>
                    <p className="text-gray-600 mt-1">
                      Quantity: <span className="font-bold text-blue-600">{item.quantity}</span>
                    </p>
                    <p className="text-xl font-bold text-green-600 mt-2">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-6 text-red-500 hover:text-red-700 transition-colors"
                  >
                    <span className="sr-only">Remove item</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Subtotal</span>
                  <span className="text-lg font-bold text-green-600">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Shipping</span>
                  <span className="text-lg font-bold text-green-600">Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-blue-600">Total</span>
                    <span className="text-xl font-bold text-green-600">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className={`w-full mt-6 px-6 py-3 rounded-lg text-white font-bold text-lg
                  ${isCheckingOut 
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 transition-colors'
                  }`}
              >
                {isCheckingOut ? 'Processing...' : 'Checkout'}
              </button>

              <Link 
                href="/products"
                className="block text-center mt-4 text-blue-600 hover:text-blue-800 font-semibold"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}