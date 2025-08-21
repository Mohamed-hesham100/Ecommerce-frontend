import  { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Mic, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'مرحباً! أنا مساعدك الذكي في بيوتي لاب. كيف يمكنني مساعدتك اليوم؟',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getBotResponse(inputValue),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('منتج') || input.includes('سعر')) {
      return 'لدينا مجموعة واسعة من المنتجات عالية الجودة. هل تبحث عن نوع معين من المنتجات؟ يمكنني مساعدتك في العثور على المنتج المثالي لاحتياجاتك.';
    }
    
    if (input.includes('بشرة') || input.includes('عناية')) {
      return 'رائع! العناية بالبشرة هي تخصصنا. هل يمكنك إخباري عن نوع بشرتك؟ (جافة، دهنية، مختلطة، حساسة) حتى أتمكن من تقديم أفضل التوصيات لك.';
    }
    
    if (input.includes('توصيل') || input.includes('شحن')) {
      return 'نوفر خدمة التوصيل السريع لجميع أنحاء المملكة. التوصيل مجاني للطلبات فوق 200 ريال، ويصل طلبك خلال 24 ساعة داخل الرياض و 2-3 أيام للمدن الأخرى.';
    }
    
    if (input.includes('دفع') || input.includes('مدى')) {
      return 'نقبل جميع طرق الدفع: البطاقات الائتمانية، مدى، Apple Pay، STC Pay، والدفع عند الاستلام. جميع المعاملات آمنة ومشفرة.';
    }
    
    return 'شكراً لك على استفسارك! أنا هنا لمساعدتك في أي شيء تحتاجه. يمكنك سؤالي عن المنتجات، العناية بالبشرة، التوصيل، أو أي شيء آخر.';
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl shadow-2xl shadow-emerald-500/30 flex items-center justify-center hover:shadow-3xl hover:shadow-emerald-500/40 transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: [
            "0 10px 30px rgba(16, 185, 129, 0.3)",
            "0 10px 40px rgba(16, 185, 129, 0.5)",
            "0 10px 30px rgba(16, 185, 129, 0.3)"
          ]
        }}
        transition={{ 
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Notification Pulse */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 left-6 z-50 w-96 h-[500px] bg-white rounded-3xl shadow-2xl shadow-gray-900/20 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">المساعد الذكي</h3>
                    <p className="text-white/80 text-sm">متاح الآن للمساعدة</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 h-80 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`flex items-start gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-2xl flex items-center justify-center ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      <div className={`p-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-br-sm'
                          : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-start gap-2 max-w-[80%]">
                      <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="p-3 bg-gray-100 rounded-2xl rounded-bl-sm">
                        <div className="flex gap-1">
                          <motion.div
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all duration-300"
                  />
                  <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-500 transition-colors">
                    <Mic className="w-5 h-5" />
                  </button>
                </div>
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                  whileHover={{ scale: inputValue.trim() ? 1.05 : 1 }}
                  whileTap={{ scale: inputValue.trim() ? 0.95 : 1 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              
              {/* Quick Actions */}
              <div className="flex gap-2 mt-3">
                <button 
                  onClick={() => setInputValue('ما هي أفضل منتجات العناية بالبشرة؟')}
                  className="px-3 py-1 bg-emerald-50 text-emerald-600 text-sm rounded-full hover:bg-emerald-100 transition-colors"
                >
                  منتجات البشرة
                </button>
                <button 
                  onClick={() => setInputValue('كيف يمكنني تتبع طلبي؟')}
                  className="px-3 py-1 bg-emerald-50 text-emerald-600 text-sm rounded-full hover:bg-emerald-100 transition-colors"
                >
                  تتبع الطلب
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;