// app/qr/page.tsx
'use client'
import QRCode from '../components/QRCode'
import Link from 'next/link'

export default function QRPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#D4C5B2] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#65452D]">Vintage Audio</Link>
            <div className="flex space-x-6">
              <Link href="/" className="text-[#65452D] hover:text-[#8B4513]">Home</Link>
              <Link href="/products" className="text-[#65452D] hover:text-[#8B4513]">Menu</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-center py-16">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold text-[#65452D] mb-6">Visit Our Vintage Audio Shop</h1>
          <QRCode 
            size={300}
            fgColor="#8B4513"
          />
          <p className="mt-6 text-[#65452D]">
            Scan this QR code with your phone&apos;s camera
          </p>
          <p className="mt-2 text-[#8B4513] font-semibold break-all">
            https://radio-website-65r9.vercel.app/
          </p>
        </div>
      </div>
    </div>
  )
}