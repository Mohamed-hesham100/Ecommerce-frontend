import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Percent, 
  Clock, 
  Star, 
  ShoppingBag, 
  Search,
  Calendar,
  Gift,
  Zap,
  Target,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';

const OffersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const categories = [
    { id: 'all', name: 'جميع العروض', count: 45, icon: Gift },
    { id: 'flash', name: 'عروض البرق', count: 12, icon: Zap },
    { id: 'daily', name: 'عرض اليوم', count: 8, icon: Calendar },
    { id: 'weekend', name: 'عروض نهاية الأسبوع', count: 15, icon: Star },
    { id: 'clearance', name: 'تصفية المخزون', count: 10, icon: Target }
  ];

 const featuredOffers = [
  {
    id: 1,
    title: 'عرض الصيف الكبير',
    description: 'خصم يصل إلى 50% على جميع منتجات العناية بالبشرة',
    discount: 50,
    image: 'https://img.pikbest.com/origin/10/48/82/88mpIkbEsT2Zp.jpg!w700wp', // منتجات عناية بالبشرة + كريمات
    endDate: '2024-02-15',
    type: 'flash',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 2,
    title: 'عرض العملاء الجدد',
    description: 'خصم 30% للعملاء الجدد على أول طلب',
    discount: 30,
    image: 'https://planify-main.s3.amazonaws.com/media/dm/featured-images/Offers-01.png', // عميل جديد بيستلم صندوق منتجات
    endDate: '2024-12-31',
    type: 'welcome',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 3,
    title: 'عرض نهاية الأسبوع',
    description: 'خصم 25% على منتجات العناية بالشعر',
    discount: 25,
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg', // منتجات شامبو وبلسم
    endDate: '2024-01-28',
    type: 'weekend',
    color: 'from-purple-500 to-indigo-500'
  }
];

  const offerProducts = [
    {
      id: 1,
      name: 'سيروم فيتامين سي المضاد للأكسدة',
      price: 199,
      originalPrice: 399,
      image: 'https://s.alicdn.com/@sc04/kf/H63c9e88fac994392858682e2db2ee8ebL.jpg',
      rating: 4.8,
      reviews: 156,
      discount: 50,
      category: 'flash',
      timeLeft: '2 أيام'
    },
    {
      id: 2,
      name: 'كريم الترطيب المكثف للبشرة الجافة',
      price: 132,
      originalPrice: 189,
      image: 'https://matjrah.online/images/1356/image/cache/catalog/1726587730024-IMG_4051-550x550.webp',
      rating: 4.9,
      reviews: 89,
      discount: 30,
      category: 'daily',
      timeLeft: '12 ساعة'
    },
    {
      id: 3,
      name: 'زيت الوجه المغذي بالأرجان',
      price: 244,
      originalPrice: 349,
      image: 'https://m.media-amazon.com/images/I/61ku+Fjz4PL._UF894,1000_QL80_.jpg',
      rating: 4.9,
      reviews: 127,
      discount: 30,
      category: 'clearance',
      timeLeft: '5 أيام'
    },
    {
      id: 4,
      name: 'ماسك الطين المنقي للبشرة الدهنية',
      price: 119,
      originalPrice: 159,
      image: 'https://cdn.salla.sa/RPbby/e9c648e9-4380-4d4c-9ab3-d73905800d66-996.46330680813x1000-Dlp8bT4akM134im6IesQinciWBK8JZJLEFRUeZ4W.jpg',
      rating: 4.7,
      reviews: 203,
      discount: 25,
      category: 'weekend',
      timeLeft: '3 أيام'
    },
    {
      id: 5,
      name: 'ماسك الطين المنقي للبشرة الدهنية',
      price: 119,
      originalPrice: 159,
      image: 'https://m.media-amazon.com/images/I/51iXPiDeZHL.jpg',
      rating: 4.7,
      reviews: 203,
      discount: 25,
      category: 'weekend',
      timeLeft: '3 أيام'
    },
    {
      id: 6,
      name: 'شامبو مقوي للشعر التالف',
      price: 97,
      originalPrice: 129,
      image: 'https://menashopeg.com/wp-content/uploads/2024/10/18-17.webp',
      rating: 4.6,
      reviews: 94,
      discount: 25,
      category: 'weekend',
      timeLeft: '1 يوم'
    },
    {
      id: 7,
      name: 'أحمر شفاه مات طويل الثبات',
      price: 62,
      originalPrice: 89,
      image: 'https://www.lmching.com/cdn/shop/files/D_anm_i-54_bcd11e17-e63e-4286-a2e1-4029938bec27_540x.jpg?v=1745478581',
      rating: 4.5,
      reviews: 78,
      discount: 30,
      category: 'flash',
      timeLeft: '6 ساعات'
    }
  ];

  const filteredProducts = offerProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const dealOfTheDay = offerProducts[0];

  return (
    <motion.div
      className="min-h-screen pt-24 px-4 lg:px-8 bg-gradient-to-br from-white via-red-50/30 to-pink-50/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Percent className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">العروض الحصرية</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            اكتشف أفضل العروض والخصومات على منتجاتك المفضلة
          </p>
        </motion.div>

        {/* Flash Sale Banner */}
        <motion.div
          className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-3xl p-8 mb-16 text-white relative overflow-hidden"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-yellow-300" />
                <span className="text-yellow-300 font-bold">عرض البرق</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">خصم يصل إلى 70%</h2>
              <p className="text-xl text-white/90 mb-6">
                على مجموعة مختارة من أفضل منتجات العناية والجمال
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-red-500 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                تسوق الآن
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">ينتهي العرض خلال:</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">{timeLeft.days}</div>
                  <div className="text-white/80 text-sm">يوم</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">{timeLeft.hours}</div>
                  <div className="text-white/80 text-sm">ساعة</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-white/80 text-sm">دقيقة</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-white/80 text-sm">ثانية</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Offers */}
        <motion.div
          className="mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">العروض المميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-80`} />
                  
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white font-bold">
                      -{offer.discount}%
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-white/90 text-sm">{offer.description}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">ينتهي في {offer.endDate}</span>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl hover:shadow-lg transition-all duration-300">
                      تسوق الآن
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deal of the Day */}
        <motion.div
          className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 mb-16 text-white"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className='space-y-12'>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6 text-yellow-300" />
                <span className="text-yellow-300 font-bold">عرض اليوم</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">منتج اليوم المميز</h2>
              <h3 className="text-xl font-semibold mb-2">{dealOfTheDay.name}</h3>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold">{dealOfTheDay.price} ر.س</span>
                <span className="text-xl text-white/70 line-through">{dealOfTheDay.originalPrice} ر.س</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
                  -{dealOfTheDay.discount}%
                </span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(dealOfTheDay.rating)
                          ? 'text-yellow-300 fill-current'
                          : 'text-white/30'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white/90">({dealOfTheDay.reviews} تقييم)</span>
              </div>
              <button className="flex items-center gap-3 px-8 py-4 bg-white text-amber-600 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <ShoppingBag className="w-5 h-5" />
                أضف للسلة
              </button>
            </div>
            
            <div className="relative">
              <img
                src={dealOfTheDay.image}
                alt={dealOfTheDay.name}
                className="w-full h-65 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                -{dealOfTheDay.discount}%
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search and Categories */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث في العروض..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-red-500 transition-all duration-300"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Offer Products Grid */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold text-gray-900">جميع العروض</h2>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">تم العثور على {filteredProducts.length} منتج</span>
              <select className="px-4 py-2 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-red-500">
                <option>الأحدث</option>
                <option>أعلى خصم</option>
                <option>السعر: من الأقل للأعلى</option>
                <option>السعر: من الأعلى للأقل</option>
                <option>الأعلى تقييماً</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  layout
                >
                  {/* Time Left Badge */}
                  <div className="absolute -top-2 -right-2 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    <Clock className="w-3 h-3 inline ml-1" />
                    {product.timeLeft}
                  </div>
                  
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">لا توجد عروض</h3>
              <p className="text-gray-600">جرب تغيير معايير البحث أو الفئة</p>
            </motion.div>
          )}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-12 text-white text-center mt-16 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h3 className="text-3xl font-bold mb-4">لا تفوت العروض الحصرية</h3>
          <p className="text-xl text-white/90 mb-8">
            اشترك في النشرة الإخبارية واحصل على إشعارات فورية بأحدث العروض والخصومات
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="flex-1 px-6 py-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-2xl hover:bg-gray-100 transition-colors duration-300">
              اشتراك
            </button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            احصل على خصم 10% على أول طلب عند الاشتراك
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OffersPage;