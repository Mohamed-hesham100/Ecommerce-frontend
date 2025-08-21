import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Package, 
  Heart, 
  MapPin, 
  Bell, 
  Settings, 
  Star,
  Truck,
  CheckCircle,
  Clock,
  Gift,
  Edit3,
  Plus
} from 'lucide-react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: User },
    { id: 'orders', label: 'طلباتي', icon: Package },
    // { id: 'wishlist', label: 'المفضلة', icon: Heart },
    { id: 'addresses', label: 'العناوين', icon: MapPin },
    { id: 'notifications', label: 'الإشعارات', icon: Bell },
    { id: 'settings', label: 'الإعدادات', icon: Settings }
  ];

  const orders = [
    {
      id: '#12345',
      date: '2024-01-15',
      status: 'delivered',
      total: 299,
      items: 3,
      image: 'https://images.pexels.com/photos/7625055/pexels-photo-7625055.jpeg'
    },
    {
      id: '#12344',
      date: '2024-01-10',
      status: 'shipping',
      total: 189,
      items: 2,
      image: 'https://images.pexels.com/photos/7625084/pexels-photo-7625084.jpeg'
    },
    {
      id: '#12343',
      date: '2024-01-05',
      status: 'processing',
      total: 459,
      items: 4,
      image: 'https://images.pexels.com/photos/7625051/pexels-photo-7625051.jpeg'
    }
  ];

  // const wishlistItems = [
  //   {
  //     id: 1,
  //     name: 'سيروم فيتامين سي المضاد للأكسدة',
  //     price: 299,
  //     originalPrice: 399,
  //     image: 'https://images.pexels.com/photos/7625055/pexels-photo-7625055.jpeg',
  //     inStock: true
  //   },
  //   {
  //     id: 2,
  //     name: 'كريم الترطيب المكثف للبشرة الجافة',
  //     price: 189,
  //     originalPrice: 249,
  //     image: 'https://images.pexels.com/photos/7625084/pexels-photo-7625084.jpeg',
  //     inStock: true
  //   },
  //   {
  //     id: 3,
  //     name: 'ماسك الطين المنقي للبشرة الدهنية',
  //     price: 159,
  //     originalPrice: 199,
  //     image: 'https://images.pexels.com/photos/7625051/pexels-photo-7625051.jpeg',
  //     inStock: false
  //   }
  // ];

  const addresses = [
    {
      id: 1,
      type: 'home',
      name: 'المنزل',
      address: 'شارع الملك فهد، الرياض 12345',
      isDefault: true
    },
    {
      id: 2,
      type: 'work',
      name: 'العمل',
      address: 'طريق الملك عبدالعزيز، الرياض 12346',
      isDefault: false
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'order',
      title: 'تم تسليم طلبك',
      message: 'تم تسليم طلب رقم #12345 بنجاح',
      time: '2024-01-15 14:30',
      read: false
    },
    {
      id: 2,
      type: 'offer',
      title: 'عرض خاص',
      message: 'خصم 20% على جميع منتجات العناية بالبشرة',
      time: '2024-01-14 10:00',
      read: true
    },
    {
      id: 3,
      type: 'reminder',
      title: 'تذكير',
      message: 'لا تنس استخدام كود الخصم SAVE15',
      time: '2024-01-13 16:45',
      read: true
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'shipping':
        return <Truck className="w-5 h-5 text-blue-500" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-amber-500" />;
      default:
        return <Package className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'تم التسليم';
      case 'shipping':
        return 'قيد الشحن';
      case 'processing':
        return 'قيد المعالجة';
      default:
        return 'غير محدد';
    }
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">لوحة التحكم</h1>
          <p className="text-xl text-gray-600">مرحباً بك، سارة أحمد</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50 sticky top-32">
              {/* Profile Summary */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">س</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">سارة أحمد</h3>
                <p className="text-gray-600">عضو ذهبي</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-sm text-gray-600">1,250 نقطة</span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-2xl text-right transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-emerald-100 text-emerald-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {/* Overview */}
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                          <Package className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">12</div>
                          <div className="text-gray-600">إجمالي الطلبات</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                          <Heart className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">8</div>
                          <div className="text-gray-600">المنتجات المفضلة</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                          <Gift className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">1,250</div>
                          <div className="text-gray-600">نقاط الولاء</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Orders */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">الطلبات الأخيرة</h2>
                    <div className="space-y-4">
                      {orders.slice(0, 3).map(order => (
                        <div key={order.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                          <img
                            src={order.image}
                            alt="Product"
                            className="w-16 h-16 object-cover rounded-2xl"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-gray-900">{order.id}</span>
                              {getStatusIcon(order.status)}
                              <span className="text-sm text-gray-600">{getStatusText(order.status)}</span>
                            </div>
                            <div className="text-gray-600">{order.date} • {order.items} منتج</div>
                          </div>
                          <div className="text-xl font-bold text-emerald-600">
                            {order.total} ر.س
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Loyalty Program */}
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-8 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">برنامج الولاء</h3>
                        <p className="text-white/90 mb-4">اجمع النقاط واحصل على مكافآت رائعة</p>
                        <div className="flex items-center gap-4">
                          <div className="text-3xl font-bold">1,250</div>
                          <div className="text-white/80">نقطة متاحة</div>
                        </div>
                      </div>
                      <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center">
                        <Gift className="w-12 h-12" />
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="bg-white/20 rounded-full h-2 mb-2">
                        <div className="bg-white rounded-full h-2 w-3/4"></div>
                      </div>
                      <div className="text-sm text-white/80">
                        750 نقطة أخرى للوصول للمستوى البلاتيني
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Orders */}
              {activeTab === 'orders' && (
                <motion.div
                  key="orders"
                  className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">طلباتي</h2>
                  <div className="space-y-6">
                    {orders.map(order => (
                      <div key={order.id} className="border border-gray-200 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-xl font-bold text-gray-900">{order.id}</span>
                            {getStatusIcon(order.status)}
                            <span className="font-semibold text-gray-700">{getStatusText(order.status)}</span>
                          </div>
                          <div className="text-gray-600">{order.date}</div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <img
                            src={order.image}
                            alt="Product"
                            className="w-20 h-20 object-cover rounded-2xl"
                          />
                          <div className="flex-1">
                            <div className="text-gray-600 mb-2">{order.items} منتج</div>
                            <div className="text-2xl font-bold text-emerald-600">{order.total} ر.س</div>
                          </div>
                          <div className="flex gap-2">
                            <button className="px-4 py-2 bg-emerald-100 text-emerald-600 rounded-xl hover:bg-emerald-200 transition-colors duration-300">
                              تتبع الطلب
                            </button>
                            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors duration-300">
                              إعادة الطلب
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Wishlist */}
              {/* {activeTab === 'wishlist' && (
                <motion.div
                  key="wishlist"
                  className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">المنتجات المفضلة</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {wishlistItems.map(item => (
                      <div key={item.id} className="border border-gray-200 rounded-2xl p-6">
                        <div className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-2xl"
                          />
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{item.name}</h3>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-xl font-bold text-emerald-600">{item.price} ر.س</span>
                              {item.originalPrice && (
                                <span className="text-gray-400 line-through">{item.originalPrice} ر.س</span>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <button
                                className={`flex-1 py-2 px-4 rounded-xl font-semibold transition-colors duration-300 ${
                                  item.inStock
                                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                }`}
                                disabled={!item.inStock}
                              >
                                {item.inStock ? 'أضف للسلة' : 'غير متوفر'}
                              </button>
                              <button className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors duration-300">
                                <Heart className="w-5 h-5 fill-current" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )} */}

              {/* Addresses */}
              {activeTab === 'addresses' && (
                <motion.div
                  key="addresses"
                  className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">عناويني</h2>
                    <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-600 transition-colors duration-300">
                      <Plus className="w-5 h-5" />
                      إضافة عنوان جديد
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {addresses.map(address => (
                      <div key={address.id} className="border border-gray-200 rounded-2xl p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                              <MapPin className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-bold text-gray-900">{address.name}</h3>
                                {address.isDefault && (
                                  <span className="px-2 py-1 bg-emerald-100 text-emerald-600 text-xs rounded-full">
                                    افتراضي
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-600">{address.address}</p>
                            </div>
                          </div>
                          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300">
                            <Edit3 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Notifications */}
              {activeTab === 'notifications' && (
                <motion.div
                  key="notifications"
                  className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">الإشعارات</h2>
                  <div className="space-y-4">
                    {notifications.map(notification => (
                      <div
                        key={notification.id}
                        className={`p-6 rounded-2xl border ${
                          notification.read ? 'border-gray-200 bg-white' : 'border-emerald-200 bg-emerald-50'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                            notification.type === 'order' ? 'bg-green-100 text-green-600' :
                            notification.type === 'offer' ? 'bg-amber-100 text-amber-600' :
                            'bg-blue-100 text-blue-600'
                          }`}>
                            {notification.type === 'order' ? <Package className="w-6 h-6" /> :
                             notification.type === 'offer' ? <Gift className="w-6 h-6" /> :
                             <Bell className="w-6 h-6" />}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1">{notification.title}</h3>
                            <p className="text-gray-600 mb-2">{notification.message}</p>
                            <div className="text-sm text-gray-500">{notification.time}</div>
                          </div>
                          {!notification.read && (
                            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Settings */}
              {activeTab === 'settings' && (
                <motion.div
                  key="settings"
                  className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">الإعدادات</h2>
                  
                  <div className="space-y-8">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">المعلومات الشخصية</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">الاسم الأول</label>
                          <input
                            type="text"
                            defaultValue="سارة"
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">الاسم الأخير</label>
                          <input
                            type="text"
                            defaultValue="أحمد"
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">البريد الإلكتروني</label>
                          <input
                            type="email"
                            defaultValue="sara@example.com"
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">رقم الهاتف</label>
                          <input
                            type="tel"
                            defaultValue="+966 50 123 4567"
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Notification Preferences */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">تفضيلات الإشعارات</h3>
                      <div className="space-y-4">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500" />
                          <span>إشعارات الطلبات</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500" />
                          <span>العروض والخصومات</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500" />
                          <span>المنتجات الجديدة</span>
                        </label>
                      </div>
                    </div>

                    {/* Save Button */}
                    <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300">
                      حفظ التغييرات
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserDashboard;