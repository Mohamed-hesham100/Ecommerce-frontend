import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Gift, Percent } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const CartPage = () => {
  const { items, updateQuantity, removeItem, clearCart, getTotal, getItemCount } = useCartStore();
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState('');
  const [discount, setDiscount] = useState(0);

  const promoCodes = {
    'WELCOME10': 10,
    'BEAUTY20': 20,
    'SAVE15': 15
  };

  const handleApplyPromo = () => {
    if (promoCodes[promoCode as keyof typeof promoCodes]) {
      setAppliedPromo(promoCode);
      setDiscount(promoCodes[promoCode as keyof typeof promoCodes]);
      setPromoCode('');
    }
  };

  const subtotal = getTotal();
  const discountAmount = (subtotal * discount) / 100;
  const shipping = subtotal > 200 ? 0 : 25;
  const total = subtotal - discountAmount + shipping;

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
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <ShoppingBag className="w-16 h-16 text-gray-400" />
            </motion.div>
            <motion.h1
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              سلة التسوق فارغة
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              ابدأ التسوق واكتشف منتجاتنا المميزة
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">سلة التسوق</h1>
          <p className="text-xl text-gray-600">
            لديك {getItemCount()} منتج في السلة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.div
                  key={`${item.id}-${index}`}
                  className="bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  layout
                >
                  <div className="flex items-center gap-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl font-bold text-emerald-600">
                          {item.price} ر.س
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-gray-100 rounded-2xl">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-200 rounded-r-2xl transition-colors duration-300"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-200 rounded-l-2xl transition-colors duration-300"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-2xl transition-colors duration-300"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-left">
                      <div className="text-2xl font-bold text-gray-900">
                        {item.price * item.quantity} ر.س
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Clear Cart */}
            <motion.button
              onClick={clearCart}
              className="w-full py-3 text-red-600 hover:bg-red-50 rounded-2xl transition-colors duration-300 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              مسح جميع المنتجات
            </motion.button>
          </div>

          {/* Order Summary */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 h-fit sticky top-32 mb-16"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ملخص الطلب</h2>

            {/* Promo Code */}
            <div className="mb-6">
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="كود الخصم"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={handleApplyPromo}
                  className="px-6 py-3 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-600 transition-colors duration-300"
                >
                  تطبيق
                </button>
              </div>
              
              {appliedPromo && (
                <motion.div
                  className="flex items-center gap-2 text-emerald-600 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Percent className="w-4 h-4" />
                  تم تطبيق كود الخصم: {appliedPromo}
                </motion.div>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-lg">
                <span>المجموع الفرعي:</span>
                <span>{subtotal.toFixed(2)} ر.س</span>
              </div>
              
              {discount > 0 && (
                <div className="flex justify-between text-lg text-emerald-600">
                  <span>الخصم ({discount}%):</span>
                  <span>-{discountAmount.toFixed(2)} ر.س</span>
                </div>
              )}
              
              <div className="flex justify-between text-lg">
                <span>الشحن:</span>
                <span>{shipping === 0 ? 'مجاني' : `${shipping} ر.س`}</span>
              </div>
              
              {shipping === 0 && (
                <div className="text-sm text-emerald-600 flex items-center gap-2">
                  <Gift className="w-4 h-4" />
                  شحن مجاني للطلبات فوق 200 ر.س
                </div>
              )}
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-2xl font-bold text-gray-900">
                  <span>المجموع:</span>
                  <span>{total.toFixed(2)} ر.س</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <Link
              to="/checkout"
              className="block w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg text-center rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              إتمام الطلب
            </Link>

            {/* Continue Shopping */}
            <Link
              to="/shop"
              className="block w-full py-3 text-emerald-600 text-center font-semibold hover:bg-emerald-50 rounded-2xl transition-colors duration-300 mt-4"
            >
              متابعة التسوق
            </Link>

            {/* Security Badge */}
            <div className="mt-6 p-4 bg-gray-50 rounded-2xl text-center">
              <div className="text-sm text-gray-600 mb-2">دفع آمن ومضمون</div>
              <div className="flex justify-center gap-2">
                <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="w-8 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  MC
                </div>
                <div className="w-8 h-6 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  مدى
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartPage;