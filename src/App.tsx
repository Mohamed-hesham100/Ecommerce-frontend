import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import UserDashboard from './pages/UserDashboard.tsx';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AIAssistantPage from './pages/AIAssistantPage';
import FAQPage from './pages/FAQPage';
import PrivacyPage from './pages/PrivacyPage.tsx';
import TermsPage from './pages/TermsPage';
import ReturnsPage from './pages/ReturnsPage';
import CareersPage from './pages/CareersPage';
import SupportPage from './pages/SupportPage';
import OffersPage from './pages/OffersPage';
import AdminDashboard from './pages/AdminDashboard';
import AuthPage from './pages/AuthPage';
import WishlistPage from './pages/WishlistPage.tsx';
import ChatBot from './components/ai/ChatBot';
import ThemeProvider from './providers/ThemeProvider';
import CartProvider from './providers/CartProvider';
import LanguageProvider from './providers/LanguageProvider';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CartProvider>
          <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-arabic transition-colors duration-300">
            <Router>
              <Header />
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/product/:id" element={<ProductDetailsPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/dashboard" element={<UserDashboard />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/ai-assistant" element={<AIAssistantPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/returns" element={<ReturnsPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/offers" element={<OffersPage />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/auth" element={<AuthPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                </Routes>
              </AnimatePresence>
              <Footer />
              <ChatBot />
            </Router>
          </div>
        </CartProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;