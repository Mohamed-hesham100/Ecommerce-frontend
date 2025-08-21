import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,

  Sun,
  Moon,
  Kanban,
} from "lucide-react";
import { useCartStore } from "../../store/cartStore";
import { useWishlistStore } from "../../store/wishListStore";
import { useLanguage } from "../../Providers/LanguageProvider";
import { useTheme } from "../../Providers/ThemeProvider";

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { items } = useCartStore();
  const { getItemCount: getWishlistCount } = useWishlistStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.shop"), href: "/shop" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.offers"), href: "/offers" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? isDark
              ? "bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl shadow-gray-900/20"
              : "bg-white/80 backdrop-blur-xl border-b border-emerald-100/50 shadow-2xl shadow-emerald-500/10"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`flex items-center ${
                language === "ar" ? "space-x-reverse space-x-3" : "space-x-3"
              }`}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-white font-bold text-xl">
                  {" "}
                  <Kanban />
                </span>
              </motion.div>
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {language === "ar" ? "بيوتي لاب" : "Beauty Lab"}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className={`hidden lg:flex items-center ${
                language === "ar" ? "space-x-reverse space-x-8" : "space-x-8"
              }`}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-lg font-medium transition-all duration-300 hover:text-emerald-600 ${
                    location.pathname === item.href
                      ? "text-emerald-600"
                      : isScrolled
                      ? "text-gray-800"
                      : "text-gray-800"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                      layoutId="activeTab"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div
              className={`flex items-center ${
                language === "ar" ? "space-x-reverse space-x-4" : "space-x-4"
              }`}
            >
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-3 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                    : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>

              {/* Search */}
              <motion.button
                onClick={() => setIsSearchOpen(true)}
                className={`p-3 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="w-5 h-5" />
              </motion.button>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className={`p-3 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                } relative`}
              >
                <Heart className="w-5 h-5" />
                {getWishlistCount() > 0 && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    {getWishlistCount()}
                  </motion.div>
                )}
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className={`relative p-3 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {items.length > 0 && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    {items.length}
                  </motion.div>
                )}
              </Link>

              {/* User */}
              <Link
                to="/dashboard"
                className={`p-3 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                }`}
              >
                <User className="w-5 h-5" />
              </Link>

              {/* CTA Button */}
              <Link
                to="/shop"
                className="hidden md:block px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300"
              >
                {t("nav.startShopping")}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden p-3 rounded-2xl ${
                  isScrolled
                    ? isDark
                      ? "bg-gray-800 text-gray-300"
                      : "bg-emerald-50 text-emerald-600"
                    : "bg-white/20 text-white backdrop-blur-sm"
                }`}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className={`fixed inset-0 z-[60] backdrop-blur-sm flex items-start justify-center pt-32 ${
              isDark ? "bg-black/70" : "bg-black/50"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              className={`rounded-3xl p-6 w-full max-w-2xl mx-4 shadow-2xl ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
              initial={{ scale: 0.9, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Search
                  className={`absolute ${
                    language === "ar" ? "right-4" : "left-4"
                  } top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6`}
                />
                <input
                  type="text"
                  placeholder={
                    language === "ar"
                      ? "ابحث عن المنتجات..."
                      : "Search for products..."
                  }
                  className={`w-full ${
                    language === "ar" ? "pl-4 pr-14" : "pr-4 pl-14"
                  } py-4 text-lg border-0 focus:ring-0 focus:outline-none rounded-2xl ${
                    isDark
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-50 text-gray-900 placeholder-gray-500"
                  }`}
                  autoFocus
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`fixed inset-0 z-[60] ${
              isDark ? "bg-gray-900" : "bg-white"
            }`}
            initial={{ x: language === "ar" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: language === "ar" ? "-100%" : "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div
                  className={`text-2xl font-bold ${
                    isDark ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  {language === "ar" ? "القائمة" : "Menu"}
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-2 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block text-xl font-medium py-3 border-b ${
                      isDark
                        ? "text-gray-200 border-gray-700 hover:text-emerald-400"
                        : "text-gray-800 border-gray-100 hover:text-emerald-600"
                    } transition-colors duration-300`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
