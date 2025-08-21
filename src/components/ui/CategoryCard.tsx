import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Category {
  name: string;
  count: number;
  image: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/shop?category=${encodeURIComponent(category.name)}`}>
      <motion.div
        className="group relative h-80 rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <div className={`absolute inset-0 opacity-70 group-hover:opacity-80 transition-opacity duration-300`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
              {category.name}
            </h3>
            <p className="text-white/80 mb-4 text-lg">
              {category.count} منتج
            </p>
            
            <motion.div
              className="flex items-center text-white group-hover:text-white/90 transition-colors duration-300"
              whileHover={{ x: -5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <span className="font-semibold ml-2">تسوق الآن</span>
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </motion.div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)`,
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.2)',
          }}
        />
      </motion.div>
    </Link>
  );
};

export default CategoryCard;