// app/products/cds/page.tsx
'use client'
import { useCart } from '../../context/CartContext'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';


const cdProducts = [
  {
    id: 'd_1',
    name: 'Sony Discman D-4 ',
    price: 179.99,
    description: 'Bạn đam mê những chiếc đĩa CD với âm thanh trong trẻo, chân thực? Bạn đang tìm kiếm một thiết bị giúp bạn thưởng thức trọn vẹn bộ sưu tập nhạc của mình? Sony Discman D-4 chính là sản phẩm dành cho bạn! Là một trong những mẫu Discman tiên phong của Sony, D-4 mang đến sự kết hợp hoàn hảo giữa thiết kế nhỏ gọn, hiệu năng cao và chất lượng âm thanh vượt trội. Sony D-4 sở hữu kiểu dáng mỏng nhẹ, dễ dàng mang theo bên mình. Với thiết kế kim loại chắc chắn, đây không chỉ là một chiếc máy nghe nhạc mà còn là biểu tượng của phong cách và sự tinh tế. Discman D-4 được trang bị công nghệ tiên tiến của Sony, tái hiện âm thanh CD chuẩn xác và rõ nét. Mỗi nốt nhạc, mỗi nhịp điệu đều được truyền tải chân thực, mang lại trải nghiệm âm nhạc sống động như đang ở phòng thu. D-4 tương thích với mọi loại đĩa CD thông thường, từ album nhạc chính hãng đến các đĩa CD tự ghi. Bạn có thể tận hưởng âm nhạc theo cách riêng của mình mà không gặp bất kỳ giới hạn nào. Chỉ với hai pin AA hoặc sử dụng bộ sạc ngoài, Discman D-4 có thể phát nhạc liên tục hàng giờ, đảm bảo bạn không bỏ lỡ bất kỳ giai điệu nào trong những chuyến đi xa.',
    features: ['Anti-skip protection', 'LCD display', 'Bass boost'],
    image: '../images/cds/cd1.jpg'
  },
  {
    id: 'd_2',
    name: 'CD Player Discman D5',
    price: 299.99,
    description: 'Khám Phá Âm Nhạc Lên Tầm Cao Mới với Discman D5 – Hòa Mình Vào Những Giai Điệu Đích Thực! Bạn là người yêu âm nhạc và muốn mang theo những giai điệu yêu thích mọi lúc mọi nơi? Discman D5 chính là lựa chọn lý tưởng giúp bạn trải nghiệm âm thanh chất lượng cao, đồng thời vẫn giữ được phong cách thời thượng. Với thiết kế nhỏ gọn, tinh tế và tính năng vượt trội, Discman D5 sẽ mang đến cho bạn một thế giới âm nhạc không giới hạn. Dù bạn đang nghe nhạc rock sôi động, hay những bản ballad du dương, Discman D5 tái hiện âm thanh chân thật, sắc nét và sống động. Công nghệ xử lý âm thanh tiên tiến giúp tái tạo từng chi tiết nhỏ nhất, cho bạn cảm giác như đang ở ngay trong phòng thu. Màn hình LCD hiển thị rõ ràng, cùng các nút điều khiển dễ dàng sử dụng giúp bạn nhanh chóng điều chỉnh âm lượng, chọn bài hát, hay chuyển bài một cách thuận tiện. Đừng để bất kỳ khoảnh khắc nào trong cuộc sống thiếu âm nhạc. Với Discman D5, bạn không chỉ đơn giản là nghe nhạc, mà còn là trải nghiệm một hành trình âm thanh đích thực. Một trong những tuyệt tác của thời gian, siêu phẩm về chất lượng. Mang trong mình cả giá trị sưu tầm hoài cổ cùng giá trị sử dụng thực tế đến từng đồng mà bạn bỏ ra để sở hữu D5 trong tầm tay.',
    features: ['100-disc capacity', 'Remote control', 'Digital output'],
    image: '../images/cds/cd2.jpg'
  },
  {
    id: 'd_3',
    name: 'CD Player Discman D7',
    price: 159.99,
    description: 'Khám Phá Trải Nghiệm High End Discman D7 – Âm Thanh Hoàn Hảo, Thiết Kế Đẳng Cấp! Discman D7 sở hữu công nghệ âm thanh tiên tiến, mang lại âm bass sâu, treble rõ nét và độ chi tiết tinh tế. Dù là những bản nhạc cổ điển du dương hay những giai điệu sôi động, bạn sẽ được đắm chìm trong từng nốt nhạc, cảm nhận được sự hoàn hảo từ những bản thu gốc. Với công nghệ chống sốc và bộ nhớ đệm thông minh, Discman D7 giúp bạn thưởng thức âm nhạc liên tục mà không bị gián đoạn dù đang di chuyển. Hãy tận hưởng những giai điệu yêu thích mà không lo lắng về việc ngắt quãng khi đi tàu, xe hay đi bộ. Với thời gian sử dụng lâu dài, bạn có thể thưởng thức nhạc liên tục trong nhiều giờ mà không cần lo hết pin. Cùng với khả năng tiết kiệm năng lượng, Discman D7 sẽ là người bạn đồng hành lý tưởng trong những chuyến đi dài.',
    features: ['Optical output', '20-track programming', 'Random play'],
    image: '../images/cds/cd3.jpg'
  },
];

export default function CDsPage() {
   const { addItem } = useCart()
        const router = useRouter()
      
        const handleAddToCart = (product: any) => {
          addItem(product)
          router.push('/cart')
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
      
            {/* Category Title */}
            <div className="bg-white shadow">
              <div className="max-w-7xl mx-auto py-6 px-4">
                <h1 className="text-3xl font-bold text-gray-900">CD Players</h1>
              </div>
            </div>
      
            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cdProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-64">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-blue-600 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <ul className="space-y-2 mb-4">
                        {product.features.map((feature, index) => (
                          <li key={index} className="text-sm text-gray-500">• {feature}</li>
                        ))}
                      </ul>
                      <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold text-green-600">
                          ${product.price}
                        </span>
                        <button 
                          onClick={() => handleAddToCart(product)}
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      }