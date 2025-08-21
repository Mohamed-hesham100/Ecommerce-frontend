import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Search,
  ChevronDown,
  CheckCircle,
  Info,
  Zap,
  Users,
  FileText,
  Video,
  BookOpen,
  Headphones,
} from "lucide-react";

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [ticketForm, setTicketForm] = useState({
    name: "",
    email: "",
    subject: "",
    priority: "medium",
    description: "",
  });

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "دردشة مباشرة",
      description: "تحدث مع فريق الدعم فوراً",
      availability: "متاح الآن",
      responseTime: "فوري",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Phone,
      title: "الهاتف",
      description: "اتصل بنا مباشرة",
      availability: "9:00 - 18:00",
      responseTime: "فوري",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      description: "أرسل استفسارك بالتفصيل",
      availability: "24/7",
      responseTime: "2-4 ساعات",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FileText,
      title: "تذكرة دعم",
      description: "أنشئ تذكرة لمتابعة مشكلتك",
      availability: "24/7",
      responseTime: "24 ساعة",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const helpCategories = [
    { id: "all", name: "جميع المواضيع", icon: HelpCircle, count: 45 },
    { id: "orders", name: "الطلبات والشحن", icon: FileText, count: 15 },
    { id: "account", name: "الحساب والملف الشخصي", icon: Users, count: 8 },
    { id: "payment", name: "الدفع والفوترة", icon: CheckCircle, count: 7 },
    { id: "products", name: "المنتجات والجودة", icon: Info, count: 10 },
    { id: "technical", name: "المشاكل التقنية", icon: Zap, count: 5 },
  ];

  const faqs = [
    {
      id: 1,
      category: "orders",
      question: "كيف يمكنني تتبع طلبي؟",
      answer:
        'يمكنك تتبع طلبك من خلال الدخول إلى حسابك والنقر على "طلباتي". ستجد رقم التتبع ورابط مباشر لتتبع الشحنة. كما يمكنك استخدام رقم التتبع المرسل في رسالة SMS.',
    },
    {
      id: 2,
      category: "orders",
      question: "ما هي مدة التوصيل؟",
      answer:
        "التوصيل داخل الرياض: 24-48 ساعة. المدن الأخرى: 2-3 أيام عمل. نوفر أيضاً خدمة التوصيل السريع في نفس اليوم للطلبات المؤكدة قبل الساعة 12 ظهراً.",
    },
    {
      id: 3,
      category: "payment",
      question: "ما هي طرق الدفع المتاحة؟",
      answer:
        "نقبل جميع البطاقات الائتمانية (فيزا، ماستركارد)، مدى، Apple Pay، STC Pay، والدفع عند الاستلام. جميع المعاملات آمنة ومشفرة.",
    },
    {
      id: 4,
      category: "account",
      question: "كيف أغير كلمة المرور؟",
      answer:
        'ادخل إلى حسابك، انقر على "الإعدادات"، ثم "تغيير كلمة المرور". أدخل كلمة المرور الحالية والجديدة، ثم انقر "حفظ". ستصلك رسالة تأكيد عبر البريد الإلكتروني.',
    },
    {
      id: 5,
      category: "products",
      question: "هل المنتجات أصلية؟",
      answer:
        "نعم، جميع منتجاتنا أصلية 100% ومستوردة مباشرة من الموزعين المعتمدين. نقدم ضمان الأصالة ويمكنك التحقق من الرموز الموجودة على العبوة.",
    },
    {
      id: 6,
      category: "technical",
      question: "الموقع لا يعمل بشكل صحيح، ماذا أفعل؟",
      answer:
        "جرب تحديث الصفحة أو مسح ذاكرة التخزين المؤقت للمتصفح. إذا استمرت المشكلة، تواصل معنا عبر الدردشة المباشرة أو الهاتف وسنساعدك فوراً.",
    },
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "دليل المستخدم",
      description: "دليل شامل لاستخدام الموقع وميزاته",
      link: "#",
    },
    {
      icon: Video,
      title: "فيديوهات تعليمية",
      description: "شروحات مرئية لأهم الميزات",
      link: "#",
    },
    {
      icon: FileText,
      title: "المقالات المفيدة",
      description: "نصائح وإرشادات مفصلة",
      link: "#",
    },
    {
      icon: Headphones,
      title: "البودكاست",
      description: "حلقات صوتية عن الجمال والعناية",
      link: "#",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    console.log("Support ticket submitted:", ticketForm);
    // Handle form submission
  };

  const handleInputChange = (field, value) => {
    setTicketForm((prev) => ({ ...prev, [field]: value }));
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
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            مركز المساعدة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك! ابحث عن الإجابات أو تواصل مع فريق الدعم للحصول على
            المساعدة الفورية
          </p>
        </motion.div>

        {/* Quick Search */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="ابحث عن إجابة لسؤالك..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-6 pr-16 py-6 text-xl bg-gray-50 rounded-3xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {helpCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30"
                    : "bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Support Channels */}
        <motion.div
          className="mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            طرق التواصل
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 text-center cursor-pointer"
                whileHover={{ y: -8 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-3xl flex items-center justify-center mx-auto mb-6`}
                >
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {channel.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {channel.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-emerald-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      {channel.availability}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    وقت الاستجابة: {channel.responseTime}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                الأسئلة الشائعة
              </h2>

              <div className="space-y-4">
                <AnimatePresence>
                  {filteredFAQs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      className="border border-gray-200 rounded-2xl overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      layout
                    >
                      <button
                        onClick={() =>
                          setOpenFAQ(openFAQ === faq.id ? null : faq.id)
                        }
                        className="w-full p-6 text-right hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between"
                      >
                        <h3 className="text-lg font-bold text-gray-900 flex-1">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-emerald-600" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {openFAQ === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              <div className="w-full h-px bg-gray-200 mb-4"></div>
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {filteredFAQs.length === 0 && (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      لا توجد نتائج
                    </h3>
                    <p className="text-gray-600">
                      جرب تغيير كلمات البحث أو الفئة
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Support Ticket Form */}
          <div>
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 mb-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                إنشاء تذكرة دعم
              </h2>

              <form onSubmit={handleTicketSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    value={ticketForm.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    placeholder="اسمك الكامل"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    value={ticketForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    الموضوع
                  </label>
                  <input
                    type="text"
                    value={ticketForm.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    placeholder="موضوع المشكلة"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    الأولوية
                  </label>
                  <select
                    value={ticketForm.priority}
                    onChange={(e) =>
                      handleInputChange("priority", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  >
                    <option value="low">منخفضة</option>
                    <option value="medium">متوسطة</option>
                    <option value="high">عالية</option>
                    <option value="urgent">عاجلة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    وصف المشكلة
                  </label>
                  <textarea
                    value={ticketForm.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300 resize-none"
                    placeholder="اشرح المشكلة بالتفصيل..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  إرسال التذكرة
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Contact Information */}
        <motion.div
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-12 text-white text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-4xl font-bold mb-6">تحتاج مساعدة فورية؟</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            فريق الدعم متاح 24/7 لمساعدتك في حل أي مشكلة أو الإجابة على
            استفساراتك
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

export default SupportPage;
