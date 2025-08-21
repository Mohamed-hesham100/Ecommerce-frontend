import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, ArrowLeft, Play, BookOpen, Heart, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'جميع المقالات', count: 24 },
    { id: 'skincare', name: 'العناية بالبشرة', count: 12 },
    { id: 'haircare', name: 'العناية بالشعر', count: 8 },
    { id: 'makeup', name: 'المكياج', count: 6 },
    { id: 'wellness', name: 'الصحة والعافية', count: 4 },
    { id: 'tips', name: 'نصائح وإرشادات', count: 10 }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: 'دليل شامل للعناية بالبشرة في الصيف',
      excerpt: 'اكتشف أفضل الطرق لحماية بشرتك من أشعة الشمس والحفاظ على نضارتها خلال فصل الصيف',
      image: 'https://static.sayidaty.net/styles/600x380/public/2024-04/341016.jpg.webp',
      category: 'العناية بالبشرة',
      author: 'د. سارة أحمد',
      date: '2024-01-20',
      readTime: '5 دقائق',
      isVideo: false,
      featured: true
    },
    {
      id: 2,
      title: 'أسرار الحصول على شعر صحي ولامع',
      excerpt: 'تعرف على أفضل المنتجات والطرق الطبيعية للعناية بالشعر وإعطائه اللمعان المطلوب',
      image: 'https://img.youm7.com/ArticleImgs/2022/8/27/120916-%D8%B4%D8%B9%D8%B1-%D8%B5%D8%AD%D9%89.jpg',
      category: 'العناية بالشعر',
      author: 'نورا خالد',
      date: '2024-01-18',
      readTime: '7 دقائق',
      isVideo: true,
      featured: true
    }
  ];

  const articles = [
    {
      id: 3,
      title: 'كيفية اختيار كريم الأساس المناسب لنوع بشرتك',
      excerpt: 'دليل مفصل لاختيار كريم الأساس المثالي حسب نوع البشرة ودرجة اللون',
      image: 'https://farashti.com/wp-content/uploads/2022/12/foundation.jpg',
      category: 'المكياج',
      author: 'فاطمة محمد',
      date: '2024-01-15',
      readTime: '4 دقائق',
      isVideo: false
    },
    {
      id: 4,
      title: 'فوائد الزيوت الطبيعية للبشرة والشعر',
      excerpt: 'اكتشف فوائد الزيوت الطبيعية المختلفة وكيفية استخدامها في روتين العناية',
      image: 'https://cdn.salla.sa/nGgdb/d231cb22-723d-4d22-9226-42715f5d438e-1000x416-j8AZ1G5OYIFwbHPCtW4qwimNB1e62wO9UpLZLDAZ.jpg',
      category: 'الصحة والعافية',
      author: 'د. أمل سالم',
      date: '2024-01-12',
      readTime: '6 دقائق',
      isVideo: false
    },
    {
      id: 5,
      title: 'روتين العناية بالبشرة الليلي',
      excerpt: 'خطوات مهمة للعناية بالبشرة قبل النوم لضمان تجديد الخلايا والحصول على بشرة نضرة',
      image: 'https://media.zid.store/84aa064c-7428-49e0-aea4-6885089e47ef/9fdd7f79-eb7c-4fb7-9ebf-96ba426001b6.jpg',
      category: 'العناية بالبشرة',
      author: 'ريم عبدالله',
      date: '2024-01-10',
      readTime: '5 دقائق',
      isVideo: true
    },
    {
      id: 6,
      title: 'أخطاء شائعة في استخدام منتجات العناية',
      excerpt: 'تجنب هذه الأخطاء الشائعة للحصول على أفضل النتائج من منتجات العناية بالبشرة',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRaQMJrrEQQFcEVDU_-lr0hI1hvlLsh0hYyDbfvWRw9qOUJGaw_BsxhBHPUrCrJN4zZQ&usqp=CAU',
      category: 'نصائح وإرشادات',
      author: 'د. لينا حسن',
      date: '2024-01-08',
      readTime: '8 دقائق',
      isVideo: false
    },
    {
      id: 7,
      title: 'أخطاء شائعة في استخدام منتجات العناية',
      excerpt: 'تجنب هذه الأخطاء الشائعة للحصول على أفضل النتائج من منتجات العناية بالبشرة',
      image: 'https://cdn.salla.sa/PdxeVD/7eb5a4e3-80e0-43e6-a24e-cb3d2e233a7e-1000x562.22547584187-EH76aUix3aBP6Dqk5EJrrQBO2hfQVypno9kbd8L6.png',
      category: 'نصائح وإرشادات',
      author: 'د. لينا حسن',
      date: '2024-01-08',
      readTime: '8 دقائق',
      isVideo: false
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === categories.find(cat => cat.id === selectedCategory)?.name;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-6">مدونة بيوتي لاب</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            اكتشف أحدث النصائح والإرشادات في عالم الجمال والعناية الشخصية
          </p>
        </motion.div>

        {/* Search and Categories */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Articles */}
        <motion.div
          className="mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">المقالات المميزة</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {article.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">
                      مميز
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full mb-2">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-500">
                        <User className="w-4 h-4" />
                        <span className="text-sm">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <BookOpen className="w-4 h-4" />
                        <span className="text-sm">{article.readTime}</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${article.id}`}
                      className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold group-hover:translate-x-1 transition-all duration-300"
                    >
                      اقرأ المزيد
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">جميع المقالات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  layout
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    {article.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                    )}

                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {article.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="flex gap-2">
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${article.id}`}
                      className="flex items-center justify-between text-emerald-600 hover:text-emerald-700 font-semibold group-hover:translate-x-1 transition-all duration-300"
                    >
                      <span>اقرأ المقال</span>
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filteredArticles.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">لا توجد مقالات</h3>
              <p className="text-gray-600">جرب تغيير معايير البحث أو الفئة</p>
            </motion.div>
          )}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-12 text-white text-center mt-16 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-4">اشترك في النشرة الإخبارية</h3>
          <p className="text-xl text-white/90 mb-8">
            احصل على أحدث المقالات والنصائح مباشرة في بريدك الإلكتروني
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogPage;