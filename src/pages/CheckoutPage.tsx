import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  
  Phone, 
 
  CreditCard, 
  Truck, 
  CheckCircle, 
  ArrowLeft,
  ArrowRight,
  Shield,
  Clock
} from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Shipping Address
    address: '',
    city: '',
    district: '',
    postalCode: '',
    
    // Delivery Method
    deliveryMethod: 'standard',
    
    // Payment Method
    paymentMethod: 'card'
  });

  const { items, getTotal } = useCartStore();
  const subtotal = getTotal();
  const shipping = subtotal > 200 ? 0 : 25;
  const total = subtotal + shipping;

  const steps = [
    { id: 1, title: 'معلومات الشحن', icon: User },
    { id: 2, title: 'طريقة التوصيل', icon: Truck },
    { id: 3, title: 'طريقة الدفع', icon: CreditCard },
    { id: 4, title: 'تأكيد الطلب', icon: CheckCircle }
  ];

  const deliveryOptions = [
    {
      id: 'standard',
      name: 'التوصيل العادي',
      description: '2-3 أيام عمل',
      price: 25,
      icon: Truck
    },
    {
      id: 'express',
      name: 'التوصيل السريع',
      description: '24 ساعة',
      price: 50,
      icon: Clock
    },
    {
      id: 'same-day',
      name: 'نفس اليوم',
      description: 'خلال 6 ساعات',
      price: 75,
      icon: CheckCircle
    }
  ];

  const paymentMethods = [
    {
      id: 'card',
      name: 'بطاقة ائتمانية',
      description: 'Visa, Mastercard, مدى',
      icon: CreditCard
    },
    {
      id: 'apple-pay',
      name: 'Apple Pay',
      description: 'دفع سريع وآمن',
      icon: Shield
    },
    {
      id: 'stc-pay',
      name: 'STC Pay',
      description: 'محفظة رقمية',
      icon: Phone
    },
    {
      id: 'cod',
      name: 'الدفع عند الاستلام',
      description: 'ادفع عند وصول الطلب',
      icon: Truck
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle order submission
    console.log('Order submitted:', formData);
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
          className="mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">إتمام الطلب</h1>
          <p className="text-xl text-gray-600">أكمل بياناتك لإتمام عملية الشراء</p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          className="bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center gap-3 ${
                  currentStep >= step.id ? 'text-emerald-600' : 'text-gray-400'
                }`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    currentStep >= step.id 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="hidden md:block">
                    <div className="font-semibold">{step.title}</div>
                    <div className="text-sm opacity-70">الخطوة {step.id}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 rounded-full ${
                    currentStep > step.id ? 'bg-emerald-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">معلومات الشحن</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-3">
                        الاسم الأول
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                        placeholder="أدخل الاسم الأول"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-3">
                        الاسم الأخير
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                        placeholder="أدخل الاسم الأخير"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-3">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                        placeholder="example@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-3">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                        placeholder="+966 50 123 4567"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-lg font-semibold text-gray-900 mb-3">
                        العنوان
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                        placeholder="الشارع والحي"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-3">
                        المدينة
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                      >
                        <option value="">اختر المدينة</option>
                        <option value="riyadh">الرياض</option>
                        <option value="jeddah">جدة</option>
                        <option value="dammam">الدمام</option>
                        <option value="mecca">مكة المكرمة</option>
                        <option value="medina">المدينة المنورة</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-3">
                        الرمز البريدي
                      </label>
                      <input
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                        placeholder="12345"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Delivery Method */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">طريقة التوصيل</h2>
                  
                  <div className="space-y-4">
                    {deliveryOptions.map(option => (
                      <label
                        key={option.id}
                        className={`block p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.deliveryMethod === option.id
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="deliveryMethod"
                          value={option.id}
                          checked={formData.deliveryMethod === option.id}
                          onChange={(e) => handleInputChange('deliveryMethod', e.target.value)}
                          className="sr-only"
                        />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                              formData.deliveryMethod === option.id
                                ? 'bg-emerald-500 text-white'
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              <option.icon className="w-6 h-6" />
                            </div>
                            <div>
                              <div className="text-xl font-bold text-gray-900">{option.name}</div>
                              <div className="text-gray-600">{option.description}</div>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-emerald-600">
                            {option.price === 0 ? 'مجاني' : `${option.price} ر.س`}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment Method */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">طريقة الدفع</h2>
                  
                  <div className="space-y-4 mb-8">
                    {paymentMethods.map(method => (
                      <label
                        key={method.id}
                        className={`block p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.paymentMethod === method.id
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={formData.paymentMethod === method.id}
                          onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                          className="sr-only"
                        />
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                            formData.paymentMethod === method.id
                              ? 'bg-emerald-500 text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            <method.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="text-xl font-bold text-gray-900">{method.name}</div>
                            <div className="text-gray-600">{method.description}</div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>

                  {/* Card Details (if card payment selected) */}
                  {formData.paymentMethod === 'card' && (
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div>
                        <label className="block text-lg font-semibold text-gray-900 mb-3">
                          رقم البطاقة
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-lg font-semibold text-gray-900 mb-3">
                            تاريخ الانتهاء
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-lg font-semibold text-gray-900 mb-3">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-lg font-semibold text-gray-900 mb-3">
                          اسم حامل البطاقة
                        </label>
                        <input
                          type="text"
                          placeholder="الاسم كما هو مكتوب على البطاقة"
                          className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                        />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Step 4: Order Confirmation */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">تأكيد الطلب</h2>
                  
                  {/* Order Items */}
                  <div className="space-y-4 mb-8">
                    {items.map(item => (
                      <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-2xl"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-gray-600">الكمية: {item.quantity}</p>
                        </div>
                        <div className="text-xl font-bold text-emerald-600">
                          {item.price * item.quantity} ر.س
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">ملخص الطلب</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>المجموع الفرعي:</span>
                        <span>{subtotal} ر.س</span>
                      </div>
                      <div className="flex justify-between">
                        <span>الشحن:</span>
                        <span>{shipping === 0 ? 'مجاني' : `${shipping} ر.س`}</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2">
                        <div className="flex justify-between text-xl font-bold">
                          <span>المجموع:</span>
                          <span>{total} ر.س</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <label className="flex items-start gap-3 mb-8 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500 mt-1"
                    />
                    <span className="text-gray-700">
                      أوافق على <a href="/terms" className="text-emerald-600 hover:underline">الشروط والأحكام</a> و
                      <a href="/privacy" className="text-emerald-600 hover:underline"> سياسة الخصوصية</a>
                    </span>
                  </label>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.div
              className="flex justify-between mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {currentStep > 1 && (
                <button
                  onClick={handlePrevStep}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                  السابق
                </button>
              )}
              
              <div className="flex-1" />
              
              {currentStep < 4 ? (
                <button
                  onClick={handleNextStep}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                >
                  التالي
                  <ArrowLeft className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 font-bold"
                >
                  تأكيد الطلب
                  <CheckCircle className="w-5 h-5" />
                </button>
              )}
            </motion.div>
          </div>

          {/* Order Summary Sidebar */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 h-fit sticky top-32"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">ملخص الطلب</h3>
            
            <div className="space-y-4 mb-6">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-sm line-clamp-1">{item.name}</div>
                    <div className="text-gray-600 text-sm">الكمية: {item.quantity}</div>
                  </div>
                  <div className="font-bold text-emerald-600">
                    {item.price * item.quantity} ر.س
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between">
                <span>المجموع الفرعي:</span>
                <span>{subtotal} ر.س</span>
              </div>
              <div className="flex justify-between">
                <span>الشحن:</span>
                <span>{shipping === 0 ? 'مجاني' : `${shipping} ر.س`}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-gray-200">
                <span>المجموع:</span>
                <span>{total} ر.س</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckoutPage;