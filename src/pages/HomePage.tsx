import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  Star,
  Sparkles,
  Heart,
  Award,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../Providers/LanguageProvider";
import { useTheme } from "../Providers/ThemeProvider";
import ProductCard from "../components/products/ProductCard";
import CategoryCard from "../components/ui/CategoryCard";
import TestimonialCard from "../components/ui/TestimonialCard";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // GSAP animations
    const sections = sectionsRef.current;

    sections.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name:
        language === "ar"
          ? "سيروم فيتامين سي المضاد للأكسدة"
          : "Vitamin C Antioxidant Serum",
      price: 299,
      originalPrice: 399,
      image:
        "https://mumuso.jo/cdn/shop/files/vitamin-c-serum-mumuso-1-1.webp?v=1719406855", // زجاجة سيروم قطارة واضحة
      rating: 4.8,
      reviews: 156,
      isNew: true,
      discount: 25,
    },
    {
      id: 2,
      name:
        language === "ar"
          ? "كريم الترطيب المكثف للبشرة الجافة"
          : "Intensive Moisturizing Cream",
      price: 189,
      originalPrice: 249,
      image:
        "https://matjrah.online/images/1356/image/cache/catalog/1726587730024-IMG_4051-550x550.webp", // علبة كريم ترطيب مفتوحة
      rating: 4.9,
      reviews: 89,
      isBestseller: true,
      discount: 24,
    },
    {
      id: 3,
      name:
        language === "ar"
          ? "ماسك الطين المنقي للبشرة الدهنية"
          : "Purifying Clay Mask",
      price: 159,
      originalPrice: 199,
      image:
        "https://ixoraworld.com/cdn/shop/files/PurifyingBalancingClayFaceMask.jpg?v=1732356193&width=1200", // ماسك طين في برطمان
      rating: 4.7,
      reviews: 203,
      discount: 20,
    },
    {
      id: 4,
      name:
        language === "ar"
          ? "زيت الوجه المغذي بالأرجان"
          : "Nourishing Argan Face Oil",
      price: 349,
      originalPrice: 449,
      image:
        "https://emofly.b-cdn.net/hbd_exvhac6ayb3ZKT/width:1080/plain/https://storage.googleapis.com/takeapp/media/cm1xqs1kj00030dl9derzambo.jpeg", // زيت أرجان في زجاجة قطارة
      rating: 4.9,
      reviews: 127,
      isNew: true,
      discount: 22,
    },
    {
      id: 5,
      name: language === "ar" ? "عطر زهري فاخر" : "Luxury Floral Perfume",
      price: 499,
      originalPrice: 599,
      image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg", // زجاجة عطر أنيقة
      rating: 4.8,
      reviews: 211,
      isBestseller: true,
      discount: 17,
    },
    {
      id: 6,
      name: language === "ar" ? "مجموعة مكياج متكاملة" : "Complete Makeup Kit",
      price: 599,
      originalPrice: 749,
      image:
        "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg", // مجموعة مكياج (روج + فرش + بودرة)
      rating: 4.9,
      reviews: 342,
      isNew: true,
      discount: 20,
    },
    {
      id: 7,
      name:
        language === "ar"
          ? "شامبو علاجي لتقوية الشعر"
          : "Strengthening Hair Shampoo",
      price: 149,
      originalPrice: 199,
      image:
        "https://cdn.shantaweb.com/thumbnails/big/products_1726353308_1798.png", // شامبو بزجاجة واضحة
      rating: 4.6,
      reviews: 178,
      discount: 25,
    },
    {
      id: 8,
      name: language === "ar" ? "واقي شمس بعامل حماية 50" : "SPF 50 Sunscreen",
      price: 229,
      originalPrice: 289,
      image:
        "https://cdn.salla.sa/mZgoW/G6dQbf5SzuceJdmrvowgXAAutisH6fGwaqwZjHRv.png", // واقي شمس في أنبوب واضح
      rating: 4.7,
      reviews: 195,
      isNew: true,
      discount: 21,
    },
  ];

  const categories = [
    {
      name: language === "ar" ? "العناية بالبشرة" : "Skincare",
      count: 245,
      image:
        "https://images.pexels.com/photos/3764016/pexels-photo-3764016.jpeg",
    },
    {
      name: language === "ar" ? "العناية بالشعر" : "Hair Care",
      count: 189,
      image:
        "https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg",
    },
    {
      name: language === "ar" ? "المكياج" : "Makeup",
      count: 156,
      image:
        "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg",
    },
    {
      name: language === "ar" ? "العطور" : "Fragrances",
      count: 98,
      image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
    },
  ];

  const testimonials = [
    {
      name: language === "ar" ? "سارة أحمد" : "Sarah Ahmed",
      location: language === "ar" ? "الرياض" : "Riyadh",
      rating: 5,
      comment:
        language === "ar"
          ? "منتجات رائعة وخدمة عملاء ممتازة. تسوقت من هنا عدة مرات وكنت راضية دائماً"
          : "Amazing products and excellent customer service. I have shopped here several times and was always satisfied",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
    {
      name: language === "ar" ? "فاطمة محمد" : "Fatima Mohammed",
      location: language === "ar" ? "جدة" : "Jeddah",
      rating: 5,
      comment:
        language === "ar"
          ? "أفضل موقع للتسوق الإلكتروني. المنتجات أصلية والأسعار منافسة جداً"
          : "Best e-commerce website. Original products and very competitive prices",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      name: language === "ar" ? "نورا خالد" : "Nora Khalid",
      location: language === "ar" ? "الدمام" : "Dammam",
      rating: 5,
      comment:
        language === "ar"
          ? "سرعة في التوصيل وتغليف احترافي. أنصح كل الفتيات بالتسوق من هنا"
          : "Fast delivery and professional packaging. I recommend all girls to shop here",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative min-h-screen overflow-hidden ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30"
        }`}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div
            className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl ${
              isDark
                ? "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
                : "bg-gradient-to-br from-emerald-200/20 to-teal-200/20"
            }`}
          ></div>
          <div
            className={`absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl ${
              isDark
                ? "bg-gradient-to-br from-amber-500/10 to-orange-500/10"
                : "bg-gradient-to-br from-amber-200/15 to-orange-200/15"
            }`}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            {/* Content */}
            <div
              className={`${
                language === "ar" ? "lg:order-1" : "lg:order-1"
              } space-y-8`}
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border border-emerald-100/50"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                    delay: 0.5,
                  }}
                >
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">
                    {language === "ar"
                      ? "منصة الجمال الذكية"
                      : "Smart Beauty Platform"}
                  </span>
                </motion.div>

                {/* Main Title */}
                <div>
                  <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                      {t("hero.title")}
                    </span>
                  </h1>

                  <p className="text-2xl lg:text-3xl text-gray-700 mb-6 leading-relaxed font-medium">
                    {t("hero.subtitle")}
                  </p>

                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    {t("hero.description")}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <Link
                    to="/shop"
                    className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xl rounded-3xl shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                  >
                    {t("hero.shopNow")}
                    <ArrowLeft
                      className={`${
                        language === "ar" ? "mr-3" : "ml-3"
                      } w-6 h-6 group-hover:${
                        language === "ar" ? "translate-x-1" : "-translate-x-1"
                      } transition-transform duration-300`}
                    />
                  </Link>

                  <Link
                    to="/ai-assistant"
                    className="group inline-flex items-center justify-center px-10 py-5 bg-white/90 backdrop-blur-sm text-emerald-600 font-bold text-xl rounded-3xl border-2 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-xl"
                  >
                    {t("hero.aiSkinTest")}
                    <Sparkles
                      className={`${
                        language === "ar" ? "mr-3" : "ml-3"
                      } w-6 h-6 group-hover:rotate-12 transition-transform duration-300`}
                    />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Hero Image */}
            <div
              className={`${
                language === "ar" ? "lg:order-2" : "lg:order-2"
              } relative`}
            >
              <motion.div
                className="relative h-[700px] w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {/* Main Hero Image */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl mt-16">
                  <img
                    src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg"
                    alt="Beauty Products"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Floating Cards */}
                <motion.div
                  className="absolute top-20 right-8 bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/50"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        4.9/5
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {language === "ar"
                          ? "تقييم العملاء"
                          : "Customer Rating"}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/50"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        50K+
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {language === "ar" ? "عميل سعيد" : "Happy Customers"}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 right-4 bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/50"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        {language === "ar" ? "الأفضل" : "Best Choice"}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        2024
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="py-24 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {language === "ar"
                ? "اكتشف مجموعاتنا المميزة"
                : "Discover Our Premium Collections"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {language === "ar"
                ? "تصفح أحدث مجموعاتنا من منتجات العناية والجمال المتنوعة"
                : "Browse our latest collections of diverse beauty and skincare products"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {language === "ar" ? "الأكثر مبيعاً" : "Best Sellers"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {language === "ar"
                ? "اكتشف المنتجات الأكثر حباً من عملائنا"
                : "Discover the most loved products by our customers"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/shop"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              {language === "ar" ? "عرض جميع المنتجات" : "View All Products"}
              <ArrowLeft
                className={`${language === "ar" ? "mr-3" : "ml-3"} w-5 h-5`}
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI Skin Quiz Section */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="py-24 bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-5xl lg:text-6xl font-bold mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {language === "ar"
                ? "اكتشف نوع بشرتك"
                : "Discover Your Skin Type"}
            </motion.h2>

            <motion.p
              className="text-2xl text-white/90 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {language === "ar"
                ? "باستخدام الذكاء الاصطناعي، احصل على توصيات شخصية لأفضل المنتجات لبشرتك"
                : "Using AI technology, get personalized recommendations for the best products for your skin"}
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {language === "ar" ? "تحليل ذكي" : "Smart Analysis"}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {language === "ar"
                    ? "تحليل شامل لنوع بشرتك باستخدام أحدث تقنيات الذكاء الاصطناعي"
                    : "Comprehensive analysis of your skin type using the latest AI technology"}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {language === "ar"
                    ? "توصيات مخصصة"
                    : "Personalized Recommendations"}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {language === "ar"
                    ? "منتجات مختارة خصيصاً لنوع بشرتك واحتياجاتك الخاصة"
                    : "Products specially selected for your skin type and specific needs"}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {language === "ar" ? "نتائج مضمونة" : "Guaranteed Results"}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {language === "ar"
                    ? "احصل على أفضل النتائج مع روتين العناية المثالي لبشرتك"
                    : "Get the best results with the perfect skincare routine for your skin"}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link
                to="/ai-assistant"
                className="inline-flex items-center px-10 py-5 bg-white text-emerald-600 font-bold text-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              >
                {t("hero.aiSkinTest")}
                <ArrowLeft
                  className={`${language === "ar" ? "mr-3" : "ml-3"} w-6 h-6`}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="py-24 bg-gradient-to-br from-white to-gray-50"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {language === "ar"
                ? "ماذا يقول عملاؤنا"
                : "What Our Customers Say"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {language === "ar"
                ? "آراء حقيقية من عملائنا الكرام حول تجربتهم معنا"
                : "Real opinions from our valued customers about their experience with us"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
