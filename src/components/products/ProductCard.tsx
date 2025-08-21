import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Eye, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlistStore } from "../../store/wishListStore";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    addItem: addToWishlist,
    removeItem: removeFromWishlist,
    isInWishlist,
  } = useWishlistStore();

  const isWishlisted = isInWishlist(product.id);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <motion.div
      className="group relative bg-white rounded-3xl shadow-lg shadow-gray-200/50 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {product.isNew && (
              <motion.div
                className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold rounded-full shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 15,
                  delay: 0.1,
                }}
              >
                جديد
              </motion.div>
            )}
            {product.isBestseller && (
              <motion.div
                className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 15,
                  delay: 0.2,
                }}
              >
                الأكثر مبيعاً
              </motion.div>
            )}
            {product.discount && (
              <motion.div
                className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 15,
                  delay: 0.3,
                }}
              >
                -{product.discount}%
              </motion.div>
            )}
          </div>

          {/* Quick Actions */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 flex gap-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 50, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.button
              onClick={handleWishlist}
              className={`flex-1 p-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                isWishlisted
                  ? "bg-red-500 border-red-500 text-white"
                  : "bg-white/90 border-white/20 text-gray-700 hover:bg-red-50 hover:text-red-500"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart
                className={`w-5 h-5 mx-auto ${
                  isWishlisted ? "fill-current" : ""
                }`}
              />
            </motion.button>
         
            <motion.button
              className="flex-1 p-3 bg-white/90 backdrop-blur-xl border border-white/20 text-gray-700 rounded-2xl hover:bg-gray-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-5 h-5 mx-auto" />
            </motion.button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "text-amber-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews} تقييم)
            </span>
          </div>

          {/* Name */}
          <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-emerald-600 transition-colors duration-300">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-emerald-600">
              {product.price} ر.س
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                {product.originalPrice} ر.س
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(45deg, transparent, rgba(16, 185, 129, 0.1), transparent)",
          boxShadow: "0 0 40px rgba(16, 185, 129, 0.2)",
        }}
      />
    </motion.div>
  );
};

export default ProductCard;
