import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Lock, 
  User, 
  Phone, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Sparkles,
  Shield,
  Heart,
  Globe
} from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('ar');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.email) {
      newErrors.email = language === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = language === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = language === 'ar' ? 'كلمة المرور مطلوبة' : 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = language === 'ar' ? 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' : 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.firstName) {
        newErrors.firstName = language === 'ar' ? 'الاسم الأول مطلوب' : 'First name is required';
      }
      if (!formData.lastName) {
        newErrors.lastName = language === 'ar' ? 'الاسم الأخير مطلوب' : 'Last name is required';
      }
      if (!formData.phone) {
        newErrors.phone = language === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone number is required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = language === 'ar' ? 'كلمات المرور غير متطابقة' : 'Passwords do not match';
      }
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = language === 'ar' ? 'يجب الموافقة على الشروط والأحكام' : 'You must agree to terms and conditions';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsLoading(false);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  // const toggleLanguage = () => {
  //   setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  // };

  const text = {
    ar: {
      welcomeBack: 'مرحباً بعودتك',
      joinUs: 'انضم إلينا',
      loginSubtitle: 'سجل دخولك للمتابعة',
      registerSubtitle: 'أنشئ حسابك الجديد',
      login: 'تسجيل الدخول',
      register: 'إنشاء حساب',
      firstName: 'الاسم الأول',
      lastName: 'الاسم الأخير',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      password: 'كلمة المرور',
      confirmPassword: 'تأكيد كلمة المرور',
      forgotPassword: 'نسيت كلمة المرور؟',
      agreeToTerms: 'أوافق على',
      terms: 'الشروط والأحكام',
      privacy: 'سياسة الخصوصية',
      continueWith: 'متابعة مع',
      or: 'أو',
      secure: 'آمن ومحمي',
      experience: 'تجربة مميزة',
      care: 'عناية شخصية'
    },
    en: {
      welcomeBack: 'Welcome Back',
      joinUs: 'Join Us',
      loginSubtitle: 'Sign in to continue',
      registerSubtitle: 'Create your new account',
      login: 'Sign In',
      register: 'Sign Up',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      forgotPassword: 'Forgot Password?',
      agreeToTerms: 'I agree to',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      continueWith: 'Continue with',
      or: 'or',
      secure: 'Secure & Protected',
      experience: 'Premium Experience',
      care: 'Personal Care'
    }
  };

  const currentText = text[language as keyof typeof text];

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Language Toggle
      <motion.button
        onClick={toggleLanguage}
        className="fixed top-8 right-8 z-50 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:bg-white transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-5 h-5 text-emerald-600" />
        <span className="font-semibold text-gray-700">{language === 'ar' ? 'EN' : 'عربي'}</span>
      </motion.button> */}

      {/* Auth Container */}
      <motion.div
        className="w-full max-w-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl mt-20 mb-12">
          {/* Header */}
          <div className="text-center mb-8 ">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? currentText.welcomeBack : currentText.joinUs}
            </h1>
            <p className="text-gray-600 text-lg">
              {isLogin ? currentText.loginSubtitle : currentText.registerSubtitle}
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex bg-gray-100 rounded-2xl p-1 mb-8">
            <button
              onClick={() => {
                setIsLogin(true);
                setErrors({});
              }}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                isLogin
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {currentText.login}
            </button>
            <button
              onClick={() => {
                setIsLogin(false);
                setErrors({});
              }}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                !isLogin
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {currentText.register}
            </button>
          </div>

          {/* Form */}
          <AnimatePresence mode="wait">
            <motion.form
              key={isLogin ? 'login' : 'register'}
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Register Fields */}
              {!isLogin && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <User className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`} />
                      <input
                        type="text"
                        placeholder={currentText.firstName}
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`w-full ${language === 'ar' ? 'pl-4 pr-12' : 'pr-4 pl-12'} py-4 bg-gray-50 border rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 ${
                          errors.firstName ? 'border-red-400' : 'border-gray-200'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    <div className="relative">
                      <User className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`} />
                      <input
                        type="text"
                        placeholder={currentText.lastName}
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`w-full ${language === 'ar' ? 'pl-4 pr-12' : 'pr-4 pl-12'} py-4 bg-gray-50 border rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 ${
                          errors.lastName ? 'border-red-400' : 'border-gray-200'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <Phone className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`} />
                    <input
                      type="tel"
                      placeholder={currentText.phone}
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full ${language === 'ar' ? 'pl-4 pr-12' : 'pr-4 pl-12'} py-4 bg-gray-50 border rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 ${
                        errors.phone ? 'border-red-400' : 'border-gray-200'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </>
              )}

              {/* Email */}
              <div className="relative">
                <Mail className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`} />
                <input
                  type="email"
                  placeholder={currentText.email}
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full ${language === 'ar' ? 'pl-4 pr-12' : 'pr-4 pl-12'} py-4 bg-gray-50 border rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 ${
                    errors.email ? 'border-red-400' : 'border-gray-200'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={currentText.password}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`w-full ${language === 'ar' ? 'pl-12 pr-12' : 'pr-12 pl-12'} py-4 bg-gray-50 border rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 ${
                    errors.password ? 'border-red-400' : 'border-gray-200'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute ${language === 'ar' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors`}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password (Register only) */}
              {!isLogin && (
                <div className="relative">
                  <Lock className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`} />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder={currentText.confirmPassword}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`w-full ${language === 'ar' ? 'pl-12 pr-12' : 'pr-12 pl-12'} py-4 bg-gray-50 border rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 ${
                      errors.confirmPassword ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={`absolute ${language === 'ar' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors`}
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                  )}
                </div>
              )}

              {/* Terms Agreement (Register only) */}
              {!isLogin && (
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                    className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500 mt-1"
                  />
                  <label htmlFor="agreeToTerms" className="text-gray-700 text-sm leading-relaxed">
                    {currentText.agreeToTerms}{' '}
                    <a href="/terms" className="text-emerald-600 hover:text-emerald-700 underline">
                      {currentText.terms}
                    </a>
                    {' '}و{' '}
                    <a href="/privacy" className="text-emerald-600 hover:text-emerald-700 underline">
                      {currentText.privacy}
                    </a>
                  </label>
                  {errors.agreeToTerms && (
                    <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>
                  )}
                </div>
              )}

              {/* Forgot Password (Login only) */}
              {isLogin && (
                <div className={`${language === 'ar' ? 'text-left' : 'text-right'}`}>
                  <button
                    type="button"
                    className="text-gray-600 hover:text-emerald-600 transition-colors text-sm underline"
                  >
                    {currentText.forgotPassword}
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isLoading ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    {isLogin ? (language === 'ar' ? 'جاري تسجيل الدخول...' : 'Signing in...') : (language === 'ar' ? 'جاري إنشاء الحساب...' : 'Creating account...')}
                  </>
                ) : (
                  <>
                    {isLogin ? currentText.login : currentText.register}
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </AnimatePresence>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-500">{currentText.or}</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-4">
            <motion.button
              onClick={() => handleSocialLogin('google')}
              className="w-full flex items-center justify-center gap-3 py-4 bg-gray-50 border border-gray-200 text-gray-700 rounded-2xl hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="text-red-500 font-bold text-sm">G</span>
              </div>
              {currentText.continueWith} Google
            </motion.button>

            <motion.button
              onClick={() => handleSocialLogin('apple')}
              className="w-full flex items-center justify-center gap-3 py-4 bg-gray-50 border border-gray-200 text-gray-700 rounded-2xl hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🍎</span>
              </div>
              {currentText.continueWith} Apple
            </motion.button>
          </div>
        </div>

        {/* Features
        <div className="grid grid-cols-3 gap-4 mt-8">
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Shield className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <p className="text-gray-700 text-sm font-semibold">{currentText.secure}</p>
          </motion.div>
          
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Sparkles className="w-8 h-8 text-teal-500 mx-auto mb-2" />
            <p className="text-gray-700 text-sm font-semibold">{currentText.experience}</p>
          </motion.div>
          
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
            <p className="text-gray-700 text-sm font-semibold">{currentText.care}</p>
          </motion.div>
        </div> */}
      </motion.div>
    </motion.div>
  );
};

export default AuthPage;