
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Smartphone
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'من نحن', href: '/about' },
    { name: 'المدونة', href: '/blog' },
    { name: 'العروض', href: '/offers' },
    { name: 'الوظائف', href: '/careers' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  const customerService = [
    { name: 'مركز المساعدة', href: '/support' },
    { name: 'الأسئلة الشائعة', href: '/faq' },
    { name: 'سياسة الاسترجاع', href: '/returns' },
    { name: 'تتبع الطلب', href: '/track-order' },
    { name: 'دليل المقاسات', href: '/size-guide' },
  ];

  const legal = [
    { name: 'الشروط والأحكام', href: '/terms' },
    { name: 'سياسة الخصوصية', href: '/privacy' },
    { name: 'سياسة الكوكيز', href: '/cookies' },
    { name: 'الاستخدام المقبول', href: '/acceptable-use' },
  ];

  const paymentMethods = [
    { name: 'Visa', icon: CreditCard },
    { name: 'Mastercard', icon: CreditCard },
    { name: 'Mada', icon: CreditCard },
    { name: 'Apple Pay', icon: Smartphone },
    { name: 'STC Pay', icon: Smartphone },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <motion.h3
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              اشترك في النشرة الإخبارية
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              احصل على آخر العروض والمنتجات الجديدة مباشرة في بريدك الإلكتروني
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                اشتراك
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-3 space-x-reverse mb-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">ب</span>
              </div>
              <div className="text-2xl font-bold">بيوتي لاب</div>
            </motion.div>
            <motion.p
              className="text-gray-300 mb-6 leading-relaxed text-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              وجهتك الأولى لمنتجات الجمال والعناية الشخصية عالية الجودة. نقدم لك أفضل العلامات التجارية العالمية مع خدمة عملاء استثنائية.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 space-x-reverse text-gray-300">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-gray-300">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>info@beautylab.sa</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-gray-300">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4 space-x-reverse mt-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 group">
                <Facebook className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 group">
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 group">
                <Twitter className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 group">
                <Youtube className="w-5 h-5 group-hover:text-white" />
              </a>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-emerald-300">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-lg hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-emerald-300">خدمة العملاء</h4>
            <ul className="space-y-3">
              {customerService.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-lg hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6 text-emerald-300">القانونية</h4>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-lg hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <motion.p
              className="text-gray-400 text-center lg:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              © 2025 بيوتي لاب. جميع الحقوق محفوظة.
            </motion.p>
            
            {/* Payment Methods */}
            <motion.div
              className="flex items-center space-x-4 space-x-reverse"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-gray-400 ml-4">طرق الدفع:</span>
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="w-12 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center"
                >
                  <method.icon className="w-4 h-4 text-gray-300" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;