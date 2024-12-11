// app/products/cassettes/page.tsx
'use client'
import { useCart } from '../../context/CartContext'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link'

const cassetteProducts = [
  {
    id: 'cassette-1',
    name: 'Sony WM-2',
    price: 149.99,
    discount: 15,
    description: 'Sony WM-2 – Lỗi thời hay Dấu ấn ? Bạn yêu thích những bản nhạc xưa đầy cảm xúc hay muốn trải nghiệm chất lượng âm thanh vượt thời gian? Sony WM-2 chắc chắn sẽ không làm bạn thất vọng WM-2 mang lại chất lượng âm thanh tuyệt hảo nhờ công nghệ xử lý âm thanh tiên tiến của Sony. Mỗi giai điệu, mỗi nhịp bass đều được tái hiện sống động, trung thực đến từng chi tiết.Với màu đỏ đô cực hiếm cùng cặp tai MDR-E838 bản crystal red là một cặp đôi nguyên tử đem lại những nốt cao thăng hoa và những nốt trầm xao xuyến trong từng bản nhạc Dù bạn là tín đồ công nghệ, người đam mê âm nhạc hay đơn giản là muốn tìm một món quà ý nghĩa, Sony WM-2 sẽ là lựa chọn hoàn hảo.',
    features: ['Auto-reverse', 'Dolby NR', 'Metal tape capability'],
    image: '../images/cassettes/cassett1.jpg',
  },
  {
    id: 'cassette-2',
    name: 'Cassette Player TPS-L2',
    price: 129.99,
    description: 'Bạn có biết chiếc máy cassette Sony TPS-L2, chiếc Walkman đầu tiên trên thế giới, đã tạo ra một cuộc cách mạng thực sự trong cách chúng ta nghe nhạc? Ra đời vào năm 1979, sản phẩm này không chỉ mang lại âm nhạc bên bạn mọi lúc mọi nơi mà còn mở ra một phong cách sống hoàn toàn mới. Nếu bạn là một người yêu âm nhạc, thích hoài cổ nhưng vẫn muốn tận hưởng chất lượng vượt thời gian, thì Sony TPS-L2 là đáp án cho mọi yêu cầu của bạn.Với kích thước vừa phải, lớp vỏ kim loại bền bỉ và tông màu xanh – bạc đặc trưng, TPS-L2 không chỉ là một chiếc máy cassette, mà còn là biểu tượng của thời trang và phong cách. Phù hợp để bạn mang theo khắp nơi, dù là dạo phố hay trong các chuyến du lịch xa.Sony TPS-L2 được thiết kế với công nghệ tiên tiến, mang lại âm thanh trung thực và sống động. Dù là những giai điệu pop sôi động hay bản nhạc jazz trầm lắng, chiếc máy cassette này đều tái hiện một cách hoàn hảo.Một tính năng đặc biệt của TPS-L2 là trang bị hai cổng tai nghe, giúp bạn dễ dàng chia sẻ âm nhạc với bạn bè hoặc người thân – một trải nghiệm hiếm có ở các thiết bị nghe nhạc thời đó.Với khả năng sử dụng pin AA, TPS-L2 mang lại thời gian phát nhạc lâu dài, đảm bảo đồng hành cùng bạn trong mọi hoạt động mà không lo ngại gián đoạn. Các nút điều khiển trên TPS-L2 được thiết kế trực quan và dễ dàng thao tác, phù hợp cho cả những người mới sử dụng.',
    features: ['Digital display', 'Bass boost', 'Auto-reverse'],
    image: '../images/cassettes/cassett2.jpg'
  },
  {
    id: 'cassette-3',
    name: 'AIWA HS-PC202',
    price: 199.99,
    description: 'Bạn yêu thích những bản nhạc được phát từ băng cassette? Bạn muốn trải nghiệm âm thanh mộc mạc nhưng đầy cảm xúc từ những thiết bị hoài cổ? AIWA HS-PC202 là chiếc máy cassette hoàn hảo dành cho bạn! Với thiết kế đậm chất retro, chất lượng âm thanh vượt thời gian và những tính năng hiện đại so với thời kỳ của nó, HS-PC202 chính là biểu tượng của sự kết hợp giữa công nghệ và nghệ thuật. Trang bị công nghệ tiên tiến, HS-PC202 mang lại âm thanh mượt mà, chân thực và đầy cảm xúc. Những giai điệu từ chiếc băng cassette sẽ được tái hiện sống động, gợi nhớ những ký ức đẹp trong quá khứ. HS-PC202 được tích hợp tính năng Auto-Reverse, cho phép băng tự động phát mặt B mà không cần tháo ra đảo chiều. Đây là tính năng tiên tiến mà không phải máy cassette nào cùng thời cũng có. AIWA HS-PC202 đi kèm với tai nghe chất lượng cao, mang lại trải nghiệm âm thanh riêng tư và chân thực nhất.',
    features: ['Dual capstan', '2-motor mechanism', 'LED meters'],
    image: '../images/cassettes/cassett3.jpg'
  },

];


export default function CassettesPage() {
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
          <h1 className="text-3xl font-bold text-gray-900">Cassette Players</h1>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cassetteProducts.map(product => (
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