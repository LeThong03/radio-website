// app/search/page.tsx
'use client'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const allProducts = {
    cassettes: [
      {
        id: 'cassette-1',
        name: 'Sony WM-2',
        price: 149.99,
        description: 'Sony WM-2 – Lỗi thời hay Dấu ấn ?...',
        image: '/images/cassettes/cassett1.jpg',
      },
    ]  // ... other cassette products
  }

  export default function SearchPage() {
    const searchParams = useSearchParams()
    const query = searchParams.get('q')?.toLowerCase() || ''
  
    // Flatten and search all products
    const searchResults = Object.values(allProducts)
      .flat()
      .filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      )

    return (
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-[#65452D] mb-8">
              Search Results for "{query}"
            </h1>
    
            {searchResults.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No products found matching your search.</p>
                <Link 
                  href="/products" 
                  className="text-[#8B4513] hover:text-[#654321] font-semibold"
                >
                  View all products
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#65452D]">{product.name}</h3>
                      <p className="text-gray-600 mt-2">{product.description}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xl font-bold text-[#8B4513]">
                          ${product.price.toFixed(2)}
                        </span>
                        <button className="bg-[#8B4513] text-white px-4 py-2 rounded-lg hover:bg-[#654321]">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )
    }