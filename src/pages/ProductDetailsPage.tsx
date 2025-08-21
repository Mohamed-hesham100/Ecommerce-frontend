import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ShoppingBag,
  Star,
  Share2,
  Minus,
  Plus,
  Truck,
  Shield,
} from "lucide-react";
import ProductCard from "../components/products/ProductCard";
import AddToCartModal from "../components/ui/AddToCartModal";
import { useCartStore } from "../store/cartStore";
import { useLanguage } from "../Providers/LanguageProvider";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);
  const { addItem } = useCartStore();

  // Mock product data
  const product = {
    id: parseInt(id || "1"),
    name: "سيروم فيتامين سي المضاد للأكسدة",
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.8,
    reviews: 156,
    inStock: true,
    images: [
      "https://aldawaaegy.com/cdn/shop/files/454815932_122103307784461917_3051572272904945603_n.jpg?v=1742728259",
      "https://www.laroche-posay.me/-/media/project/loreal/brand-sites/lrp/apac/mena/products/redermic/c10/la-roche-posay-productpage-anti-aging-pure-vitamin-c10-30ml-3337875660570-open.jpg",
      "https://m.media-amazon.com/images/I/81z3gbwMywL._UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/6112iWPMgOL._UF894,1000_QL80_.jpg",
    ],
    description:
      "سيروم مركز بفيتامين سي يساعد على توحيد لون البشرة وإشراقها. يحتوي على مضادات الأكسدة القوية التي تحارب علامات التقدم في السن وتحمي البشرة من العوامل البيئية الضارة.",
    ingredients: [
      "فيتامين سي (20%)",
      "حمض الهيالورونيك",
      "فيتامين E",
      "مستخلص الشاي الأخضر",
      "النياسيناميد",
    ],
    howToUse: [
      "نظف وجهك جيداً",
      "ضع 2-3 قطرات من السيروم على الوجه والرقبة",
      "دلك بلطف حتى الامتصاص الكامل",
      "استخدم واقي الشمس في النهار",
      "يُستخدم مرة أو مرتين يومياً",
    ],
    benefits: [
      "يوحد لون البشرة",
      "يقلل من التصبغات",
      "يحارب علامات التقدم في السن",
      "يرطب البشرة بعمق",
      "يحمي من الجذور الحرة",
    ],
  };

  const reviews = [
    {
      id: 1,
      name: "سارة أحمد",
      rating: 5,
      comment: "منتج رائع! لاحظت تحسن في بشرتي خلال أسبوعين من الاستخدام",
      date: "2024-01-15",
      verified: true,
    },
    {
      id: 2,
      name: "فاطمة محمد",
      rating: 4,
      comment: "جودة ممتازة وسعر مناسب. أنصح به بشدة",
      date: "2024-01-10",
      verified: true,
    },
    {
      id: 3,
      name: "نورا خالد",
      rating: 5,
      comment: "أفضل سيروم استخدمته! بشرتي أصبحت أكثر إشراقاً",
      date: "2024-01-05",
      verified: true,
    },
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "سيروم فيتامين C لتفتيح البشرة",
      price: 299,
      originalPrice: 399,
      image:
        "https://sadaalomma.com/wp-content/uploads/2023/02/%D8%B3%D9%8A%D8%B1%D9%88%D9%85-%D9%81%D9%8A%D8%AA%D8%A7%D9%85%D9%8A%D9%86-%D8%B3%D9%8A-%D9%84%D9%84%D9%88%D8%AC%D9%87.jpg",
      rating: 4.8,
      reviews: 320,
      isBestseller: true,
      discount: 25,
    },
    {
      id: 2,
      name: "سيروم الهيالورونيك للترطيب العميق",
      price: 249,
      originalPrice: 329,
      image:
        "https://m.media-amazon.com/images/I/41hkC+KSMwL._UF350,350_QL80_.jpg",
      rating: 4.7,
      reviews: 210,
      discount: 24,
    },
    {
      id: 3,
      name: "سيروم الريتينول لمكافحة التجاعيد",
      price: 399,
      originalPrice: 499,
      image:
        "https://i0.wp.com/ashrybeauty.com/wp-content/uploads/2024/07/71hL52NbVnL._AC_SL1245_.jpg",
      rating: 4.9,
      reviews: 185,
      isNew: true,
      discount: 20,
    },
    {
      id: 4,
      name: "سيروم النياسيناميد لتقليل المسام",
      price: 229,
      originalPrice: 299,
      image:
        "https://cdn.salla.sa/nGgdb/f12e2e25-00cb-47d2-87e1-aea762c6296e-1000x1000-8FqFpiiDKERmBYoXNCmNQWkHBJo1L8q8T8SrNOHF.png",
      rating: 4.6,
      reviews: 145,
      discount: 23,
    },
    {
      id: 5,
      name: "سيروم الكولاجين لشد البشرة",
      price: 349,
      originalPrice: 459,
      image:
        "https://media.taager.com/81f7f277-913c-49c7-8be0-c68dbedbdc96.jpg",
      rating: 4.8,
      reviews: 276,
      isBestseller: true,
      discount: 24,
    },
    {
      id: 6,
      name: "سيروم الأرجان المغذي للبشرة",
      price: 279,
      originalPrice: 359,
      image:
        "https://media.zid.store/d2cf4355-9148-4b03-b46e-74344b410d7f/89bdef60-ab4a-49cf-81e3-7d3c4ac04048.webp",
      rating: 4.7,
      reviews: 198,
      discount: 22,
    },
  ];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowAddToCartModal(true);
  };

  const handleConfirmAddToCart = () => {
    addItem({ ...product, image: product.images[selectedImage], quantity });
    setShowAddToCartModal(false);
  };

  return (
    <motion.div
      className="min-h-screen pt-24 px-4 lg:px-8 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <motion.div
            className="space-y-6"
            initial={{ x: language === "ar" ? 50 : -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {product.discount && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                  -{product.discount}%
                </div>
              )}
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 flex-row-reverse">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? "border-emerald-500 shadow-lg"
                      : "border-gray-200 hover:border-emerald-300"
                  }`}
                  aria-label={`${
                    language === "ar" ? "اختيار الصورة" : "Select image"
                  } ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            className="space-y-6"
            initial={{ x: language === "ar" ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-amber-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg text-gray-600">
                  {product.rating} ({product.reviews}{" "}
                  {language === "ar" ? "تقييم" : "reviews"})
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-emerald-600">
                {product.price} {language === "ar" ? "ر.س" : "SAR"}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-400 line-through">
                  {product.originalPrice} {language === "ar" ? "ر.س" : "SAR"}
                </span>
              )}
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold">
                  {language === "ar" ? "الكمية:" : "Quantity:"}
                </span>
                <div className="flex items-center bg-gray-100 rounded-2xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-200 rounded-r-2xl transition-colors duration-300"
                    aria-label={
                      language === "ar" ? "تقليل الكمية" : "Decrease quantity"
                    }
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="px-6 py-3 font-semibold text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-200 rounded-l-2xl transition-colors duration-300"
                    aria-label={
                      language === "ar" ? "زيادة الكمية" : "Increase quantity"
                    }
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex gap-4 flex-row-reverse">
                <motion.button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={
                    language === "ar" ? "إضافة إلى السلة" : "Add to cart"
                  }
                >
                  <ShoppingBag className="w-6 h-6" />
                  {language === "ar" ? "أضف للسلة" : "Add to Cart"}
                </motion.button>

                <motion.button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                    isWishlisted
                      ? "bg-red-500 border-red-500 text-white"
                      : "bg-white border-gray-200 text-gray-700 hover:border-red-300 hover:text-red-500"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={
                    language === "ar" ? "إضافة إلى المفضلة" : "Add to wishlist"
                  }
                >
                  <Heart
                    className={`w-6 h-6 ${isWishlisted ? "fill-current" : ""}`}
                  />
                </motion.button>

                <motion.button
                  className="p-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl hover:border-emerald-300 hover:text-emerald-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={
                    language === "ar" ? "مشاركة المنتج" : "Share product"
                  }
                >
                  <Share2 className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {language === "ar" ? "توصيل سريع" : "Fast Delivery"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === "ar" ? "خلال 24 ساعة" : "Within 24 hours"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {language === "ar" ? "ضمان الجودة" : "Quality Guarantee"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === "ar" ? "منتجات أصلية" : "Authentic Products"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {language === "ar" ? "إرجاع مجاني" : "Free Returns"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === "ar" ? "خلال 30 يوم" : "Within 30 days"}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg shadow-gray-200/50 overflow-hidden mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex border-b border-gray-200 flex-row-reverse">
            {[
              {
                id: "details",
                label: language === "ar" ? "التفاصيل" : "Details",
              },
              {
                id: "ingredients",
                label: language === "ar" ? "المكونات" : "Ingredients",
              },
              {
                id: "usage",
                label: language === "ar" ? "طريقة الاستخدام" : "How to Use",
              },
              {
                id: "reviews",
                label: language === "ar" ? "التقييمات" : "Reviews",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-6 font-semibold text-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50"
                    : "text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
                }`}
                aria-label={tab.label}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-8">
            <AnimatePresence mode="wait">
              {activeTab === "details" && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {language === "ar" ? "تفاصيل المنتج" : "Product Details"}
                  </h3>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {product.description}
                    </p>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        {language === "ar" ? "الفوائد:" : "Benefits:"}
                      </h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "ingredients" && (
                <motion.div
                  key="ingredients"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {language === "ar"
                      ? "المكونات الفعالة"
                      : "Active Ingredients"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl"
                      >
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-800 font-medium">
                          {ingredient}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "usage" && (
                <motion.div
                  key="usage"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {language === "ar" ? "طريقة الاستخدام" : "How to Use"}
                  </h3>
                  <div className="space-y-4">
                    {product.howToUse.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl"
                      >
                        <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-gray-800 text-lg">{step}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "reviews" && (
                <motion.div
                  key="reviews"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {language === "ar" ? "التقييمات" : "Reviews"}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(product.rating)
                                ? "text-amber-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-lg font-semibold">
                        {product.rating}
                      </span>
                      <span className="text-gray-600">
                        ({product.reviews}{" "}
                        {language === "ar" ? "تقييم" : "reviews"})
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="p-6 bg-gray-50 rounded-2xl"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">
                                {review.name}
                              </div>
                              {review.verified && (
                                <div className="text-sm text-emerald-600">
                                  {language === "ar"
                                    ? "مشتري موثق"
                                    : "Verified Buyer"}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? "text-amber-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">
                              {review.date}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Related Products */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center ">
            {language === "ar" ? "منتجات ذات صلة" : "Related Products"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {relatedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AddToCartModal
        isOpen={showAddToCartModal}
        onClose={() => setShowAddToCartModal(false)}
        product={{ ...product, image: product.images[selectedImage] }}
        onAddToCart={handleConfirmAddToCart}
        quantity={quantity}
      />
    </motion.div>
  );
};

export default ProductDetailsPage;
