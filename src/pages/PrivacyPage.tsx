import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, Database, Globe, CheckCircle, AlertTriangle } from 'lucide-react';

const PrivacyPage = () => {
  const sections = [
    {
      id: 'collection',
      title: 'جمع المعلومات',
      icon: Database,
      content: [
        'نجمع المعلومات التي تقدمها لنا مباشرة عند إنشاء حساب أو إجراء عملية شراء',
        'معلومات الاتصال مثل الاسم والبريد الإلكتروني ورقم الهاتف',
        'معلومات الدفع والفوترة (مشفرة وآمنة)',
        'تفضيلات التسوق وسجل الطلبات',
        'معلومات تقنية مثل عنوان IP ونوع المتصفح'
      ]
    },
    {
      id: 'usage',
      title: 'استخدام المعلومات',
      icon: Eye,
      content: [
        'معالجة وتنفيذ طلباتك وتوصيل المنتجات',
        'تحسين تجربة التسوق وتخصيص المحتوى',
        'إرسال تحديثات الطلبات والعروض الترويجية',
        'تقديم خدمة العملاء والدعم التقني',
        'تحليل استخدام الموقع لتحسين خدماتنا'
      ]
    },
    {
      id: 'sharing',
      title: 'مشاركة المعلومات',
      icon: Users,
      content: [
        'لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة',
        'قد نشارك المعلومات مع شركاء الشحن لتوصيل طلباتك',
        'نشارك المعلومات مع معالجات الدفع الآمنة',
        'قد نكشف المعلومات إذا كان ذلك مطلوباً قانونياً',
        'في حالة بيع أو دمج الشركة، قد تنتقل المعلومات للمالك الجديد'
      ]
    },
    {
      id: 'security',
      title: 'أمان المعلومات',
      icon: Lock,
      content: [
        'نستخدم تشفير SSL لحماية جميع البيانات المنقولة',
        'خوادمنا محمية بأحدث تقنيات الأمان',
        'الوصول للمعلومات مقيد على الموظفين المخولين فقط',
        'نراجع ونحدث إجراءات الأمان بانتظام',
        'نحتفظ بنسخ احتياطية آمنة من البيانات'
      ]
    },
    {
      id: 'cookies',
      title: 'ملفات تعريف الارتباط',
      icon: Globe,
      content: [
        'نستخدم الكوكيز لتحسين تجربة التصفح',
        'كوكيز ضرورية لعمل الموقع وعربة التسوق',
        'كوكيز تحليلية لفهم كيفية استخدام الموقع',
        'كوكيز تسويقية لعرض إعلانات مخصصة',
        'يمكنك التحكم في إعدادات الكوكيز من متصفحك'
      ]
    },
    {
      id: 'rights',
      title: 'حقوقك',
      icon: Shield,
      content: [
        'الحق في الوصول لمعلوماتك الشخصية',
        'الحق في تصحيح أو تحديث معلوماتك',
        'الحق في حذف حسابك ومعلوماتك',
        'الحق في تقييد معالجة معلوماتك',
        'الحق في نقل معلوماتك لخدمة أخرى'
      ]
    }
  ];

  const principles = [
    {
      icon: Shield,
      title: 'الشفافية',
      description: 'نوضح بوضوح كيف نجمع ونستخدم معلوماتك'
    },
    {
      icon: Lock,
      title: 'الأمان',
      description: 'نحمي معلوماتك بأعلى معايير الأمان'
    },
    {
      icon: Users,
      title: 'التحكم',
      description: 'لك السيطرة الكاملة على معلوماتك الشخصية'
    },
    {
      icon: CheckCircle,
      title: 'الامتثال',
      description: 'نلتزم بجميع القوانين واللوائح المحلية والدولية'
    }
  ];

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
            <Shield className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">سياسة الخصوصية</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن ملتزمون بحماية خصوصيتك وأمان معلوماتك الشخصية. هذه السياسة توضح كيف نجمع ونستخدم ونحمي بياناتك
          </p>
          <div className="mt-6 text-sm text-gray-500">
            آخر تحديث: 15 يناير 2024
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 text-center"
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <principle.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{principle.title}</h3>
              <p className="text-gray-700 leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
              </div>
              
              <ul className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Data Retention */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">الاحتفاظ بالبيانات</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">مدة الاحتفاظ</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">معلومات الحساب: طوال فترة نشاط الحساب</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">سجل الطلبات: 7 سنوات للأغراض المحاسبية</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">بيانات التسويق: حتى إلغاء الاشتراك</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">حذف البيانات</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">يمكنك طلب حذف حسابك في أي وقت</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">نحذف البيانات غير الضرورية تلقائياً</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">بعض البيانات قد تُحفظ للالتزامات القانونية</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Children's Privacy */}
        <motion.div
          className="bg-amber-50 border border-amber-200 rounded-3xl p-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-amber-600" />
            <h2 className="text-2xl font-bold text-amber-800">خصوصية الأطفال</h2>
          </div>
          <p className="text-amber-700 leading-relaxed text-lg">
            خدماتنا مخصصة للأشخاص البالغين من العمر 18 عاماً فأكثر. لا نجمع عمداً معلومات شخصية من الأطفال دون سن 18 عاماً. 
            إذا علمنا أننا جمعنا معلومات من طفل دون موافقة الوالدين، سنحذف هذه المعلومات فوراً.
          </p>
        </motion.div>

        {/* Updates */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">تحديثات السياسة</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-lg">
              قد نحدث هذه السياسة من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب تشغيلية أو قانونية أو تنظيمية أخرى.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              سنخطرك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار على موقعنا قبل سريان التغييرات.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              استمرارك في استخدام خدماتنا بعد سريان التغييرات يعني موافقتك على السياسة المحدثة.
            </p>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-12 text-white text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <h3 className="text-4xl font-bold mb-6">هل لديك أسئلة حول الخصوصية؟</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            إذا كان لديك أي أسئلة أو مخاوف حول سياسة الخصوصية أو ممارسات البيانات، لا تتردد في التواصل معنا
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.a
              href="mailto:privacy@beautylab.sa"
              className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="font-bold">مسؤول الخصوصية</div>
                <div className="text-white/80">privacy@beautylab.sa</div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+966501234567"
              className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="font-bold">خدمة العملاء</div>
                <div className="text-white/80">+966 50 123 4567</div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivacyPage;