import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, X } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';

const ShopPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    'العناية بالبشرة',
    'العناية بالشعر',
    'المكياج',
    'العطور',
    'منتجات الاستحمام',
    'العناية بالجسم'
  ];

  const brands = [
    'لوريال',
    'نيفيا',
    'غارنييه',
    'أوليه',
    'دوف',
    'بانتين'
  ];

  const products = [
  {
    id: 1,
    name: "سيروم فيتامين سي المضاد للأكسدة",
    price: 299,
    originalPrice: 399,
    image: "https://www.laroche-posay.me/-/media/project/loreal/brand-sites/lrp/apac/mena/products/redermic/c10/la-roche-posay-productpage-anti-aging-pure-vitamin-c10-30ml-3337875660570-open.jpg", // سيروم بقطارة
    rating: 4.8,
    reviews: 156,
    isNew: true,
    discount: 25,
    category: "العناية بالبشرة",
    brand: "لوريال"
  },
  {
    id: 2,
    name: "كريم الترطيب المكثف للبشرة الجافة",
    price: 189,
    originalPrice: 249,
    image: "https://erosstore.co/cdn/shop/files/7135DSnMj_L._SL1500.jpg?v=1752402680&width=600", // كريم مرطب
    rating: 4.9,
    reviews: 89,
    isBestseller: true,
    discount: 24,
    category: "العناية بالبشرة",
    brand: "نيفيا"
  },
  {
    id: 3,
    name: "ماسك الطين المنقي للبشرة الدهنية",
    price: 159,
    originalPrice: 199,
    image: "https://cdn.salla.sa/eQVY/010a7e96-c3d3-4f2d-afe2-03c6d59cc360-1000x1000-W0sBfIBIhsyAnfGWjpqmlJ3nvN3AvrWREerFobAQ.png", // ماسك طين برطمان
    rating: 4.7,
    reviews: 203,
    discount: 20,
    category: "العناية بالبشرة",
    brand: "غارنييه"
  },
  {
    id: 4,
    name: "زيت الوجه المغذي بالأرجان",
    price: 349,
    originalPrice: 449,
    image: "https://gomyz.com/media/catalog/product/cache/ed71e6947664464904fc81a10ba92dd4/m/o/moroccanoil_pure_argan_oil_50ml.jpg", // زيت أرجان
    rating: 4.9,
    reviews: 127,
    isNew: true,
    discount: 22,
    category: "العناية بالبشرة",
    brand: "أوليه"
  },
  {
    id: 5,
    name: "شامبو مقوي للشعر التالف",
    price: 149,
    originalPrice: 199,
    image: "https://media.zid.store/caddf466-1b7a-4155-8a9b-3495ba54d825/2109931c-a7f2-4718-a647-f8be57d3f5e7.jpg", // شامبو
    rating: 4.6,
    reviews: 178,
    discount: 25,
    category: "العناية بالشعر",
    brand: "بانتين"
  },
  {
    id: 6,
    name: "أحمر شفاه مات طويل الثبات",
    price: 99,
    originalPrice: 139,
    image: "https://images.pexels.com/photos/2536964/pexels-photo-2536964.jpeg", // روج مات
    rating: 4.5,
    reviews: 94,
    discount: 28,
    category: "المكياج",
    brand: "مايبيلين"
  },
  {
    id: 7,
    name: "ماسكارا مكثفة للرموش",
    price: 129,
    originalPrice: 179,
    image: "https://halazoon.myshopify.com/cdn/shop/products/c150a_wand_hr.jpg?v=1645555486", // ماسكارا
    rating: 4.6,
    reviews: 132,
    discount: 27,
    category: "المكياج",
    brand: "لوريال"
  },
  {
    id: 8,
    name: "عطر زهري فاخر للنساء",
    price: 499,
    originalPrice: 599,
    image: "https://cdn.salla.sa/QdWYyN/6a485c7b-ab01-49a0-ae72-c303dca31880-1000x1000-f4L0KITxHIFOrwGYwCGOYwXuZOmwnAztT3VZYga1.jpg", // زجاجة عطر
    rating: 4.8,
    reviews: 211,
    isBestseller: true,
    discount: 17,
    category: "العطور",
    brand: "ديور"
  }
];


  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    
    return matchesSearch && matchesCategory && matchesPrice && matchesBrand;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
      default:
        return b.id - a.id;
    }
  });

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <motion.div
      className="min-h-screen pt-24 px-4 lg:px-8 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-18">
          <motion.h1
            className="text-5xl font-bold text-gray-900 mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            متجر بيوتي لاب
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            اكتشف أفضل منتجات الجمال والعناية الشخصية
          </motion.p>
        </div>

        {/* Search and Controls */}
        <motion.div
          className="bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن المنتجات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
              >
                <option value="newest">الأحدث</option>
                <option value="price-low">السعر: من الأقل للأعلى</option>
                <option value="price-high">السعر: من الأعلى للأقل</option>
                <option value="rating">الأعلى تقييماً</option>
              </select>

              {/* View Mode */}
              <div className="flex bg-gray-50 rounded-2xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-emerald-500 text-white' : 'text-gray-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-emerald-500 text-white' : 'text-gray-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2 px-4 py-3 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-600 transition-colors duration-300"
              >
                <Filter className="w-5 h-5" />
                فلترة
              </button>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className={`grid gap-8 mb-16 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">لا توجد منتجات</h3>
            <p className="text-gray-600">جرب تغيير معايير البحث أو الفلترة</p>
          </motion.div>
        )}
      </div>

      {/* Filter Sidebar */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">الفلاتر</h3>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 text-gray-600 hover:text-gray-900"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">الفئات</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory('')}
                      className={`block w-full text-right p-3 rounded-xl transition-colors duration-300 ${
                        !selectedCategory ? 'bg-emerald-100 text-emerald-600' : 'hover:bg-gray-50'
                      }`}
                    >
                      جميع الفئات
                    </button>
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-right p-3 rounded-xl transition-colors duration-300 ${
                          selectedCategory === category ? 'bg-emerald-100 text-emerald-600' : 'hover:bg-gray-50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">نطاق السعر</h4>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>0 ر.س</span>
                      <span>{priceRange[1]} ر.س</span>
                    </div>
                  </div>
                </div>

                {/* Brands */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">العلامات التجارية</h4>
                  <div className="space-y-2">
                    {brands.map(brand => (
                      <label key={brand} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-xl cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => handleBrandToggle(brand)}
                          className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500"
                        />
                        <span>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setPriceRange([0, 1000]);
                    setSelectedBrands([]);
                    setSearchQuery('');
                  }}
                  className="w-full py-3 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors duration-300"
                >
                  مسح جميع الفلاتر
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ShopPage;