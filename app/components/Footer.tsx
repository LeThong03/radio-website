import Link from 'next/link'
import QRCode from './QRCode'

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
              <li>Email: quayquayricho@yahoo.com</li>
              <li>Phone: (84) 934 858 710</li>
              <li>Address: District 10, Ho Chi Minh City, Viet Nam</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Scan to Visit</h3>
            <QRCode size={150} />
          </div>
          
        {/* Bottom Bar */}
        <div className="border-t border-[#8B4513] mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Vintage Audio. All rights reserved.</p>
          <div className="mt-2">
            <a 
              href="https://www.facebook.com/profile.php?id=100077053847637"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B4513] hover:text-[#654321]"
            >
              Follow us on Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}