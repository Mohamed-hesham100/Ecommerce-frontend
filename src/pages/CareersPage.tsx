import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Star, 
  Heart,
  Zap,
  Target,
  Award,
  Coffee,
  Laptop,
  Car,
  GraduationCap,
  Send,
  Upload,
  CheckCircle
} from 'lucide-react';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null
  });

  const benefits = [
    {
      icon: DollarSign,
      title: 'راتب تنافسي',
      description: 'رواتب مجزية تتناسب مع الخبرة والمؤهلات'
    },
    {
      icon: GraduationCap,
      title: 'التطوير المهني',
      description: 'برامج تدريب وتطوير مستمرة لتنمية المهارات'
    },
    {
      icon: Coffee,
      title: 'بيئة عمل مرنة',
      description: 'ساعات عمل مرنة وإمكانية العمل من المنزل'
    },
    {
      icon: Car,
      title: 'بدل مواصلات',
      description: 'بدل مواصلات شهري أو توفير مواصلات الشركة'
    },
    {
      icon: Laptop,
      title: 'أدوات العمل',
      description: 'توفير جميع الأدوات والتقنيات اللازمة للعمل'
    },
    {
      icon: Heart,
      title: 'تأمين صحي',
      description: 'تأمين صحي شامل للموظف وأفراد العائلة'
    }
  ];

  const jobs = [
    {
      id: 1,
      title: 'مطور واجهات أمامية',
      department: 'التقنية',
      location: 'الرياض',
      type: 'دوام كامل',
      experience: '2-4 سنوات',
      salary: '8,000 - 12,000 ر.س',
      description: 'نبحث عن مطور واجهات أمامية متمرس للانضمام إلى فريقنا التقني المبدع',
      requirements: [
        'خبرة في React.js و TypeScript',
        'معرفة بـ Tailwind CSS و Framer Motion',
        'خبرة في تطوير المواقع المتجاوبة',
        'فهم جيد لـ UX/UI',
        'القدرة على العمل في فريق'
      ],
      responsibilities: [
        'تطوير واجهات المستخدم التفاعلية',
        'تحسين أداء الموقع والتطبيقات',
        'التعاون مع فريق التصميم والباك إند',
        'كتابة كود نظيف وقابل للصيانة',
        'اختبار وتصحيح الأخطاء'
      ]
    },
    {
      id: 2,
      title: 'مختص تسويق رقمي',
      department: 'التسويق',
      location: 'الرياض',
      type: 'دوام كامل',
      experience: '3-5 سنوات',
      salary: '7,000 - 10,000 ر.س',
      description: 'نبحث عن مختص تسويق رقمي لإدارة حملاتنا التسويقية وزيادة الوعي بالعلامة التجارية',
      requirements: [
        'خبرة في إدارة حملات Google Ads و Facebook Ads',
        'معرفة بـ SEO و SEM',
        'خبرة في تحليل البيانات والتقارير',
        'مهارات كتابة محتوى إبداعي',
        'إجادة اللغة العربية والإنجليزية'
      ],
      responsibilities: [
        'إدارة حملات التسويق الرقمي',
        'تحليل أداء الحملات وتحسينها',
        'إنشاء محتوى تسويقي جذاب',
        'إدارة وسائل التواصل الاجتماعي',
        'التعاون مع فريق المبيعات'
      ]
    },
    {
      id: 3,
      title: 'مدير خدمة العملاء',
      department: 'خدمة العملاء',
      location: 'الرياض',
      type: 'دوام كامل',
      experience: '4-6 سنوات',
      salary: '9,000 - 13,000 ر.س',
      description: 'نبحث عن مدير خدمة عملاء لقيادة فريق خدمة العملاء وضمان تقديم أفضل تجربة',
      requirements: [
        'خبرة في إدارة فرق خدمة العملاء',
        'مهارات تواصل ممتازة',
        'خبرة في أنظمة CRM',
        'القدرة على حل المشاكل',
        'مهارات قيادية قوية'
      ],
      responsibilities: [
        'إدارة وتطوير فريق خدمة العملاء',
        'وضع معايير الجودة والأداء',
        'حل الشكاوى المعقدة',
        'تحليل رضا العملاء وتحسينه',
        'التدريب والتطوير المستمر للفريق'
      ]
    },
    {
      id: 4,
      title: 'محلل بيانات',
      department: 'التقنية',
      location: 'الرياض / عن بُعد',
      type: 'دوام كامل',
      experience: '2-4 سنوات',
      salary: '8,500 - 12,500 ر.س',
      description: 'نبحث عن محلل بيانات لتحليل سلوك العملاء وتقديم رؤى قيمة لاتخاذ القرارات',
      requirements: [
        'خبرة في Python أو R',
        'معرفة بـ SQL وقواعد البيانات',
        'خبرة في أدوات التصور مثل Tableau',
        'فهم الإحصاء والتحليل الكمي',
        'مهارات تحليلية قوية'
      ],
      responsibilities: [
        'تحليل بيانات العملاء والمبيعات',
        'إنشاء تقارير ولوحات معلومات',
        'تقديم رؤى وتوصيات للإدارة',
        'تطوير نماذج تنبؤية',
        'مراقبة مؤشرات الأداء الرئيسية'
      ]
    }
  ];

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', applicationForm);
    // Handle form submission
  };

  const handleInputChange = (field, value) => {
    setApplicationForm(prev => ({ ...prev, [field]: value }));
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
            <Briefcase className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">انضم إلى فريقنا</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            كن جزءاً من رحلتنا في تغيير عالم الجمال والعناية الشخصية. نبحث عن المواهب المبدعة والشغوفة
          </p>
        </motion.div>

        {/* Company Culture */}
        <motion.div
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-12 text-white mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">ثقافة الشركة</h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                في بيوتي لاب، نؤمن بقوة الفريق والإبداع. نوفر بيئة عمل محفزة تشجع على النمو والتطور المهني.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-white/80">موظف متميز</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">4.8</div>
                  <div className="text-white/80">تقييم الموظفين</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-white/80">معدل الرضا</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-white/80">سنوات نمو</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Target className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">الهدف</h3>
                <p className="text-sm text-white/80">نسعى للتميز في كل ما نقوم به</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">الفريق</h3>
                <p className="text-sm text-white/80">نعمل معاً كفريق واحد</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Zap className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">الابتكار</h3>
                <p className="text-sm text-white/80">نبتكر حلولاً جديدة دائماً</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Award className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">التميز</h3>
                <p className="text-sm text-white/80">نحقق أعلى معايير الجودة</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">مزايا العمل معنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 text-center"
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Job Listings */}
        <motion.div
          className="mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">الوظائف المتاحة</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 cursor-pointer"
                whileHover={{ y: -8 }}
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">{job.salary}</div>
                    <div className="text-sm text-gray-500">{job.type}</div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{job.experience}</span>
                  </div>
                  <button className="px-6 py-2 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-600 transition-colors duration-300">
                    عرض التفاصيل
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">تقدم للوظيفة</h2>
          
          <form onSubmit={handleApplicationSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  value={applicationForm.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>
              
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={applicationForm.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  value={applicationForm.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  placeholder="+966 50 123 4567"
                  required
                />
              </div>
              
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  الوظيفة المطلوبة
                </label>
                <select
                  value={applicationForm.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                  required
                >
                  <option value="">اختر الوظيفة</option>
                  {jobs.map(job => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                سنوات الخبرة
              </label>
              <select
                value={applicationForm.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                required
              >
                <option value="">اختر سنوات الخبرة</option>
                <option value="0-1">أقل من سنة</option>
                <option value="1-3">1-3 سنوات</option>
                <option value="3-5">3-5 سنوات</option>
                <option value="5-10">5-10 سنوات</option>
                <option value="10+">أكثر من 10 سنوات</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                خطاب التقديم
              </label>
              <textarea
                value={applicationForm.coverLetter}
                onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                rows={6}
                className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 transition-all duration-300 resize-none"
                placeholder="اكتب خطاب التقديم هنا..."
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                السيرة الذاتية
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-emerald-500 transition-colors duration-300">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">اسحب السيرة الذاتية هنا أو انقر للاختيار</p>
                <p className="text-sm text-gray-500">PDF, DOC, DOCX حتى 5MB</p>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-6 h-6" />
              إرسال الطلب
            </motion.button>
          </form>
        </motion.div>

        {/* Job Details Modal */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{selectedJob.title}</h2>
                    <div className="flex items-center gap-6 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        <span>{selectedJob.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        <span>{selectedJob.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        <span>{selectedJob.experience}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">{selectedJob.salary}</div>
                    <div className="text-gray-500">{selectedJob.type}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">المتطلبات</h3>
                    <ul className="space-y-3">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">المسؤوليات</h3>
                    <ul className="space-y-3">
                      {selectedJob.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => {
                      setApplicationForm(prev => ({ ...prev, position: selectedJob.title }));
                      setSelectedJob(null);
                      document.querySelector('form').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                  >
                    تقدم للوظيفة
                  </button>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-2xl hover:bg-gray-200 transition-colors duration-300"
                  >
                    إغلاق
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CareersPage;