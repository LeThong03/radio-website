// app/checkout/page.tsx
'use client'
import { useCart } from '../context/CartContext'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
  email: string;
}

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const router = useRouter()
  
  // Add states for discount
  const [discountAmount, setDiscountAmount] = useState(0)
  const [appliedCode, setAppliedCode] = useState('')
  const [finalTotal, setFinalTotal] = useState(total)

  // Get discount from localStorage (set in cart page)
  useEffect(() => {
    const savedDiscount = localStorage.getItem('cartDiscount')
    const savedCode = localStorage.getItem('discountCode')
    if (savedDiscount) {
      const discount = JSON.parse(savedDiscount)
      setDiscountAmount(discount)
      setFinalTotal(total - discount)
    }
    if (savedCode) {
      setAppliedCode(savedCode)
    }
  }, [total])

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    address: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the order to your backend
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Clear discount from localStorage
      localStorage.removeItem('cartDiscount')
      localStorage.removeItem('discountCode')
      
      alert('Order placed successfully! We will contact you soon.')
      clearCart()
      router.push('/')
    } catch (error) {
      alert('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Order Summary */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-[#65452D] mb-4">Order Summary</h2>
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                    <h3 className="font-semibold text-[#65452D]">{item.name}</h3>
                    <p className="text-gray-600">
                      Quantity: <span className="font-bold text-[#65452D]">{item.quantity}</span> x 
                      <span className="text-[#8B4513] font-bold"> ${item.price.toFixed(2)}</span>
                    </p>
                    </div>
                  </div>
                ))}

                <div className="border-t pt-4">
                  <div className="text-[#65452D] font-semibold">
                    <span className="font-semibold">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#2E7D32] mb-2">
                    <span>Discount {appliedCode && `(${appliedCode})`}</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                  )}

                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-[#65452D]">Total</span>
                    <span className="text-[#8B4513]">${finalTotal.toFixed(2)}</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-[#65452D] mb-6">Shipping Information</h2>
              <div className="space-y-6">
                <div>
                <label className="block text-lg font-semibold text-[#65452D] mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>

                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B4513]"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Delivery Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                    placeholder="Enter your delivery address"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg text-white font-bold text-lg
                    ${isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#8B4513] hover:bg-[#654321] transition-colors'
                    }`}
                >
                  {isSubmitting ? 'Processing...' : 'Place Order'}
                </button>
                <Link 
                  href="/cart"
                  className="block text-center text-[#8B4513] hover:text-[#654321] font-semibold"
                >
                  Return to Cart
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}