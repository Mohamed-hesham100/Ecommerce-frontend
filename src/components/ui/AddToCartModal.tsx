import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShoppingBag,
  User,
  UserPlus,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Shield,
  Gift,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../providers/LanguageProvider";

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: { id: number; name: string; price: number; image: string };
  onAddToCart: () => void;
  quantity: number;
}

const AddToCartModal: React.FC<AddToCartModalProps> = ({
  isOpen,
  onClose,
  product,
  onAddToCart,
  quantity,
}) => {
  const { language } = useLanguage();
  const [selectedOption, setSelectedOption] = useState<"guest" | "login" | "register" | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleContinue = async () => {
    if (!selectedOption) return;
    if (selectedOption === "login" || selectedOption === "register") {
      navigate("/auth");
      onClose();
      return;
    }
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    onAddToCart();
    setIsProcessing(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden z-10"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  {language === "ar" ? "إضافة للسلة" : "Add to Cart"}
                </h3>
                <p className="text-white/80 text-sm">
                  {language === "ar" ? "اختر طريقة المتابعة" : "Choose how to continue"}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label={language === "ar" ? "إغلاق" : "Close"}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-14 h-14 object-cover rounded-2xl shadow-lg"
            />
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 text-sm line-clamp-2 mb-1">
                {product.name}
              </h4>
              <p className="text-xl font-bold text-emerald-600">
                {product.price} {language === "ar" ? "ر.س" : "SAR"} × {quantity}
              </p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
            {language === "ar" ? "كيف تريد المتابعة؟" : "How would you like to continue?"}
          </h4>
          <div className="space-y-3">
            <motion.button
              onClick={() => setSelectedOption("guest")}
              className={`w-full p-3 rounded-2xl border-2 transition-all duration-300 ${
                selectedOption === "guest"
                  ? "border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-500/20"
                  : "border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={language === "ar" ? "متابعة كزائر" : "Continue as guest"}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    selectedOption === "guest"
                      ? "bg-emerald-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <User className="w-5 h-5" />
                </div>
                <div className={`flex-1 text-${language === "ar" ? "right" : "left"}`}>
                  <div className="font-bold text-gray-900 mb-0.5">
                    {language === "ar" ? "متابعة كزائر" : "Continue as Guest"}
                  </div>
                  <div className="text-gray-600 text-xs">
                    {language === "ar" ? "تسوق بدون إنشاء حساب" : "Shop without creating an account"}
                  </div>
                </div>
                {selectedOption === "guest" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  </motion.div>
                )}
              </div>
            </motion.button>
            <motion.button
              onClick={() => setSelectedOption("login")}
              className={`w-full p-3 rounded-2xl border-2 transition-all duration-300 ${
                selectedOption === "login"
                  ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-500/20"
                  : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={language === "ar" ? "تسجيل الدخول" : "Sign in"}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    selectedOption === "login"
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div className={`flex-1 text-${language === "ar" ? "right" : "left"}`}>
                  <div className="font-bold text-gray-900 mb-0.5">
                    {language === "ar" ? "تسجيل الدخول" : "Sign In"}
                  </div>
                  <div className="text-gray-600 text-xs">
                    {language === "ar" ? "ادخل لحسابك الموجود" : "Access your existing account"}
                  </div>
                </div>
                {selectedOption === "login" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                  </motion.div>
                )}
              </div>
            </motion.button>
            <motion.button
              onClick={() => setSelectedOption("register")}
              className={`w-full p-3 rounded-2xl border-2 transition-all duration-300 ${
                selectedOption === "register"
                  ? "border-purple-500 bg-purple-50 shadow-lg shadow-purple-500/20"
                  : "border-gray-200 hover:border-purple-300 hover:bg-purple-50/50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={language === "ar" ? "إنشاء حساب جديد" : "Create new account"}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    selectedOption === "register"
                      ? "bg-purple-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <UserPlus className="w-5 h-5" />
                </div>
                <div className={`flex-1 text-${language === "ar" ? "right" : "left"}`}>
                  <div className="font-bold text-gray-900 mb-0.5">
                    {language === "ar" ? "إنشاء حساب جديد" : "Create New Account"}
                  </div>
                  <div className="text-gray-600 text-xs">
                    {language === "ar" ? "احصل على مزايا إضافية" : "Get additional benefits"}
                  </div>
                </div>
                {selectedOption === "register" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                  </motion.div>
                )}
              </div>
            </motion.button>
          </div>
          <AnimatePresence>
            {selectedOption === "register" && (
              <motion.div
                className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span className="font-semibold text-purple-700 text-sm">
                    {language === "ar" ? "مزايا إنشاء الحساب:" : "Account Benefits:"}
                  </span>
                </div>
                <ul className="space-y-1 text-xs text-purple-600">
                  <li className="flex items-center gap-1.5">
                    <Star className="w-3 h-3 text-purple-400" />
                    {language === "ar" ? "تتبع الطلبات والمشتريات" : "Track orders and purchases"}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Gift className="w-3 h-3 text-purple-400" />
                    {language === "ar" ? "نقاط الولاء والخصومات الحصرية" : "Loyalty points and exclusive discounts"}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Shield className="w-3 h-3 text-purple-400" />
                    {language === "ar" ? "حفظ المنتجات المفضلة" : "Save favorite products"}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    {language === "ar" ? "توصيات شخصية مخصصة" : "Personalized recommendations"}
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            onClick={handleContinue}
            disabled={!selectedOption || isProcessing}
            className={`w-full mt-4 py-3 rounded-2xl font-bold text-base transition-all duration-300 ${
              selectedOption && !isProcessing
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
            whileHover={selectedOption && !isProcessing ? { scale: 1.02, y: -2 } : {}}
            whileTap={selectedOption && !isProcessing ? { scale: 0.98 } : {}}
            aria-label={language === "ar" ? "متابعة" : "Continue"}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                {language === "ar" ? "جاري الإضافة..." : "Adding..."}
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                {selectedOption === "guest" &&
                  (language === "ar" ? "إضافة للسلة والمتابعة" : "Add to Cart & Continue")}
                {selectedOption === "login" &&
                  (language === "ar" ? "تسجيل الدخول والمتابعة" : "Sign In & Continue")}
                {selectedOption === "register" &&
                  (language === "ar" ? "إنشاء حساب والمتابعة" : "Create Account & Continue")}
                {!selectedOption &&
                  (language === "ar" ? "اختر طريقة المتابعة" : "Choose how to continue")}
              </div>
            )}
          </motion.button>
          <div className="mt-3 p-2 bg-gray-50 rounded-2xl">
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <Shield className="w-3 h-3 text-green-500" />
              <span>
                {language === "ar"
                  ? "معاملاتك آمنة ومحمية بأعلى معايير الأمان"
                  : "Your transactions are secure and protected with the highest security standards"}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AddToCartModal;