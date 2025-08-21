import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'جميع الأسئلة', count: 24 },
    { id: 'orders', name: 'الطلبات والشحن', count: 8 },
    { id: 'products', name: 'المنتجات', count: 6 },
    { id: 'account', name: 'الحساب', count: 4 },
    { id: 'payment', name: 'الدفع', count: 3 },
    { id: 'returns', name: 'الإرجاع والاستبدال', count: 3 }
  ];

  const faqs = [
    {
      id: 1,
      category: 'orders',
      question: 'كم يستغرق توصيل الطلب؟',
      answer: 'يتم توصيل الطلبات خلال 24-48 ساعة داخل الرياض، و2-3 أيام عمل للمدن الأخرى. نوفر أيضاً خدمة التوصيل السريع في نفس اليوم للطلبات المؤكدة قبل الساعة 12 ظهراً.'
    },
    {
      id: 2,
      category: 'orders',
      question: 'هل يمكنني تتبع طلبي؟',
      answer: 'نعم، يمكنك تتبع طلبك من خلال حسابك على الموقع أو عبر رسالة SMS التي ستصلك تحتوي على رقم التتبع. كما يمكنك التواصل مع خدمة العملاء للاستفسار عن حالة طلبك.'
    },
    {
      id: 3,
      category: 'orders',
      question: 'ما هي تكلفة الشحن؟',
      answer: 'الشحن مجاني للطلبات التي تزيد عن 200 ريال سعودي. للطلبات الأقل من ذلك، تكلفة الشحن 25 ريال داخل الرياض و35 ريال للمدن الأخرى.'
    },
    {
      id: 4,
      category: 'products',
      question: 'هل المنتجات أصلية؟',
      answer: 'نعم، جميع منتجاتنا أصلية 100% ومستوردة مباشرة من الموزعين المعتمدين. نقدم ضمان الأصالة على جميع المنتجات ويمكنك التحقق من أصالة المنتج عبر الرموز الموجودة على العبوة.'
    },
    {
      id: 5,
      category: 'products',
      question: 'كيف أختار المنتج المناسب لبشرتي؟',
      answer: 'يمكنك استخدام مساعدنا الذكي لتحليل نوع بشرتك والحصول على توصيات شخصية. كما يمكنك قراءة وصف المنتج ومراجعات العملاء أو التواصل مع فريق خدمة العملاء للحصول على استشارة مجانية.'
    },
    {
      id: 6,
      category: 'products',
      question: 'هل يمكنني الحصول على عينات مجانية؟',
      answer: 'نعم، نقدم عينات مجانية لبعض المنتجات مع كل طلب. كما يمكنك طلب عينات محددة عند التواصل مع خدمة العملاء، وسنحرص على إرفاقها مع طلبك القادم.'
    },
    {
      id: 7,
      category: 'account',
      question: 'كيف أنشئ حساب جديد؟',
      answer: 'يمكنك إنشاء حساب جديد بالنقر على "تسجيل" في أعلى الصفحة وإدخال بياناتك الأساسية. كما يمكنك التسجيل باستخدام حسابك في جوجل أو أبل للحصول على تجربة أسرع.'
    },
    {
      id: 8,
      category: 'account',
      question: 'نسيت كلمة المرور، ماذا أفعل؟',
      answer: 'انقر على "نسيت كلمة المرور" في صفحة تسجيل الدخول وأدخل بريدك الإلكتروني. ستصلك رسالة تحتوي على رابط لإعادة تعيين كلمة المرور. تأكد من فحص مجلد الرسائل غير المرغوب فيها.'
    },
    {
      id: 9,
      category: 'payment',
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نقبل البطاقات الائتمانية (فيزا، ماستركارد)، مدى، Apple Pay، STC Pay، والدفع عند الاستلام. جميع المعاملات آمنة ومشفرة باستخدام أحدث تقنيات الأمان.'
    },
    {
      id: 10,
      category: 'payment',
      question: 'هل الدفع آمن؟',
      answer: 'نعم، نستخدم أحدث تقنيات التشفير وبروتوكولات الأمان لحماية بياناتك المالية. موقعنا محمي بشهادة SSL ونتعامل مع بوابات دفع معتمدة ومرخصة من البنك المركزي السعودي.'
    },
    {
      id: 11,
      category: 'returns',
      question: 'ما هي سياسة الإرجاع؟',
      answer: 'يمكنك إرجاع المنتجات خلال 30 يوم من تاريخ الاستلام بشرط أن تكون في حالتها الأصلية وغير مستخدمة. المنتجات الشخصية مثل أحمر الشفاه والماسكارا لا يمكن إرجاعها لأسباب صحية.'
    },
    {
      id: 12,
      category: 'returns',
      question: 'كيف أقوم بإرجاع منتج؟',
      answer: 'تواصل مع خدمة العملاء عبر الهاتف أو البريد الإلكتروني لطلب إرجاع المنتج. سنرسل لك تعليمات الإرجاع ورقم الشحن. تكلفة الإرجاع مجانية إذا كان المنتج معيب أو مختلف عن الوصف.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
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
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            إجابات سريعة لأكثر الأسئلة شيوعاً حول منتجاتنا وخدماتنا
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
              placeholder="ابحث في الأسئلة..."
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

        {/* FAQ Items */}
        <motion.div
          className="space-y-4 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence>
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-white rounded-3xl shadow-lg shadow-gray-200/50 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-8 text-right hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between"
                >
                  <h3 className="text-xl font-bold text-gray-900 flex-1">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-emerald-600" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <div className="w-full h-px bg-gray-200 mb-6"></div>
                        <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredFAQs.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">لا توجد نتائج</h3>
              <p className="text-gray-600">جرب تغيير كلمات البحث أو الفئة</p>
            </motion.div>
          )}
        </motion.div>

        {/* Contact Support */}
        <motion.div
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-12 text-white text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-4xl font-bold mb-6">لم تجد إجابة لسؤالك؟</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            فريق خدمة العملاء متاح لمساعدتك في أي وقت
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.a
              href="tel:+966501234567"
              className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="font-bold">اتصل بنا</div>
                <div className="text-white/80">+966 50 123 4567</div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:support@beautylab.sa"
              className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="font-bold">راسلنا</div>
                <div className="text-white/80">support@beautylab.sa</div>
              </div>
            </motion.a>

            <motion.button
              className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="font-bold">دردشة مباشرة</div>
                <div className="text-white/80">متاح الآن</div>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQPage;