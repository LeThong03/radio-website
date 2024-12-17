// app/page.tsx
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const categories = [
  {
    id: 'cassettes',
    name: 'Cassette Players',
    description: 'Classic portable audio with vintage charm',
    image: '/images/cassettes/cassett1.jpg',
    link: '/products/cassettes'
  },
  {
    id: 'cds',
    name: 'CD Players',
    description: 'Digital clarity with retro style',
    image: '/images/cds/cd1.jpg',
    link: '/products/cds'
  },
  {
    id: 'mds',
    name: 'MD Players',
    description: 'The perfect blend of digital and physical media',
    image: '/images/mds/md1.jpg',
    link: '/products/mds'
  },
  {
    id: 'mp3',
    name: 'MP3 Players',
    description: 'Vintage digital audio devices',
    image: '/images/mp3/mp3-1.jpg',
    link: '/products/mp3'
  }
];

declare global {
  interface Window {
    gtag: (command: string, action: string, params: any) => void;
  }
}

// Add this function to track Facebook clicks
const trackFacebookClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'social_click', {
      social_platform: 'facebook',
      content_type: 'shop_link',
      outbound: true
    });
  }
};

// Add this type to match your product structure
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
    }
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar with Facebook Icon */}
      <nav className="bg-[#D4C5B2] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-800">Quậy Rì-chô</span>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
              <Link href="/products" className="text-gray-600 hover:text-gray-800">Menu</Link>
              <Link href="/products/cassettes" className="text-gray-600 hover:text-gray-800">Cassettes</Link>
              <Link href="/products/cds" className="text-gray-600 hover:text-gray-800">CDs</Link>
              <Link href="/products/mds" className="text-gray-600 hover:text-gray-800">MDs</Link>
              <Link href="/products/mp3" className="text-gray-600 hover:text-gray-800">MP3</Link>
              <a 
                href="https://www.facebook.com/profile.php?id=100077053847637" // Replace with your Facebook URL
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackFacebookClick}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                <svg 
                  className="w-6 h-6 fill-current" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative bg-gray-900 h-[600px]">
        <img 
          src="/images/logo/logo.jpg" 
          alt="Vintage audio collection"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Quậy Rì-chô
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10">
              Experience the warmth of analog sound with our carefully curated collection
            </p>
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for vintage audio products..."
                  className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-[#8B4513] 
    focus:ring-2 focus:ring-[#8B4513] focus:outline-none 
    placeholder-gray-500 
    text-black font-medium"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#8B4513] text-white rounded-lg hover:bg-[#654321] transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
            <Link 
              href="/products" 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 inline-block"
            >
              Browse Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Browse By Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <Link key={category.id} href={category.link}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                      <p className="text-gray-200 text-sm">{category.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Featured Products or Additional Sections can go here */}
    </div>
  )
}
