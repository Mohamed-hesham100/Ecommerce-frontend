import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users, CreditCard, Truck } from 'lucide-react';

const TermsPage = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'قبول الشروط',
      icon: CheckCircle,
      content: [
        'باستخدام موقع بيوتي لاب، فإنك توافق على الالتزام بهذه الشروط والأحكام',
        'إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع',
        'نحتفظ بالحق في تعديل هذه الشروط في أي وقت دون إشعار مسبق',
        'استمرارك في استخدام الموقع يعني موافقتك على الشروط المحدثة'
      ]
    },
    {
      id: 'account',
      title: 'حساب المستخدم',
      icon: Users,
      content: [
        'يجب أن تكون 18 عاماً أو أكثر لإنشاء حساب',
        'يجب تقديم معلومات دقيقة وحديثة عند التسجيل',
        'أنت مسؤول عن الحفاظ على سرية كلمة المرور',
        'أنت مسؤول عن جميع الأنشطة التي تحدث تحت حسابك',
        'يجب إخطارنا فوراً بأي استخدام غير مصرح به لحسابك'
      ]
    },
    {
      id: 'orders',
      title: 'الطلبات والمدفوعات',
      icon: CreditCard,
      content: [
        'جميع الطلبات خاضعة للتوفر وتأكيد السعر',
        'نحتفظ بالحق في رفض أو إلغاء أي طلب لأي سبب',
        'الأسعار قابلة للتغيير دون إشعار مسبق',
        'الدفع مطلوب بالكامل وقت تقديم الطلب',
        'جميع المدفوعات نهائية وغير قابلة للاسترداد إلا كما هو منصوص عليه في سياسة الإرجاع'
      ]
    },
    {
      id: 'shipping',
      title: 'الشحن والتوصيل',
      icon: Truck,
      content: [
        'أوقات التوصيل تقديرية وليست مضمونة',
        'نحن غير مسؤولين عن التأخير الناتج عن ظروف خارجة عن سيطرتنا',
        'المخاطر تنتقل إليك عند التسليم',
        'يجب فحص الطلب عند الاستلام والإبلاغ عن أي أضرار فوراً',
        'رسوم الشحن غير قابلة للاسترداد'
      ]
    },
    {
      id: 'returns',
      title: 'الإرجاع والاستبدال',
      icon: Shield,
      content: [
        'يمكن إرجاع المنتجات خلال 30 يوماً من تاريخ الاستلام',
        'المنتجات يجب أن تكون في حالتها الأصلية وغير مستخدمة',
        'المنتجات الشخصية (مثل أحمر الشفاه) لا يمكن إرجاعها',
        'تكلفة الإرجاع على عاتق العميل إلا في حالة الخطأ من جانبنا',
        'المبالغ المستردة ستتم خلال 5-10 أيام عمل'
      ]
    },
    {
      id: 'intellectual',
      title: 'الملكية الفكرية',
      icon: Scale,
      content: [
        'جميع المحتويات على الموقع محمية بحقوق الطبع والنشر',
        'لا يجوز نسخ أو توزيع أو تعديل أي محتوى دون إذن كتابي',
        'العلامات التجارية والشعارات مملوكة لأصحابها المعنيين',
        'أي انتهاك للملكية الفكرية سيتم اتخاذ إجراءات قانونية ضده',
        'يمكنك استخدام الموقع للأغراض الشخصية غير التجارية فقط'
      ]
    },
    {
      id: 'prohibited',
      title: 'الاستخدامات المحظورة',
      icon: AlertTriangle,
      content: [
        'استخدام الموقع لأي غرض غير قانوني أو محظور',
        'محاولة الوصول غير المصرح به لأنظمة الموقع',
        'إرسال فيروسات أو برامج ضارة',
        'انتحال شخصية أشخاص أو كيانات أخرى',
        'التدخل في عمل الموقع أو خوادمه'
      ]
    },
    {
      id: 'liability',
      title: 'إخلاء المسؤولية',
      icon: Shield,
      content: [
        'الموقع والخدمات مقدمة "كما هي" دون أي ضمانات',
        'لا نضمن أن الموقع سيكون خالياً من الأخطاء أو متاحاً دائماً',
        'لا نتحمل مسؤولية أي أضرار مباشرة أو غير مباشرة',
        'مسؤوليتنا محدودة بقيمة المنتجات المشتراة',
        'بعض القوانين لا تسمح بإخلاء المسؤولية، لذا قد لا تنطبق عليك'
      ]
    }
  ];

  const highlights = [
    {
      icon: FileText,
      title: 'شروط واضحة',
      description: 'شروط وأحكام مفصلة وسهلة الفهم'
    },
    {
      icon: Scale,
      title: 'عدالة قانونية',
      description: 'شروط عادلة ومتوازنة لجميع الأطراف'
    },
    {
      icon: Shield,
      title: 'حماية الحقوق',
      description: 'حماية حقوق العملاء والشركة'
    },
    {
      icon: CheckCircle,
      title: 'الامتثال القانوني',
      description: 'متوافقة مع القوانين السعودية والدولية'
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
            <FileText className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">الشروط والأحكام</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام موقع بيوتي لاب وخدماتنا
          </p>
          <div className="mt-6 text-sm text-gray-500">
            آخر تحديث: 15 يناير 2024 | سارية المفعول من: 1 فبراير 2024
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 text-center"
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
              <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-12 text-white mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-6">مرحباً بك في بيوتي لاب</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                هذه الشروط والأحكام تحكم استخدامك لموقع بيوتي لاب وجميع الخدمات المقدمة من خلاله. 
                نحن ملتزمون بتوفير تجربة تسوق آمنة وممتعة لجميع عملائنا.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                باستخدام موقعنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. 
                إذا كان لديك أي أسئلة، لا تتردد في التواصل معنا.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">معلومات الشركة</h3>
              <div className="space-y-2 text-white/90">
                <p><strong>الاسم:</strong> شركة بيوتي لاب للتجارة الإلكترونية</p>
                <p><strong>السجل التجاري:</strong> 1234567890</p>
                <p><strong>العنوان:</strong> الرياض، المملكة العربية السعودية</p>
                <p><strong>البريد الإلكتروني:</strong> legal@beautylab.sa</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Governing Law */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">القانون الحاكم وحل النزاعات</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">القانون الحاكم</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">تخضع هذه الشروط لقوانين المملكة العربية السعودية</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">تطبق أحكام الشريعة الإسلامية في جميع المعاملات</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">الامتثال لجميع اللوائح التجارية المحلية</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">حل النزاعات</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">محاولة الحل الودي أولاً عبر خدمة العملاء</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">اللجوء للوساطة في حالة عدم التوصل لحل</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">المحاكم السعودية هي المختصة في النزاعات</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          className="bg-amber-50 border border-amber-200 rounded-3xl p-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-amber-600" />
            <h2 className="text-2xl font-bold text-amber-800">تنبيه مهم</h2>
          </div>
          <div className="space-y-4 text-amber-700">
            <p className="leading-relaxed text-lg">
              <strong>تحديث الشروط:</strong> نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. 
              سيتم إشعارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار على الموقع.
            </p>
            <p className="leading-relaxed text-lg">
              <strong>الفصل:</strong> إذا تبين أن أي جزء من هذه الشروط غير قابل للتنفيذ، 
              فإن باقي الشروط تبقى سارية المفعول.
            </p>
            <p className="leading-relaxed text-lg">
              <strong>التنازل:</strong> عدم إنفاذ أي حق أو شرط لا يعتبر تنازلاً عن ذلك الحق أو الشرط.
            </p>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-12 text-white text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <h3 className="text-4xl font-bold mb-6">هل لديك أسئلة قانونية؟</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى التواصل مع فريقنا القانوني
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.a
              href="mailto:legal@beautylab.sa"
              className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="font-bold">الشؤون القانونية</div>
                <div className="text-white/80">legal@beautylab.sa</div>
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

export default TermsPage;