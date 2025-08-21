import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../providers/ThemeProvider";
import {
  BarChart3,
  Users,
  Package,
  ShoppingCart,
  TrendingUp,
  DollarSign,
  Plus,
  Edit3,
  Trash2,
  Eye,
  Search,
  Filter,
  Download,
  Settings,
  Target,
  Award,
  MessageSquare,
  AlertTriangle,
  Save,
  X,
  FileText,
  Image,
  Video,
} from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AdminDashboard = () => {
  const { isDark } = useTheme();
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const tabs = [
    {
      id: "overview",
      label: language === "ar" ? "نظرة عامة" : "Overview",
      icon: BarChart3,
    },
    {
      id: "products",
      label: language === "ar" ? "المنتجات" : "Products",
      icon: Package,
    },
    {
      id: "orders",
      label: language === "ar" ? "الطلبات" : "Orders",
      icon: ShoppingCart,
    },
    {
      id: "customers",
      label: language === "ar" ? "العملاء" : "Customers",
      icon: Users,
    },
    {
      id: "analytics",
      label: language === "ar" ? "التحليلات" : "Analytics",
      icon: TrendingUp,
    },
    {
      id: "marketing",
      label: language === "ar" ? "التسويق" : "Marketing",
      icon: Target,
    },
    {
      id: "content",
      label: language === "ar" ? "المحتوى" : "Content",
      icon: MessageSquare,
    },
    {
      id: "reports",
      label: language === "ar" ? "التقارير" : "Reports",
      icon: FileText,
    },
    {
      id: "settings",
      label: language === "ar" ? "الإعدادات" : "Settings",
      icon: Settings,
    },
  ];

  const stats = [
    {
      title: language === "ar" ? "إجمالي المبيعات" : "Total Sales",
      value: "2,847,392",
      change: "+12.5%",
      icon: DollarSign,
      color: "emerald",
      currency: language === "ar" ? "ر.س" : "SAR",
    },
    {
      title: language === "ar" ? "الطلبات الجديدة" : "New Orders",
      value: "1,247",
      change: "+8.2%",
      icon: ShoppingCart,
      color: "blue",
    },
    {
      title: language === "ar" ? "العملاء النشطين" : "Active Customers",
      value: "8,429",
      change: "+15.3%",
      icon: Users,
      color: "purple",
    },
    {
      title: language === "ar" ? "معدل التحويل" : "Conversion Rate",
      value: "3.24%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "amber",
    },
    {
      title: language === "ar" ? "متوسط قيمة الطلب" : "Average Order Value",
      value: "342",
      change: "+5.7%",
      icon: Award,
      color: "pink",
      currency: language === "ar" ? "ر.س" : "SAR",
    },
    {
      title: language === "ar" ? "المنتجات المباعة" : "Products Sold",
      value: "12,847",
      change: "+18.9%",
      icon: Package,
      color: "cyan",
    },
  ];

  const [products, setProducts] = useState([
    {
      id: 1,
      name:
        language === "ar"
          ? "سيروم فيتامين سي المضاد للأكسدة"
          : "Vitamin C Antioxidant Serum",
      category: language === "ar" ? "العناية بالبشرة" : "Skincare",
      price: 299,
      stock: 45,
      sales: 156,
      status: "active",
      image:
        "https://images.pexels.com/photos/7625055/pexels-photo-7625055.jpeg",
      description:
        language === "ar"
          ? "سيروم مركز بفيتامين سي"
          : "Concentrated Vitamin C serum",
      brand: language === "ar" ? "لوريال" : "L'Oreal",
    },
    {
      id: 2,
      name:
        language === "ar"
          ? "كريم الترطيب المكثف للبشرة الجافة"
          : "Intensive Moisturizing Cream",
      category: language === "ar" ? "العناية بالبشرة" : "Skincare",
      price: 189,
      stock: 23,
      sales: 89,
      status: "active",
      image:
        "https://images.pexels.com/photos/7625084/pexels-photo-7625084.jpeg",
      description:
        language === "ar" ? "كريم ترطيب مكثف" : "Intensive moisturizing cream",
      brand: language === "ar" ? "نيفيا" : "Nivea",
    },
    {
      id: 3,
      name:
        language === "ar"
          ? "ماسك الطين المنقي للبشرة الدهنية"
          : "Purifying Clay Mask",
      category: language === "ar" ? "العناية بالبشرة" : "Skincare",
      price: 159,
      stock: 0,
      sales: 203,
      status: "out_of_stock",
      image:
        "https://images.pexels.com/photos/7625051/pexels-photo-7625051.jpeg",
      description: language === "ar" ? "ماسك طين منقي" : "Purifying clay mask",
      brand: language === "ar" ? "غارنييه" : "Garnier",
    },
  ]);

  const [orders, setOrders] = useState([
    {
      id: "#12345",
      customer: language === "ar" ? "سارة أحمد" : "Sarah Ahmed",
      date: "2024-01-20",
      total: 567,
      status: "pending",
      items: 3,
      payment: "card",
      address:
        language === "ar"
          ? "الرياض، المملكة العربية السعودية"
          : "Riyadh, Saudi Arabia",
    },
    {
      id: "#12344",
      customer: language === "ar" ? "فاطمة محمد" : "Fatima Mohammed",
      date: "2024-01-19",
      total: 234,
      status: "shipped",
      items: 2,
      payment: "cod",
      address:
        language === "ar"
          ? "جدة، المملكة العربية السعودية"
          : "Jeddah, Saudi Arabia",
    },
    {
      id: "#12343",
      customer: language === "ar" ? "نورا خالد" : "Nora Khalid",
      date: "2024-01-18",
      total: 789,
      status: "delivered",
      items: 5,
      payment: "apple_pay",
      address:
        language === "ar"
          ? "الدمام، المملكة العربية السعودية"
          : "Dammam, Saudi Arabia",
    },
  ]);

  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: language === "ar" ? "سارة أحمد" : "Sarah Ahmed",
      email: "sara@example.com",
      phone: "+966501234567",
      orders: 12,
      spent: 3420,
      joined: "2023-06-15",
      status: "vip",
      location: language === "ar" ? "الرياض" : "Riyadh",
      lastOrder: "2024-01-20",
    },
    {
      id: 2,
      name: language === "ar" ? "فاطمة محمد" : "Fatima Mohammed",
      email: "fatima@example.com",
      phone: "+966501234568",
      orders: 8,
      spent: 1890,
      joined: "2023-08-22",
      status: "regular",
      location: language === "ar" ? "جدة" : "Jeddah",
      lastOrder: "2024-01-19",
    },
    {
      id: 3,
      name: language === "ar" ? "نورا خالد" : "Nora Khalid",
      email: "nora@example.com",
      phone: "+966501234569",
      orders: 15,
      spent: 5670,
      joined: "2023-04-10",
      status: "vip",
      location: language === "ar" ? "الدمام" : "Dammam",
      lastOrder: "2024-01-18",
    },
  ]);

  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: language === "ar" ? "عرض الصيف الكبير" : "Summer Sale Campaign",
      type: "discount",
      status: "active",
      budget: 50000,
      spent: 32000,
      clicks: 15420,
      conversions: 234,
      startDate: "2024-01-01",
      endDate: "2024-02-01",
    },
    {
      id: 2,
      name: language === "ar" ? "حملة العملاء الجدد" : "New Customer Campaign",
      type: "welcome",
      status: "active",
      budget: 25000,
      spent: 18500,
      clicks: 8930,
      conversions: 156,
      startDate: "2024-01-15",
      endDate: "2024-03-15",
    },
  ]);

  const handleAddItem = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (activeTab === "products") {
      const newProduct = {
        id: Date.now(),
        ...formData,
        sales: 0,
        status: "active",
      };
      setProducts((prev) => [...prev, newProduct]);
    } else if (activeTab === "customers") {
      const newCustomer = {
        id: Date.now(),
        ...formData,
        orders: 0,
        spent: 0,
        joined: new Date().toISOString().split("T")[0],
        status: "regular",
        lastOrder: null,
      };
      setCustomers((prev) => [...prev, newCustomer]);
    } else if (activeTab === "orders") {
      const newOrder = {
        id: `#${Date.now()}`,
        ...formData,
        date: new Date().toISOString().split("T")[0],
        status: "pending",
      };
      setOrders((prev) => [...prev, newOrder]);
    } else if (activeTab === "marketing") {
      const newCampaign = {
        id: Date.now(),
        ...formData,
        spent: 0,
        clicks: 0,
        conversions: 0,
        status: "active",
      };
      setCampaigns((prev) => [...prev, newCampaign]);
    }

    setIsLoading(false);
    setShowAddModal(false);
    setFormData({});
  };

  const handleEditItem = (item: any) => {
    setSelectedItem(item);
    setFormData(item);
    setShowEditModal(true);
  };

  const handleUpdateItem = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (activeTab === "products") {
      setProducts((prev) =>
        prev.map((p) => (p.id === selectedItem.id ? { ...p, ...formData } : p))
      );
    } else if (activeTab === "customers") {
      setCustomers((prev) =>
        prev.map((c) => (c.id === selectedItem.id ? { ...c, ...formData } : c))
      );
    } else if (activeTab === "orders") {
      setOrders((prev) =>
        prev.map((o) => (o.id === selectedItem.id ? { ...o, ...formData } : o))
      );
    } else if (activeTab === "marketing") {
      setCampaigns((prev) =>
        prev.map((c) => (c.id === selectedItem.id ? { ...c, ...formData } : c))
      );
    }

    setIsLoading(false);
    setShowEditModal(false);
    setFormData({});
    setSelectedItem(null);
  };

  const handleViewItem = (item: any) => {
    setSelectedItem(item);
    setShowViewModal(true);
  };

  const handleDeleteItem = (item: any) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (activeTab === "products") {
      setProducts((prev) => prev.filter((p) => p.id !== selectedItem.id));
    } else if (activeTab === "customers") {
      setCustomers((prev) => prev.filter((c) => c.id !== selectedItem.id));
    } else if (activeTab === "orders") {
      setOrders((prev) => prev.filter((o) => o.id !== selectedItem.id));
    } else if (activeTab === "marketing") {
      setCampaigns((prev) => prev.filter((c) => c.id !== selectedItem.id));
    }

    setIsLoading(false);
    setShowDeleteModal(false);
    setSelectedItem(null);
  };

  const handleUpdateStatus = (id: string, newStatus: string) => {
    if (activeTab === "orders") {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === id ? { ...order, status: newStatus } : order
        )
      );
    } else if (activeTab === "products") {
      setProducts((prev) =>
        prev.map((product) =>
          product.id.toString() === id
            ? { ...product, status: newStatus }
            : product
        )
      );
    }
  };

  const handleBulkAction = async (action: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (action === "delete") {
      if (activeTab === "products") {
        setProducts((prev) =>
          prev.filter((p) => !selectedItems.includes(p.id))
        );
      } else if (activeTab === "customers") {
        setCustomers((prev) =>
          prev.filter((c) => !selectedItems.includes(c.id))
        );
      } else if (activeTab === "orders") {
        setOrders((prev) =>
          prev.filter(
            (o) => !selectedItems.includes(parseInt(o.id.replace("#", "")))
          )
        );
      }
    }

    setIsLoading(false);
    setSelectedItems([]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
      case "delivered":
      case "vip":
        return "text-green-600 bg-green-100";
      case "pending":
      case "regular":
        return "text-amber-600 bg-amber-100";
      case "shipped":
        return "text-blue-600 bg-blue-100";
      case "cancelled":
      case "out_of_stock":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusText = (status: string) => {
    const statusMap = {
      ar: {
        active: "نشط",
        pending: "قيد الانتظار",
        shipped: "تم الشحن",
        delivered: "تم التسليم",
        cancelled: "ملغي",
        out_of_stock: "نفد المخزون",
        vip: "VIP",
        regular: "عادي",
      },
      en: {
        active: "Active",
        pending: "Pending",
        shipped: "Shipped",
        delivered: "Delivered",
        cancelled: "Cancelled",
        out_of_stock: "Out of Stock",
        vip: "VIP",
        regular: "Regular",
      },
    };
    return statusMap[language][status] || status;
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // const data = [
  //   { month: "يناير", sales: 4000, orders: 240 },
  //   { month: "فبراير", sales: 3200, orders: 180 },
  //   { month: "مارس", sales: 4800, orders: 300 },
  //   { month: "إبريل", sales: 5000, orders: 350 },
  //   { month: "مايو", sales: 4600, orders: 290 },
  //   { month: "يونيو", sales: 5200, orders: 370 },
  //   { month: "يوليو", sales: 6100, orders: 420 },
  // ];

  return (
    <motion.div
      className={`min-h-screen pt-24 px-4 lg:px-8 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-gray-50 to-white"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className={`text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            لوحة الإدارة
          </h1>
          <p className="text-xl text-gray-600">
            {language === "ar"
              ? "إدارة شاملة لمنصة بيوتي لاب"
              : "Comprehensive management for Beauty Lab platform"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1 mb-16"
            initial={{ x: language === "ar" ? 50 : -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50 sticky top-32">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 p-4 rounded-2xl text-${
                      language === "ar" ? "right" : "left"
                    } transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                        : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
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
          <div className="lg:col-span-4 mb-16">
            <AnimatePresence mode="wait">
              {/* Overview */}
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`w-12 h-12 bg-${stat.color}-100 rounded-2xl flex items-center justify-center`}
                          >
                            <stat.icon
                              className={`w-6 h-6 text-${stat.color}-600`}
                            />
                          </div>
                          <span className="text-green-600 text-sm font-semibold">
                            {stat.change}
                          </span>
                        </div>
                        <h3 className="text-gray-600 text-sm mb-2">
                          {stat.title}
                        </h3>
                        <p className="text-3xl font-bold text-gray-900">
                          {stat.value} {stat.currency && stat.currency}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        {language === "ar"
                          ? "الطلبات الأخيرة"
                          : "Recent Orders"}
                      </h3>
                      <div className="space-y-4">
                        {orders.slice(0, 5).map((order) => (
                          <div
                            key={order.id}
                            className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                          >
                            <div className="w-10 h-10 bg-emerald-100 rounded-2xl flex items-center justify-center">
                              <ShoppingCart className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900">
                                {order.id}
                              </div>
                              <div className="text-sm text-gray-600">
                                {order.customer}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-emerald-600">
                                {order.total}{" "}
                                {language === "ar" ? "ر.س" : "SAR"}
                              </div>
                              <div
                                className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                                  order.status
                                )}`}
                              >
                                {getStatusText(order.status)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        {language === "ar" ? "أفضل المنتجات" : "Top Products"}
                      </h3>
                      <div className="space-y-4">
                        {products.slice(0, 5).map((product) => (
                          <div
                            key={product.id}
                            className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded-2xl"
                            />
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 line-clamp-1">
                                {product.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {product.sales}{" "}
                                {language === "ar" ? "مبيعات" : "sales"}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-emerald-600">
                                {product.price}{" "}
                                {language === "ar" ? "ر.س" : "SAR"}
                              </div>
                              <div className="text-sm text-gray-600">
                                {product.stock}{" "}
                                {language === "ar" ? "متوفر" : "in stock"}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Products Management */}
              {activeTab === "products" && (
                <motion.div
                  key="products"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl font-bold text-gray-900">
                        {language === "ar"
                          ? "إدارة المنتجات"
                          : "Products Management"}
                      </h2>
                      <button
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                      >
                        <Plus className="w-5 h-5" />
                        {language === "ar" ? "إضافة منتج" : "Add Product"}
                      </button>
                    </div>

                    {/* Search and Filters */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                      <div className="relative flex-1">
                        <Search
                          className={`absolute ${
                            language === "ar" ? "right-4" : "left-4"
                          } top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`}
                        />
                        <input
                          type="text"
                          placeholder={
                            language === "ar"
                              ? "ابحث في المنتجات..."
                              : "Search products..."
                          }
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className={`w-full ${
                            language === "ar" ? "pl-4 pr-12" : "pr-4 pl-12"
                          } py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500`}
                        />
                      </div>
                      <button className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors">
                        <Filter className="w-5 h-5" />
                        {language === "ar" ? "فلترة" : "Filter"}
                      </button>
                      <button className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors">
                        <Download className="w-5 h-5" />
                        {language === "ar" ? "تصدير" : "Export"}
                      </button>
                    </div>

                    {/* Bulk Actions */}
                    {selectedItems.length > 0 && (
                      <div className="flex items-center gap-4 mb-6 p-4 bg-emerald-50 rounded-2xl">
                        <span className="text-emerald-700 font-semibold">
                          {selectedItems.length}{" "}
                          {language === "ar" ? "عنصر محدد" : "items selected"}
                        </span>
                        <button
                          onClick={() => handleBulkAction("delete")}
                          className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
                        >
                          {language === "ar" ? "حذف المحدد" : "Delete Selected"}
                        </button>
                      </div>
                    )}

                    {/* Products Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-right py-4 px-2">
                              <input
                                type="checkbox"
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedItems(products.map((p) => p.id));
                                  } else {
                                    setSelectedItems([]);
                                  }
                                }}
                                className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500"
                              />
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "المنتج" : "Product"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "الفئة" : "Category"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "السعر" : "Price"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "المخزون" : "Stock"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "الحالة" : "Status"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "الإجراءات" : "Actions"}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((product) => (
                            <tr
                              key={product.id}
                              className="border-b border-gray-100 hover:bg-gray-50"
                            >
                              <td className="py-4 px-2">
                                <input
                                  type="checkbox"
                                  checked={selectedItems.includes(product.id)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setSelectedItems((prev) => [
                                        ...prev,
                                        product.id,
                                      ]);
                                    } else {
                                      setSelectedItems((prev) =>
                                        prev.filter((id) => id !== product.id)
                                      );
                                    }
                                  }}
                                  className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500"
                                />
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-12 h-12 object-cover rounded-2xl"
                                  />
                                  <div>
                                    <div className="font-semibold text-gray-900 line-clamp-1">
                                      {product.name}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      {product.brand}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 px-4 text-gray-700">
                                {product.category}
                              </td>
                              <td className="py-4 px-4 font-bold text-emerald-600">
                                {product.price}{" "}
                                {language === "ar" ? "ر.س" : "SAR"}
                              </td>
                              <td className="py-4 px-4">
                                <span
                                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                    product.stock > 20
                                      ? "bg-green-100 text-green-600"
                                      : product.stock > 0
                                      ? "bg-amber-100 text-amber-600"
                                      : "bg-red-100 text-red-600"
                                  }`}
                                >
                                  {product.stock}
                                </span>
                              </td>
                              <td className="py-4 px-4">
                                <span
                                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                                    product.status
                                  )}`}
                                >
                                  {getStatusText(product.status)}
                                </span>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => handleViewItem(product)}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                                  >
                                    <Eye className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleEditItem(product)}
                                    className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
                                  >
                                    <Edit3 className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteItem(product)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Orders Management */}
              {activeTab === "orders" && (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl font-bold text-gray-900">
                        {language === "ar"
                          ? "إدارة الطلبات"
                          : "Orders Management"}
                      </h2>
                      <button
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                      >
                        <Plus className="w-5 h-5" />
                        {language === "ar" ? "إضافة طلب" : "Add Order"}
                      </button>
                    </div>

                    {/* Orders Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "رقم الطلب" : "Order ID"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "العميل" : "Customer"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "التاريخ" : "Date"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "المجموع" : "Total"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "الحالة" : "Status"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "الإجراءات" : "Actions"}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order) => (
                            <tr
                              key={order.id}
                              className="border-b border-gray-100 hover:bg-gray-50"
                            >
                              <td className="py-4 px-4 font-semibold text-gray-900">
                                {order.id}
                              </td>
                              <td className="py-4 px-4 text-gray-700">
                                {order.customer}
                              </td>
                              <td className="py-4 px-4 text-gray-700">
                                {order.date}
                              </td>
                              <td className="py-4 px-4 font-bold text-emerald-600">
                                {order.total}{" "}
                                {language === "ar" ? "ر.س" : "SAR"}
                              </td>
                              <td className="py-4 px-4">
                                <select
                                  value={order.status}
                                  onChange={(e) =>
                                    handleUpdateStatus(order.id, e.target.value)
                                  }
                                  className={`px-3 py-1 rounded-full text-sm font-semibold border-0 ${getStatusColor(
                                    order.status
                                  )}`}
                                >
                                  <option value="pending">
                                    {language === "ar"
                                      ? "قيد الانتظار"
                                      : "Pending"}
                                  </option>
                                  <option value="shipped">
                                    {language === "ar" ? "تم الشحن" : "Shipped"}
                                  </option>
                                  <option value="delivered">
                                    {language === "ar"
                                      ? "تم التسليم"
                                      : "Delivered"}
                                  </option>
                                  <option value="cancelled">
                                    {language === "ar" ? "ملغي" : "Cancelled"}
                                  </option>
                                </select>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => handleViewItem(order)}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                                  >
                                    <Eye className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleEditItem(order)}
                                    className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
                                  >
                                    <Edit3 className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteItem(order)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Customers Management */}
              {activeTab === "customers" && (
                <motion.div
                  key="customers"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl font-bold text-gray-900">
                        {language === "ar"
                          ? "إدارة العملاء"
                          : "Customers Management"}
                      </h2>
                      <button
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                      >
                        <Plus className="w-5 h-5" />
                        {language === "ar" ? "إضافة عميل" : "Add Customer"}
                      </button>
                    </div>

                    {/* Customers Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "العميل" : "Customer"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar"
                                ? "البريد الإلكتروني"
                                : "Email"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "الطلبات" : "Orders"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar"
                                ? "المبلغ المنفق"
                                : "Total Spent"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "الحالة" : "Status"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "الإجراءات" : "Actions"}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {customers.map((customer) => (
                            <tr
                              key={customer.id}
                              className="border-b border-gray-100 hover:bg-gray-50"
                            >
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold">
                                    {customer.name.charAt(0)}
                                  </div>
                                  <div>
                                    <div className="font-semibold text-gray-900">
                                      {customer.name}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      {customer.location}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 px-4 text-gray-700">
                                {customer.email}
                              </td>
                              <td className="py-4 px-4 text-gray-700">
                                {customer.orders}
                              </td>
                              <td className="py-4 px-4 font-bold text-emerald-600">
                                {customer.spent}{" "}
                                {language === "ar" ? "ر.س" : "SAR"}
                              </td>
                              <td className="py-4 px-4">
                                <span
                                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                                    customer.status
                                  )}`}
                                >
                                  {getStatusText(customer.status)}
                                </span>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => handleViewItem(customer)}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                                  >
                                    <Eye className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleEditItem(customer)}
                                    className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
                                  >
                                    <Edit3 className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteItem(customer)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Analytics */}
              {activeTab === "analytics" && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="space-y-8">
                    <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50">
                      <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        {language === "ar"
                          ? "تحليلات المبيعات"
                          : "Sales Analytics"}
                      </h2>

                      {/* الكروت العلوية */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="text-center p-6 bg-emerald-50 rounded-2xl">
                          <div className="text-3xl font-bold text-emerald-600 mb-2">
                            2.8M
                          </div>
                          <div className="text-gray-600">
                            {language === "ar"
                              ? "إجمالي المبيعات"
                              : "Total Sales"}
                          </div>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-2xl">
                          <div className="text-3xl font-bold text-blue-600 mb-2">
                            1,247
                          </div>
                          <div className="text-gray-600">
                            {language === "ar"
                              ? "طلبات هذا الشهر"
                              : "Orders This Month"}
                          </div>
                        </div>
                        <div className="text-center p-6 bg-purple-50 rounded-2xl">
                          <div className="text-3xl font-bold text-purple-600 mb-2">
                            8,429
                          </div>
                          <div className="text-gray-600">
                            {language === "ar"
                              ? "عملاء نشطين"
                              : "Active Customers"}
                          </div>
                        </div>
                        <div className="text-center p-6 bg-amber-50 rounded-2xl">
                          <div className="text-3xl font-bold text-amber-600 mb-2">
                            3.24%
                          </div>
                          <div className="text-gray-600">
                            {language === "ar"
                              ? "معدل التحويل"
                              : "Conversion Rate"}
                          </div>
                        </div>
                      </div>

                      {/* الرسوم البيانية المنفصلة */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* إجمالي المبيعات */}
                        <div className="bg-white rounded-3xl p-6 shadow-md">
                          <h3 className="text-lg font-bold mb-4 text-emerald-600">
                            {language === "ar"
                              ? "إجمالي المبيعات"
                              : "Total Sales"}
                          </h3>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <AreaChart
                                data={[
                                  { month: "Jan", sales: 4000 },
                                  { month: "Feb", sales: 3200 },
                                  { month: "Mar", sales: 4800 },
                                  { month: "Apr", sales: 5000 },
                                  { month: "May", sales: 4600 },
                                  { month: "Jun", sales: 5200 },
                                  { month: "Jul", sales: 6100 },
                                ]}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Area
                                  type="monotone"
                                  dataKey="sales"
                                  stroke="#10b981"
                                  fill="#d1fae5"
                                />
                              </AreaChart>
                            </ResponsiveContainer>
                          </div>
                        </div>

                        {/* الطلبات */}
                        <div className="bg-white rounded-3xl p-6 shadow-md">
                          <h3 className="text-lg font-bold mb-4 text-blue-600">
                            {language === "ar"
                              ? "طلبات هذا الشهر"
                              : "Orders This Month"}
                          </h3>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart
                                data={[
                                  { day: "Sat", orders: 120 },
                                  { day: "Sun", orders: 80 },
                                  { day: "Mon", orders: 150 },
                                  { day: "Tue", orders: 200 },
                                  { day: "Wed", orders: 90 },
                                  { day: "Thu", orders: 170 },
                                  { day: "Fri", orders: 220 },
                                ]}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Bar
                                  dataKey="orders"
                                  fill="#3b82f6"
                                  radius={[8, 8, 0, 0]}
                                />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>

                        {/* العملاء النشطين */}
                        <div className="bg-white rounded-3xl p-6 shadow-md">
                          <h3 className="text-lg font-bold mb-4 text-purple-600">
                            {language === "ar"
                              ? "العملاء النشطين"
                              : "Active Customers"}
                          </h3>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart
                                data={[
                                  { week: "W1", customers: 1200 },
                                  { week: "W2", customers: 1600 },
                                  { week: "W3", customers: 1400 },
                                  { week: "W4", customers: 1800 },
                                ]}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="week" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                  type="monotone"
                                  dataKey="customers"
                                  stroke="#8b5cf6"
                                  strokeWidth={3}
                                  dot={{ r: 6 }}
                                />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                        </div>

                        {/* معدل التحويل */}
                        <div className="bg-white rounded-3xl p-6 shadow-md">
                          <h3 className="text-lg font-bold mb-4 text-amber-600">
                            {language === "ar"
                              ? "معدل التحويل"
                              : "Conversion Rate"}
                          </h3>
                          <div className="h-64 flex justify-center items-center">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={[
                                    { name: "عملاء", value: 320 },
                                    { name: "زوار فقط", value: 9680 },
                                  ]}
                                  dataKey="value"
                                  cx="50%"
                                  cy="50%"
                                  outerRadius={100}
                                  label
                                >
                                  <Cell fill="#f59e0b" />
                                  <Cell fill="#fef3c7" />
                                </Pie>
                                <Tooltip />
                                <Legend />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Marketing */}
              {activeTab === "marketing" && (
                <motion.div
                  key="marketing"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl font-bold text-gray-900">
                        {language === "ar"
                          ? "إدارة التسويق"
                          : "Marketing Management"}
                      </h2>
                      <button
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                      >
                        <Plus className="w-5 h-5" />
                        {language === "ar" ? "إضافة حملة" : "Add Campaign"}
                      </button>
                    </div>

                    {/* Campaigns Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar"
                                ? "اسم الحملة"
                                : "Campaign Name"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "النوع" : "Type"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "الميزانية" : "Budget"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "النقرات" : "Clicks"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "الحالة" : "Status"}
                            </th>
                            <th className="text-right py-4 px-4 font-bold text-gray-900">
                              {language === "ar" ? "الإجراءات" : "Actions"}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {campaigns.map((campaign) => (
                            <tr
                              key={campaign.id}
                              className="border-b border-gray-100 hover:bg-gray-50"
                            >
                              <td className="py-4 px-4 font-semibold text-gray-900">
                                {campaign.name}
                              </td>
                              <td className="py-4 px-4 text-gray-700">
                                {campaign.type}
                              </td>
                              <td className="py-4 px-4 text-gray-700">
                                {campaign.budget}{" "}
                                {language === "ar" ? "ر.س" : "SAR"}
                              </td>
                              <td className="py-4 px-4 text-gray-700">
                                {campaign.clicks}
                              </td>
                              <td className="py-4 px-4">
                                <span
                                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                                    campaign.status
                                  )}`}
                                >
                                  {getStatusText(campaign.status)}
                                </span>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => handleViewItem(campaign)}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                                  >
                                    <Eye className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleEditItem(campaign)}
                                    className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
                                  >
                                    <Edit3 className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteItem(campaign)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Content Management */}
              {activeTab === "content" && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      {language === "ar"
                        ? "إدارة المحتوى"
                        : "Content Management"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 bg-emerald-50 rounded-2xl text-center">
                        <MessageSquare className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {language === "ar" ? "المقالات" : "Articles"}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          24{" "}
                          {language === "ar"
                            ? "مقال منشور"
                            : "published articles"}
                        </p>
                        <button className="px-4 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors">
                          {language === "ar"
                            ? "إدارة المقالات"
                            : "Manage Articles"}
                        </button>
                      </div>

                      <div className="p-6 bg-blue-50 rounded-2xl text-center">
                        <Image className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {language === "ar" ? "الصور" : "Images"}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          156 {language === "ar" ? "صورة" : "images"}
                        </p>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
                          {language === "ar" ? "إدارة الصور" : "Manage Images"}
                        </button>
                      </div>

                      <div className="p-6 bg-purple-50 rounded-2xl text-center">
                        <Video className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {language === "ar" ? "الفيديوهات" : "Videos"}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          12 {language === "ar" ? "فيديو" : "videos"}
                        </p>
                        <button className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors">
                          {language === "ar"
                            ? "إدارة الفيديوهات"
                            : "Manage Videos"}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Reports */}
              {activeTab === "reports" && (
                <motion.div
                  key="reports"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      {language === "ar" ? "التقارير" : "Reports"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 border border-gray-200 rounded-2xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {language === "ar"
                            ? "تقرير المبيعات"
                            : "Sales Report"}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {language === "ar"
                            ? "تقرير شامل عن المبيعات والأرباح"
                            : "Comprehensive sales and profit report"}
                        </p>
                        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors">
                          <Download className="w-4 h-4" />
                          {language === "ar"
                            ? "تحميل التقرير"
                            : "Download Report"}
                        </button>
                      </div>

                      <div className="p-6 border border-gray-200 rounded-2xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {language === "ar"
                            ? "تقرير العملاء"
                            : "Customer Report"}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {language === "ar"
                            ? "تحليل سلوك العملاء والولاء"
                            : "Customer behavior and loyalty analysis"}
                        </p>
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
                          <Download className="w-4 h-4" />
                          {language === "ar"
                            ? "تحميل التقرير"
                            : "Download Report"}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Settings */}
              {activeTab === "settings" && (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="space-y-8">
                    <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50">
                      <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        {language === "ar"
                          ? "إعدادات النظام"
                          : "System Settings"}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4">
                            {language === "ar"
                              ? "إعدادات عامة"
                              : "General Settings"}
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-gray-700 font-semibold mb-2">
                                {language === "ar" ? "اسم الموقع" : "Site Name"}
                              </label>
                              <input
                                type="text"
                                defaultValue="بيوتي لاب"
                                className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                              />
                            </div>
                            <div>
                              <label className="block text-gray-700 font-semibold mb-2">
                                {language === "ar"
                                  ? "البريد الإلكتروني"
                                  : "Email"}
                              </label>
                              <input
                                type="email"
                                defaultValue="admin@beautylab.sa"
                                className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4">
                            {language === "ar"
                              ? "إعدادات الشحن"
                              : "Shipping Settings"}
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-gray-700 font-semibold mb-2">
                                {language === "ar"
                                  ? "تكلفة الشحن"
                                  : "Shipping Cost"}
                              </label>
                              <input
                                type="number"
                                defaultValue="25"
                                className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                              />
                            </div>
                            <div>
                              <label className="block text-gray-700 font-semibold mb-2">
                                {language === "ar"
                                  ? "الحد الأدنى للشحن المجاني"
                                  : "Free Shipping Minimum"}
                              </label>
                              <input
                                type="number"
                                defaultValue="200"
                                className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300">
                          {language === "ar"
                            ? "حفظ الإعدادات"
                            : "Save Settings"}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Add Modal */}
        <AnimatePresence>
          {showAddModal && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddModal(false)}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === "ar" ? "إضافة" : "Add"}{" "}
                    {activeTab === "products"
                      ? language === "ar"
                        ? "منتج"
                        : "Product"
                      : activeTab === "customers"
                      ? language === "ar"
                        ? "عميل"
                        : "Customer"
                      : activeTab === "orders"
                      ? language === "ar"
                        ? "طلب"
                        : "Order"
                      : activeTab === "marketing"
                      ? language === "ar"
                        ? "حملة"
                        : "Campaign"
                      : ""}
                  </h3>
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="p-2 text-gray-600 hover:text-gray-900"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {activeTab === "products" && (
                    <>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          {language === "ar" ? "اسم المنتج" : "Product Name"}
                        </label>
                        <input
                          type="text"
                          value={formData.name || ""}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                          placeholder={
                            language === "ar"
                              ? "أدخل اسم المنتج"
                              : "Enter product name"
                          }
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            {language === "ar" ? "السعر" : "Price"}
                          </label>
                          <input
                            type="number"
                            value={formData.price || ""}
                            onChange={(e) =>
                              handleInputChange(
                                "price",
                                parseFloat(e.target.value)
                              )
                            }
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            {language === "ar" ? "المخزون" : "Stock"}
                          </label>
                          <input
                            type="number"
                            value={formData.stock || ""}
                            onChange={(e) =>
                              handleInputChange(
                                "stock",
                                parseInt(e.target.value)
                              )
                            }
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          {language === "ar" ? "الفئة" : "Category"}
                        </label>
                        <select
                          value={formData.category || ""}
                          onChange={(e) =>
                            handleInputChange("category", e.target.value)
                          }
                          className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                        >
                          <option value="">
                            {language === "ar"
                              ? "اختر الفئة"
                              : "Select Category"}
                          </option>
                          <option
                            value={
                              language === "ar" ? "العناية بالبشرة" : "Skincare"
                            }
                          >
                            {language === "ar" ? "العناية بالبشرة" : "Skincare"}
                          </option>
                          <option
                            value={
                              language === "ar" ? "العناية بالشعر" : "Hair Care"
                            }
                          >
                            {language === "ar" ? "العناية بالشعر" : "Hair Care"}
                          </option>
                          <option
                            value={language === "ar" ? "المكياج" : "Makeup"}
                          >
                            {language === "ar" ? "المكياج" : "Makeup"}
                          </option>
                        </select>
                      </div>
                    </>
                  )}

                  {activeTab === "customers" && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            {language === "ar" ? "الاسم" : "Name"}
                          </label>
                          <input
                            type="text"
                            value={formData.name || ""}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            {language === "ar" ? "البريد الإلكتروني" : "Email"}
                          </label>
                          <input
                            type="email"
                            value={formData.email || ""}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            {language === "ar" ? "الهاتف" : "Phone"}
                          </label>
                          <input
                            type="tel"
                            value={formData.phone || ""}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            {language === "ar" ? "الموقع" : "Location"}
                          </label>
                          <input
                            type="text"
                            value={formData.location || ""}
                            onChange={(e) =>
                              handleInputChange("location", e.target.value)
                            }
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex gap-4">
                    <button
                      onClick={handleAddItem}
                      disabled={isLoading}
                      className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          {language === "ar" ? "جاري الحفظ..." : "Saving..."}
                        </div>
                      ) : (
                        <>
                          <Save className="w-5 h-5 inline ml-2" />
                          {language === "ar" ? "حفظ" : "Save"}
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => setShowAddModal(false)}
                      className="px-6 py-3 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors"
                    >
                      {language === "ar" ? "إلغاء" : "Cancel"}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Edit Modal */}
        <AnimatePresence>
          {showEditModal && selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEditModal(false)}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === "ar" ? "تعديل" : "Edit"}{" "}
                    {activeTab === "products"
                      ? language === "ar"
                        ? "منتج"
                        : "Product"
                      : activeTab === "customers"
                      ? language === "ar"
                        ? "عميل"
                        : "Customer"
                      : activeTab === "orders"
                      ? language === "ar"
                        ? "طلب"
                        : "Order"
                      : activeTab === "marketing"
                      ? language === "ar"
                        ? "حملة"
                        : "Campaign"
                      : ""}
                  </h3>
                  <button
                    onClick={() => setShowEditModal(false)}
                    className="p-2 text-gray-600 hover:text-gray-900"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {activeTab === "products" && (
                    <>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          {language === "ar" ? "اسم المنتج" : "Product Name"}
                        </label>
                        <input
                          type="text"
                          value={formData.name || ""}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            {language === "ar" ? "السعر" : "Price"}
                          </label>
                          <input
                            type="number"
                            value={formData.price || ""}
                            onChange={(e) =>
                              handleInputChange(
                                "price",
                                parseFloat(e.target.value)
                              )
                            }
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            {language === "ar" ? "المخزون" : "Stock"}
                          </label>
                          <input
                            type="number"
                            value={formData.stock || ""}
                            onChange={(e) =>
                              handleInputChange(
                                "stock",
                                parseInt(e.target.value)
                              )
                            }
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "customers" && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            {language === "ar" ? "الاسم" : "Name"}
                          </label>
                          <input
                            type="text"
                            value={formData.name || ""}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            {language === "ar" ? "البريد الإلكتروني" : "Email"}
                          </label>
                          <input
                            type="email"
                            value={formData.email || ""}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex gap-4">
                    <button
                      onClick={handleUpdateItem}
                      disabled={isLoading}
                      className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          {language === "ar"
                            ? "جاري التحديث..."
                            : "Updating..."}
                        </div>
                      ) : (
                        <>
                          <Save className="w-5 h-5 inline ml-2" />
                          {language === "ar" ? "تحديث" : "Update"}
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => setShowEditModal(false)}
                      className="px-6 py-3 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors"
                    >
                      {language === "ar" ? "إلغاء" : "Cancel"}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View Modal */}
        <AnimatePresence>
          {showViewModal && selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowViewModal(false)}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === "ar" ? "عرض التفاصيل" : "View Details"}
                  </h3>
                  <button
                    onClick={() => setShowViewModal(false)}
                    className="p-2 text-gray-600 hover:text-gray-900"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  {Object.entries(selectedItem).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between py-3 border-b border-gray-100"
                    >
                      <span className="font-semibold text-gray-900 capitalize">
                        {key}:
                      </span>
                      <span className="text-gray-700">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {showDeleteModal && selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDeleteModal(false)}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-md w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {language === "ar" ? "تأكيد الحذف" : "Confirm Delete"}
                  </h3>
                  <p className="text-gray-600 mb-8">
                    {language === "ar"
                      ? "هل أنت متأكد من حذف هذا العنصر؟ لا يمكن التراجع عن هذا الإجراء."
                      : "Are you sure you want to delete this item? This action cannot be undone."}
                  </p>

                  <div className="flex gap-4">
                    <button
                      onClick={confirmDelete}
                      disabled={isLoading}
                      className="flex-1 py-3 bg-red-500 text-white font-bold rounded-2xl hover:bg-red-600 transition-colors disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          {language === "ar" ? "جاري الحذف..." : "Deleting..."}
                        </div>
                      ) : (
                        <>
                          <Trash2 className="w-5 h-5 inline ml-2" />
                          {language === "ar" ? "حذف" : "Delete"}
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => setShowDeleteModal(false)}
                      className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-200 transition-colors"
                    >
                      {language === "ar" ? "إلغاء" : "Cancel"}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
