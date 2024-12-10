// app/products/mds/page.tsx
'use client'
import { useCart } from '../../context/CartContext'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';

const mdProducts = [
  {
    id: 'md1',
    name: 'MiniDisc Player MZ-2P',
    price: 299.99,
    description: 'Khám Phá Thế Giới Âm Nhạc Mới Lạ Cùng MiniDisc MZ-2P - Kho báu đã bị lãng quên theo thời gian  Nếu bạn là người yêu thích âm nhạc và luôn tìm kiếm những thiết bị âm thanh nhỏ gọn nhưng mạnh mẽ, thì MiniDisc MZ-2P chính là lựa chọn lý tưởng để đưa bạn vào một hành trình âm nhạc chưa từng có. Với công nghệ MiniDisc tiên tiến, bạn có thể nghe đến 90 phút playback SP cho mỗi đĩa MD mà bạn đang sở hữu.  Đem lại trải nghiệm ngọt ngào nịnh tai hơn cả CD, MiniDisc MZ-2P mang đến chất lượng âm thanh sắc nét, trung thực và đầy cảm xúc. Với khả năng mã hóa âm thanh kỹ thuật số tiên tiến, MZ-2P tái hiện âm nhạc một cách sống động và chi tiết, cho phép bạn thưởng thức những bản nhạc yêu thích một cách hoàn hảo. Một trong những tính năng nổi bật của MZ-2P chính là khả năng chống sốc cực kỳ hiệu quả. Dù bạn có đang di chuyển nhanh chóng hay tham gia các hoạt động ngoài trời, MiniDisc MZ-2P luôn đảm bảo âm nhạc của bạn không bị gián đoạn.',
    features: ['Type-R recording', 'Remote control', 'Long battery life'],
    image: '../images/mds/md1.jpg'
  },
  {
    id: 'md2',
    name: 'Minidisc Player MZ-RH1',
    price: 249.99,
    description: 'MiniDisc RH1 – Công nghệ đỉnh nóc của những năm 2000. Nếu bạn là tín đồ yêu thích âm nhạc và luôn tìm kiếm một thiết bị nhỏ gọn, đa năng nhưng không kém phần mạnh mẽ, thì MiniDisc RH1 chính là lựa chọn lý tưởng dành cho bạn. Với sự kết hợp hoàn hảo giữa công nghệ ghi âm tiên tiến và khả năng phát lại chất lượng cao, MiniDisc RH1 mang đến một trải nghiệm âm nhạc mới mẻ, sống động, không giới hạn! Màn Hình Oled mang lại độ sáng và sắc nét cực kì cao, cùng 2 thanh level meter nổi bật góp phần thiết kế càng sang trọng, toát ra vẻ đẳng cấp của một thiết bị portable thuốc phân khúc đầu bảng RH1 không chỉ là một máy nghe nhạc thông thường, mà còn là một thiết bị ghi âm đa năng, cho phép bạn ghi lại các buổi hội thảo, những ý tưởng âm nhạc mới, hoặc thậm chí là các chương trình radio yêu thích. Với khả năng ghi âm chất lượng cao và lưu trữ lên đến 1GB, bạn có thể dễ dàng lưu trữ và phát lại những khoảnh khắc đáng nhớ. MiniDisc RH1 hỗ trợ đầy đủ các định dạng âm thanh, bao gồm MiniDisc và MP3, giúp bạn thoải mái thưởng thức mọi bộ sưu tập nhạc yêu thích. Hệ thống mã hóa âm thanh ATRAC3+ giúp giảm thiểu dung lượng lưu trữ mà vẫn đảm bảo chất lượng âm thanh tuyệt vời, cho phép bạn lưu trữ nhiều bài hát trong một không gian nhỏ gọn. MiniDisc RH1 trang bị các cổng kết nối đa dạng, bao gồm cổng USB để bạn dễ dàng chuyển nhạc từ máy tính vào thiết bị. Bạn có thể chia sẻ và thưởng thức âm nhạc yêu thích mọi lúc mọi nơi, kết nối và sao chép âm thanh từ các nguồn khác nhau một cách nhanh chóng và thuận tiện.',
    features: ['MDLP support', 'Digital recording', 'LCD remote'],
    image: '../images/mds/md2.jpg'
  },
  {
    id: 'md3',
    name: 'MiniDisc Player MZ-R37',
    price: 279.99,
    description: 'Món trang sức của công nghệ thời đại - MZ-R37 Chào mừng bạn đến với một thế giới âm thanh hoàn toàn mới, nơi chất lượng và tiện ích hội tụ hoàn hảo! Với MZ-R37, bạn sẽ không chỉ nghe, mà còn cảm nhận âm nhạc theo cách mà nó xứng đáng có. Thiết kế tinh tế, công nghệ hiện đại và khả năng truyền tải âm thanh vượt trội, MZ-R37 là sự lựa chọn lý tưởng cho mọi tín đồ yêu thích âm nhạc và công nghệ. Được trang bị công nghệ tiên tiến, MZ-R37 mang đến âm thanh sống động, sắc nét, với độ chi tiết và độ chính xác cao. Dù bạn nghe nhạc pop sôi động hay những bản ballad trữ tình, mọi âm điệu đều được tái tạo rõ ràng, chính xác đến từng nốt nhạc. Bạn sẽ cảm nhận được sự khác biệt ngay từ lần nghe đầu tiên. Đừng bỏ lỡ cơ hội sở hữu MZ-R37, sản phẩm mang đến một trải nghiệm âm thanh tuyệt vời và một thiết kế đầy tính năng thông minh. Cho dù bạn là một người đam mê công nghệ, hay đơn giản là yêu thích âm nhạc, MZ-R37 sẽ không làm bạn thất vọng.',
    features: ['Optical input', 'Track marking', 'Title editing'],
    image: '../images/mds/md3.jpg'
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
      <nav className="bg-white shadow-lg">
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
          {mdProducts.map(product => (
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