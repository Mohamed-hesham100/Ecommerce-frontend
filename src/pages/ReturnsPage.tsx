import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  RotateCcw, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Package, 
  Truck, 
  CreditCard,
  AlertTriangle,
  Phone,
  Mail,
  MessageCircle,
  FileText,
  Camera
} from 'lucide-react';

const ReturnsPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [returnForm, setReturnForm] = useState({
    orderNumber: '',
    email: '',
    reason: '',
    description: '',
    images: []
  });

  const returnSteps = [
    {
      title: 'تقديم طلب الإرجاع',
      description: 'املأ النموذج أو تواصل معنا',
      icon: FileText
    },
    {
      title: 'مراجعة الطلب',
      description: 'سنراجع طلبك خلال 24 ساعة',
      icon: CheckCircle
    },
    {
      title: 'إرسال المنتج',
      description: 'أرسل المنتج باستخدام ملصق الشحن',
      icon: Package
    },
    {
      title: 'الفحص والمعالجة',
      description: 'فحص المنتج ومعالجة الاسترداد',
      icon: Truck
    },
    {
      title: 'الاسترداد',
      description: 'استرداد المبلغ خلال 5-10 أيام',
      icon: CreditCard
    }
  ];

  const returnableItems = [
    {
      category: 'منتجات العناية بالبشرة',
      returnable: true,
      conditions: ['غير مفتوحة', 'في العبوة الأصلية', 'خلال 30 يوم'],
      icon: '🧴'
    },
    {
      category: 'منتجات العناية بالشعر',
      returnable: true,
      conditions: ['غير مستخدمة', 'مع الختم الأصلي', 'خلال 30 يوم'],
      icon: '🧴'
    },
    {
      category: 'أدوات التجميل',
      returnable: true,
      conditions: ['غير مستخدمة', 'في العبوة الأصلية', 'خلال 15 يوم'],
      icon: '💄'
    },
    {
      category: 'المنتجات الشخصية',
      returnable: false,
      conditions: ['لأسباب صحية', 'غير قابلة للإرجاع'],
      icon: '❌'
    }
  ];

  const returnReasons = [
    'المنتج معيب أو تالف',
    'المنتج مختلف عن الوصف',
    'وصل منتج خاطئ',
    'لم يعد المنتج مطلوباً',
    'مشكلة في الجودة',
    'تأخر في التوصيل',
    'أخرى'
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Return form submitted:', returnForm);
    // Handle form submission
  };

  const handleInputChange = (field: string, value: string) => {
    setReturnForm(prev => ({ ...prev, [field]: value }));
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
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <RotateCcw className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">سياسة الإرجاع والاستبدال</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن ملتزمون برضاك التام. إذا لم تكن راضياً عن مشترياتك، يمكنك إرجاعها بسهولة
          </p>
        </motion.div>

        {/* Return Process Steps */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">خطوات الإرجاع</h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
            {returnSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center mb-8 lg:mb-0">
                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-4 ${
                  index <= activeStep 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm max-w-32">{step.description}</p>
                
                {index < returnSteps.length - 1 && (
                  <div className="hidden lg:block absolute w-24 h-0.5 bg-gray-300 mt-8" 
                       style={{ left: `${(index + 1) * 20}%` }} />
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => setActiveStep(Math.min(activeStep + 1, returnSteps.length - 1))}
              className="px-6 py-3 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-600 transition-colors duration-300"
            >
              الخطوة التالية
            </button>
          </div>
        </motion.div>

        {/* Return Policy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Returnable Items */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">المنتجات القابلة للإرجاع</h2>
            
            <div className="space-y-6">
              {returnableItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.category}</h3>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${
                        item.returnable 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {item.returnable ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                        {item.returnable ? 'قابل للإرجاع' : 'غير قابل للإرجاع'}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {item.conditions.map((condition, condIndex) => (
                      <li key={condIndex} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        {condition}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Return Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">طلب إرجاع</h2>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  رقم الطلب
                </label>
                <input
                  type="text"
                  value={returnForm.orderNumber}
                  onChange={(e) => handleInputChange('orderNumber', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  placeholder="مثال: #12345"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={returnForm.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  سبب الإرجاع
                </label>
                <select
                  value={returnForm.reason}
                  onChange={(e) => handleInputChange('reason', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  required
                >
                  <option value="">اختر السبب</option>
                  {returnReasons.map((reason, index) => (
                    <option key={index} value={reason}>{reason}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  وصف المشكلة
                </label>
                <textarea
                  value={returnForm.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300 resize-none"
                  placeholder="اشرح المشكلة بالتفصيل..."
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  صور المنتج (اختياري)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-emerald-500 transition-colors duration-300">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">اسحب الصور هنا أو انقر للاختيار</p>
                  <p className="text-sm text-gray-500">PNG, JPG حتى 10MB</p>
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                تقديم طلب الإرجاع
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Important Information */}
        <motion.div
          className="bg-amber-50 border border-amber-200 rounded-3xl p-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-amber-600" />
            <h2 className="text-2xl font-bold text-amber-800">معلومات مهمة</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-4">شروط الإرجاع</h3>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>مدة الإرجاع: 30 يوماً من تاريخ الاستلام</span>
                </li>
                <li className="flex items-start gap-2">
                  <Package className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>المنتج يجب أن يكون في حالته الأصلية</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>الاحتفاظ بفاتورة الشراء الأصلية</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-4">تكاليف الإرجاع</h3>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>مجاني إذا كان المنتج معيباً أو خاطئاً</span>
                </li>
                <li className="flex items-start gap-2">
                  <CreditCard className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>على عاتق العميل في الحالات الأخرى</span>
                </li>
                <li className="flex items-start gap-2">
                  <Truck className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>نوفر ملصق شحن مدفوع مسبقاً</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">أسئلة شائعة حول الإرجاع</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">كم يستغرق معالجة الإرجاع؟</h3>
                <p className="text-gray-700 leading-relaxed">
                  عادة ما نعالج طلبات الإرجاع خلال 3-5 أيام عمل من استلام المنتج. 
                  ستحصل على تأكيد عبر البريد الإلكتروني عند اكتمال المعالجة.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">متى سأحصل على استرداد أموالي؟</h3>
                <p className="text-gray-700 leading-relaxed">
                  بعد الموافقة على الإرجاع، سيتم استرداد المبلغ خلال 5-10 أيام عمل 
                  إلى نفس طريقة الدفع المستخدمة في الشراء الأصلي.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">هل يمكنني استبدال المنتج بدلاً من الإرجاع؟</h3>
                <p className="text-gray-700 leading-relaxed">
                  نعم، يمكنك طلب استبدال المنتج بمنتج آخر من نفس القيمة أو أعلى 
                  (مع دفع الفرق). تواصل مع خدمة العملاء لترتيب الاستبدال.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ماذا لو وصل المنتج تالفاً؟</h3>
                <p className="text-gray-700 leading-relaxed">
                  إذا وصل المنتج تالفاً أو معيباً، تواصل معنا فوراً. سنرسل لك منتجاً بديلاً 
                  مجاناً أو نسترد المبلغ كاملاً حسب رغبتك.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-12 text-white text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-4xl font-bold mb-6">تحتاج مساعدة في الإرجاع؟</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            فريق خدمة العملاء جاهز لمساعدتك في عملية الإرجاع والاستبدال
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.a
              href="tel:+966501234567"
              className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="font-bold">اتصل بنا</div>
                <div className="text-white/80">+966 50 123 4567</div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:returns@beautylab.sa"
              className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="font-bold">راسلنا</div>
                <div className="text-white/80">returns@beautylab.sa</div>
              </div>
            </motion.a>

            <motion.button
              className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="font-bold">دردشة مباشرة</div>
                <div className="text-white/80">متاح الآن</div>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ReturnsPage;