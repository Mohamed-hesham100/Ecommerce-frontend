import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

const translations = {
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.shop': 'المتجر',
    'nav.blog': 'المدونة',
    'nav.offers': 'العروض',
    'nav.about': 'من نحن',
    'nav.contact': 'تواصل معنا',
    'nav.startShopping': 'ابدأ التسوق',
    
    // Hero Section
    'hero.title': 'جمالك يبدأ هنا',
    'hero.subtitle': 'اكتشف منتجات العناية والجمال المتطورة مع تقنيات الذكاء الاصطناعي',
    'hero.description': 'منصة متكاملة تقدم أفضل منتجات العناية بالبشرة والجمال مع توصيات شخصية ذكية',
    'hero.shopNow': 'تسوق الآن',
    'hero.exploreOffers': 'استكشف العروض',
    'hero.aiSkinTest': 'اختبار البشرة الذكي',
    'hero.freeShipping': 'شحن مجاني',
    'hero.freeShippingDesc': 'للطلبات فوق 200 ريال',
    'hero.originalProducts': 'منتجات أصلية',
    'hero.originalProductsDesc': '100% مضمونة الجودة',
    'hero.fastDelivery': 'توصيل سريع',
    'hero.fastDeliveryDesc': 'خلال 24 ساعة',
    'hero.customerSupport': 'دعم العملاء',
    'hero.customerSupportDesc': '24/7 متاح دائماً',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.save': 'حفظ',
    'common.cancel': 'إلغاء',
    'common.delete': 'حذف',
    'common.edit': 'تعديل',
    'common.add': 'إضافة',
    'common.view': 'عرض',
    'common.search': 'بحث',
    'common.filter': 'فلترة',
    'common.price': 'السعر',
    'common.name': 'الاسم',
    'common.email': 'البريد الإلكتروني',
    'common.phone': 'رقم الهاتف',
    'common.address': 'العنوان',
    'common.status': 'الحالة',
    'common.actions': 'الإجراءات',
    'common.confirm': 'تأكيد',
    'common.close': 'إغلاق',
    
    // Admin Dashboard
    'admin.dashboard': 'لوحة الإدارة',
    'admin.overview': 'نظرة عامة',
    'admin.products': 'المنتجات',
    'admin.orders': 'الطلبات',
    'admin.customers': 'العملاء',
    'admin.analytics': 'التحليلات',
    'admin.marketing': 'التسويق',
    'admin.content': 'المحتوى',
    'admin.reports': 'التقارير',
    'admin.settings': 'الإعدادات',
    'admin.addProduct': 'إضافة منتج',
    'admin.editProduct': 'تعديل منتج',
    'admin.deleteProduct': 'حذف منتج',
    'admin.addCustomer': 'إضافة عميل',
    'admin.editCustomer': 'تعديل عميل',
    'admin.deleteCustomer': 'حذف عميل',
    'admin.addOrder': 'إضافة طلب',
    'admin.editOrder': 'تعديل طلب',
    'admin.deleteOrder': 'حذف طلب',
    'admin.confirmDelete': 'هل أنت متأكد من الحذف؟',
    'admin.deleteWarning': 'هذا الإجراء لا يمكن التراجع عنه',
    
    // Wishlist
    'wishlist.title': 'المنتجات المفضلة',
    'wishlist.empty': 'قائمة المفضلة فارغة',
    'wishlist.emptyDesc': 'ابدأ بإضافة منتجاتك المفضلة لتجدها هنا',
    'wishlist.addToCart': 'أضف للسلة',
    'wishlist.removeFromWishlist': 'إزالة من المفضلة',
    'wishlist.addAllToCart': 'إضافة الكل للسلة',
    'wishlist.clearWishlist': 'مسح قائمة المفضلة',
    'wishlist.continueShopping': 'متابعة التسوق',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.blog': 'Blog',
    'nav.offers': 'Offers',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.startShopping': 'Start Shopping',
    
    // Hero Section
    'hero.title': 'Your Beauty Starts Here',
    'hero.subtitle': 'Discover advanced beauty and skincare products with AI technology',
    'hero.description': 'An integrated platform offering the best skincare and beauty products with smart personal recommendations',
    'hero.shopNow': 'Shop Now',
    'hero.exploreOffers': 'Explore Offers',
    'hero.aiSkinTest': 'AI Skin Test',
    'hero.freeShipping': 'Free Shipping',
    'hero.freeShippingDesc': 'On orders over 200 SAR',
    'hero.originalProducts': 'Original Products',
    'hero.originalProductsDesc': '100% Quality Guaranteed',
    'hero.fastDelivery': 'Fast Delivery',
    'hero.fastDeliveryDesc': 'Within 24 hours',
    'hero.customerSupport': 'Customer Support',
    'hero.customerSupportDesc': '24/7 Always Available',
    
    // Common
    'common.loading': 'Loading...',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.add': 'Add',
    'common.view': 'View',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.price': 'Price',
    'common.name': 'Name',
    'common.email': 'Email',
    'common.phone': 'Phone',
    'common.address': 'Address',
    'common.status': 'Status',
    'common.actions': 'Actions',
    'common.confirm': 'Confirm',
    'common.close': 'Close',
    
    // Admin Dashboard
    'admin.dashboard': 'Admin Dashboard',
    'admin.overview': 'Overview',
    'admin.products': 'Products',
    'admin.orders': 'Orders',
    'admin.customers': 'Customers',
    'admin.analytics': 'Analytics',
    'admin.marketing': 'Marketing',
    'admin.content': 'Content',
    'admin.reports': 'Reports',
    'admin.settings': 'Settings',
    'admin.addProduct': 'Add Product',
    'admin.editProduct': 'Edit Product',
    'admin.deleteProduct': 'Delete Product',
    'admin.addCustomer': 'Add Customer',
    'admin.editCustomer': 'Edit Customer',
    'admin.deleteCustomer': 'Delete Customer',
    'admin.addOrder': 'Add Order',
    'admin.editOrder': 'Edit Order',
    'admin.deleteOrder': 'Delete Order',
    'admin.confirmDelete': 'Are you sure you want to delete?',
    'admin.deleteWarning': 'This action cannot be undone',
    
    // Wishlist
    'wishlist.title': 'Wishlist',
    'wishlist.empty': 'Your wishlist is empty',
    'wishlist.emptyDesc': 'Start adding your favorite products to find them here',
    'wishlist.addToCart': 'Add to Cart',
    'wishlist.removeFromWishlist': 'Remove from Wishlist',
    'wishlist.addAllToCart': 'Add All to Cart',
    'wishlist.clearWishlist': 'Clear Wishlist',
    'wishlist.continueShopping': 'Continue Shopping',
  }
};

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;