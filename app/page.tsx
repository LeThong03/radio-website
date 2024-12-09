// app/page.tsx
'use client'
import Link from 'next/link'

export default function Home() {
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

      <div className="relative bg-gray-900 h-[600px]">
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Vintage audio collection"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Vintage Audio Paradise
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10">
              Experience the warmth of analog sound with our carefully curated collection of vintage audio equipment
            </p>
            <div className="space-x-4">
              <Link 
                href="/products" 
                className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 inline-block"
              >
                Browse Collection
              </Link>
              <Link 
                href="/about" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}