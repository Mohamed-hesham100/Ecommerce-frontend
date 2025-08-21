import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-500 relative overflow-hidden"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100/50 to-teal-100/50 rounded-full -translate-y-16 translate-x-16" />
      
      {/* Quote Icon */}
      <div className="relative z-10 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
          <Quote className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? 'text-amber-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
        "{testimonial.comment}"
      </p>

      {/* Profile */}
      <div className="flex items-center gap-4 relative z-10">
        <motion.img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-2xl object-cover shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        />
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
          <p className="text-gray-600">{testimonial.location}</p>
        </div>
      </div>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
        whileHover={{ scale: 1.02 }}
      />
    </motion.div>
  );
};

export default TestimonialCard;