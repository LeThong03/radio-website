// app/products/mp3/page.tsx
'use client'
import { useCart } from '../../context/CartContext'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';

const mp3Products = [
  {
    id: 'm1',
    name: 'MP3 Ipod Classic Gen 2',
    price: 249.99,
    description: 'iPod Classic Gen 2 – Hành trình âm nhạc không giới hạn. Bạn đang tìm kiếm một người bạn đồng hành lý tưởng cho mọi chuyến đi, công việc hay những giờ phút thư giãn? Với iPod Classic Gen 2, âm nhạc của bạn sẽ luôn ở bên, mang lại trải nghiệm đỉnh cao từ thiết kế sang trọng đến chất lượng âm thanh vượt trội. Đây là chiếc máy nghe nhạc không thể thiếu cho những ai yêu thích sự đơn giản, tinh tế nhưng đầy đủ tính năng. Với thiết kế nhỏ gọn và tinh tế, iPod Classic Gen 2 không chỉ là một thiết bị nghe nhạc, mà còn là một biểu tượng thời trang. Khung kim loại chắc chắn và màn hình LCD sắc nét, bạn sẽ cảm nhận được sự khác biệt ngay từ cái nhìn đầu tiên. Wheel điều khiển nổi tiếng giúp bạn dễ dàng tìm kiếm bài hát, điều chỉnh âm lượng, và duyệt qua thư viện nhạc chỉ bằng một tay. Tất cả đều mang lại sự tiện lợi tối đa, phù hợp với nhịp sống năng động. Với dung lượng lưu trữ lên đến 20GB, iPod Classic Gen 2 có thể chứa hàng ngàn bài hát yêu thích của bạn mà không lo hết dung lượng. Bạn không còn phải lo lắng về việc phải xóa nhạc cũ để tải nhạc mới nữa. Tất cả âm nhạc, podcast, sách nói, hay những bộ phim yêu thích đều có thể được lưu trữ trong một thiết bị nhỏ gọn. Không chỉ là một chiếc máy nghe nhạc, iPod Classic Gen 2 còn là một công cụ giải trí hoàn hảo. Với khả năng kết nối với iTunes, bạn có thể dễ dàng đồng bộ hóa và quản lý thư viện nhạc của mình. Ngoài ra, iPod Classic còn hỗ trợ chế độ phát ngẫu nhiên, tạo playlist yêu thích, và khả năng kết nối với các thiết bị âm thanh bên ngoài qua jack cắm 3.5mm. Với thời gian phát nhạc lên đến 12 giờ liên tục, iPod Classic Gen 2 là người bạn đồng hành lý tưởng trong những chuyến đi xa, những buổi tập thể dục hoặc khi bạn cần sự tập trung trong công việc. Bạn sẽ không phải lo lắng về việc thiết bị hết pin giữa chừng.',
    features: ['160GB storage', 'Click wheel', '36-hour battery'],
    image: '../images/mp3/mp3-1.jpg'
  },
  {
    id: 'm2',
    name: 'MP3 Sony NW-A608',
    price: 129.99,
    description: 'Sony NW-A608 – Âm nhạc tuyệt hảo trong từng chi tiết. Khám phá một thế giới âm nhạc hoàn toàn mới với Sony NW-A608! Được trang bị công nghệ tiên tiến và thiết kế gọn nhẹ, MP3 player này không chỉ mang đến trải nghiệm âm thanh tuyệt vời mà còn giúp bạn thể hiện phong cách cá nhân. Với NW-A608, âm nhạc của bạn trở nên sống động và tinh tế hơn bao giờ hết. Sony NW-A608 sở hữu thiết kế cực kỳ tinh tế với vỏ ngoài kim loại bền bỉ và màn hình sắc nét. Máy nhỏ gọn, dễ dàng cầm nắm và mang theo mọi lúc mọi nơi, từ trong túi xách đến những chuyến đi dài. Bạn có thể dễ dàng kết hợp nó với phong cách cá nhân và cảm nhận sự khác biệt trong từng chi tiết thiết kế. Đây chính là món đồ không thể thiếu cho những ai yêu thích sự tiện dụng, tinh tế và sang trọng. Với công nghệ âm thanh Clear Audio+ độc quyền của Sony, NW-A608 mang lại chất lượng âm thanh tinh khiết, mạnh mẽ và rõ ràng đến từng chi tiết. Mỗi nốt nhạc, từ âm bass sâu lắng đến âm treble trong trẻo, đều được tái tạo chính xác, đưa bạn đến gần hơn với thế giới âm nhạc yêu thích. Thưởng thức mọi thể loại âm nhạc với chất lượng âm thanh vượt trội, từ các bản ballad nhẹ nhàng đến các bài nhạc sôi động, bạn sẽ cảm nhận được âm thanh sống động như thật. Với dung lượng 2GB, Sony NW-A608 cho phép bạn lưu trữ hàng nghìn bài hát yêu thích. Đừng lo lắng về việc thiếu không gian cho bộ sưu tập âm nhạc của mình nữa. Dễ dàng tải lên những bài hát mới nhất và thưởng thức âm nhạc mọi lúc, mọi nơi. Không gian lưu trữ rộng rãi giúp bạn tận hưởng sự tự do hoàn toàn trong việc thưởng thức âm nhạc. Sony NW-A608 không chỉ là một máy nghe nhạc, mà còn là một thiết bị giải trí đa năng với khả năng hỗ trợ nhiều định dạng âm thanh khác nhau như MP3, WMA, FLAC và AAC. Bạn có thể dễ dàng đồng bộ nhạc qua Media Go hoặc kéo thả nhạc trực tiếp vào thiết bị mà không cần cài đặt phần mềm phức tạp. Hệ thống điều khiển thân thiện, dễ sử dụng với các nút bấm tiện lợi giúp bạn dễ dàng lựa chọn bài hát, thay đổi âm lượng hoặc tìm kiếm bài hát yêu thích.',
    features: ['SD card slot', 'X-Fi technology', 'FM radio'],
    image: '../images/mp3/mp3-2.jpg'
  },
  {
    id: 'm3',
    name: 'MP3 Creative MuVo',
    price: 199.99,
    description: 'Creative MuVo 512MB – Sự Kết Hợp Hoàn Hảo Giữa Âm Thanh và Phong Cách. Bạn đang tìm kiếm một chiếc máy nghe nhạc nhỏ gọn, tiện lợi và chất lượng âm thanh vượt trội? Creative MuVo 512MB chính là sự lựa chọn lý tưởng dành cho bạn! Với thiết kế hiện đại, dung lượng vừa đủ, và khả năng phát nhạc đỉnh cao, đây là sản phẩm dành cho những ai yêu thích âm nhạc và phong cách cá nhân. Creative MuVo 512MB sở hữu kiểu dáng nhỏ gọn, dễ dàng mang theo bên mình mọi lúc mọi nơi. Vỏ ngoài tinh tế với nhiều màu sắc thời trang, giúp bạn thể hiện phong cách riêng biệt. Sản phẩm có giao diện thân thiện với người dùng, giúp bạn dễ dàng điều khiển và chọn bài hát. Chỉ cần cắm vào máy tính qua cổng USB, bạn có thể truyền tải nhạc mà không cần phần mềm phức tạp.',
    features: ['Hi-Res Audio', 'DSEE HX', 'Bluetooth'],
    image: '../images/mp3/mp3-3.jpg'
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
            {mp3Products.map(product => (
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