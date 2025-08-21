import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ShoppingBag,
  Trash2,
  Star,
  ArrowLeft,
  Share2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlistStore } from "../store/wishListStore";
import { useCartStore } from "../store/cartStore";

const WishlistPage = () => {
  const { items, removeItem, clearWishlist } = useWishlistStore();
  const { addItem } = useCartStore();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleAddToCart = (product: any) => {
    addItem(product);
  };

  const handleRemoveItem = (id: number) => {
    removeItem(id);
  };

  const handleSelectItem = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddSelectedToCart = () => {
    const selectedProducts = items.filter((item) =>
      selectedItems.includes(item.id)
    );
    selectedProducts.forEach((product) => addItem(product));
    setSelectedItems([]);
  };

  if (items.length === 0) {
    return (
      <motion.div
        className="min-h-screen pt-24 px-4 lg:px-8 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto">
          <div className="text-center py-20">
            <motion.div
              className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Heart className="w-16 h-16 text-gray-400" />
            </motion.div>
            <motion.h1
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              قائمة المفضلة فارغة
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              ابدأ بإضافة منتجاتك المفضلة لتجدها هنا
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/shop"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                تسوق الآن
                <ArrowLeft className="mr-3 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

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
          className="mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            المنتجات المفضلة
          </h1>
          <p className="text-xl text-gray-600">
            لديك {items.length} منتج في قائمة المفضلة
          </p>
        </motion.div>

        {/* Bulk Actions */}
        {selectedItems.length > 0 && (
          <motion.div
            className="bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">
                تم تحديد {selectedItems.length} منتج
              </span>
              <div className="flex gap-4">
                <button
                  onClick={handleAddSelectedToCart}
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-600 transition-colors duration-300"
                >
                  <ShoppingBag className="w-5 h-5" />
                  إضافة المحدد للسلة
                </button>
                <button
                  onClick={() => {
                    selectedItems.forEach((id) => removeItem(id));
                    setSelectedItems([]);
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-2xl hover:bg-red-600 transition-colors duration-300"
                >
                  <Trash2 className="w-5 h-5" />
                  حذف المحدد
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                layout
              >
                {/* Checkbox */}
                <div className="absolute top-4 left-4 z-10">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                    className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500"
                  />
                </div>

                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(item.rating)
                              ? "text-amber-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {item.rating} ({item.reviews} تقييم)
                    </span>
                  </div>

                  {/* Name */}
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 leading-tight hover:text-emerald-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                  </Link>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-emerald-600">
                      {item.price} ر.س
                    </span>
                    {item.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        {item.originalPrice} ر.س
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-600 transition-colors duration-300"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      أضف للسلة
                    </button>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-3 text-red-500 hover:bg-red-50 rounded-2xl transition-colors duration-300"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Actions */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => {
              items.forEach((item) => addItem(item));
            }}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300"
          >
            إضافة الكل للسلة
          </button>

          <button
            onClick={clearWishlist}
            className="px-8 py-4 bg-red-500 text-white font-bold text-lg rounded-2xl hover:bg-red-600 transition-colors duration-300"
          >
            مسح قائمة المفضلة
          </button>

          <Link
            to="/shop"
            className="px-8 py-4 bg-gray-100 text-gray-700 font-bold text-lg rounded-2xl hover:bg-gray-200 transition-colors duration-300 text-center"
          >
            متابعة التسوق
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WishlistPage;
