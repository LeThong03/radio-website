import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Quậy Rì-chô</h3>
            <p className="text-gray-400">
              Discover the magic of classic audio equipment. We bring you carefully curated vintage audio devices that deliver timeless sound quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/cart" className="text-gray-400 hover:text-white">Shopping Cart</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/products/cassettes" className="text-gray-400 hover:text-white">Cassette Players</Link></li>
              <li><Link href="/products/cds" className="text-gray-400 hover:text-white">CD Players</Link></li>
              <li><Link href="/products/mds" className="text-gray-400 hover:text-white">MD Players</Link></li>
              <li><Link href="/products/mp3" className="text-gray-400 hover:text-white">MP3 Players</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@vintageaudio.com</li>
              <li>Phone: (84) 934 858 710</li>
              <li>Address: District 10, Ho Chi Minh City, Viet Nam</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Quậy Rì-chô. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}