import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Mic, 
  MicOff, 
  Send, 
  Sparkles, 
  Brain, 
  Heart, 
  Star,
  Camera,
  Upload,
  Zap,
  Target,
  CheckCircle,
 
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface SkinAnalysis {
  skinType: string;
  concerns: string[];
  recommendations: string[];
  confidence: number;
}

const AIAssistantPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'مرحباً! أنا مساعدك الذكي في بيوتي لاب. يمكنني مساعدتك في تحليل نوع بشرتك وتقديم توصيات شخصية. كيف يمكنني مساعدتك اليوم؟',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [skinAnalysis, setSkinAnalysis] = useState<SkinAnalysis | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const skinQuizSteps = [
    {
      question: 'ما هو نوع بشرتك؟',
      options: ['جافة', 'دهنية', 'مختلطة', 'حساسة', 'عادية']
    },
    {
      question: 'ما هي أهم مشاكل بشرتك؟',
      options: ['حب الشباب', 'التصبغات', 'التجاعيد', 'المسام الواسعة', 'الجفاف']
    },
    {
      question: 'كم مرة تستخدم منتجات العناية يومياً؟',
      options: ['مرة واحدة', 'مرتين', 'ثلاث مرات', 'أكثر من ذلك', 'لا أستخدم']
    },
    {
      question: 'ما هو عمرك؟',
      options: ['أقل من 20', '20-30', '30-40', '40-50', 'أكثر من 50']
    }
  ];

  const handleSendMessage = async (content?: string) => {
    const messageContent = content || inputValue;
    if (!messageContent.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: messageContent,
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
        content: getBotResponse(messageContent),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('تحليل') || input.includes('بشرة')) {
      return 'رائع! سأساعدك في تحليل نوع بشرتك. يمكنك إما الإجابة على بعض الأسئلة أو رفع صورة لبشرتك للحصول على تحليل دقيق. ما الطريقة التي تفضلها؟';
    }
    
    if (input.includes('منتج') || input.includes('توصية')) {
      return 'بناءً على تحليل بشرتك، يمكنني تقديم توصيات شخصية للمنتجات المناسبة لك. هل تريد البدء بتحليل نوع بشرتك أولاً؟';
    }
    
    if (input.includes('روتين')) {
      return 'سأساعدك في إنشاء روتين عناية مثالي لبشرتك. أولاً، دعني أعرف نوع بشرتك ومشاكلها الأساسية.';
    }
    
    return 'شكراً لك! يمكنني مساعدتك في تحليل نوع بشرتك، تقديم توصيات للمنتجات، أو إنشاء روتين عناية مخصص. ما الذي تود معرفته؟';
  };

  const startSkinQuiz = () => {
    setCurrentStep(0);
    const quizMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: 'ممتاز! سأطرح عليك بعض الأسئلة لتحليل نوع بشرتك بدقة.',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, quizMessage]);
  };

  const handleQuizAnswer = (answer: string) => {
    handleSendMessage(answer);
    
    if (currentStep < skinQuizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Generate skin analysis
      const analysis: SkinAnalysis = {
        skinType: 'مختلطة',
        concerns: ['المسام الواسعة', 'اللمعان في المنطقة T'],
        recommendations: [
          'استخدم غسول لطيف للوجه مرتين يومياً',
          'طبق تونر خالي من الكحول',
          'استخدم مرطب خفيف للمنطقة الجافة',
          'ضع واقي الشمس يومياً'
        ],
        confidence: 92
      };
      setSkinAnalysis(analysis);
      setCurrentStep(0);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        // Simulate image analysis
        setTimeout(() => {
          const analysis: SkinAnalysis = {
            skinType: 'دهنية',
            concerns: ['حب الشباب', 'المسام الواسعة'],
            recommendations: [
              'استخدم منظف يحتوي على حمض الساليسيليك',
              'طبق تونر مقشر 3 مرات أسبوعياً',
              'استخدم مرطب خالي من الزيوت',
              'ضع علاج موضعي لحب الشباب'
            ],
            confidence: 88
          };
          setSkinAnalysis(analysis);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleVoiceRecording = () => {
    setIsListening(!isListening);
    // Implement voice recording logic here
  };

  const features = [
    {
      icon: Brain,
      title: 'تحليل ذكي للبشرة',
      description: 'تحليل متقدم باستخدام الذكاء الاصطناعي لتحديد نوع بشرتك ومشاكلها'
    },
    {
      icon: Target,
      title: 'توصيات شخصية',
      description: 'منتجات مختارة خصيصاً لنوع بشرتك واحتياجاتك الفردية'
    },
    {
      icon: Zap,
      title: 'نتائج فورية',
      description: 'احصل على تحليل شامل وتوصيات في ثوانٍ معدودة'
    },
    {
      icon: Heart,
      title: 'روتين مخصص',
      description: 'خطة عناية يومية مصممة خصيصاً لبشرتك'
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
            <Bot className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">المساعد الذكي</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            اكتشف نوع بشرتك واحصل على توصيات شخصية باستخدام الذكاء الاصطناعي
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 text-center"
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2 mb-16">
            <motion.div
              className="bg-white rounded-3xl shadow-lg shadow-gray-200/50 overflow-hidden"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">مساعد بيوتي لاب الذكي</h3>
                    <p className="text-white/80">متاح الآن للمساعدة</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-6">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`flex items-start gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                          message.type === 'user' 
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {message.type === 'user' ? '👤' : <Bot className="w-5 h-5" />}
                        </div>
                        <div className={`p-4 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-br-sm'
                            : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                        }`}>
                          <p className="leading-relaxed">{message.content}</p>
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
                      <div className="flex items-start gap-3 max-w-[80%]">
                        <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600">
                          <Bot className="w-5 h-5" />
                        </div>
                        <div className="p-4 bg-gray-100 rounded-2xl rounded-bl-sm">
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

              {/* Quiz Questions */}
              {currentStep < skinQuizSteps.length && (
                <div className="p-6 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4">{skinQuizSteps[currentStep].question}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {skinQuizSteps[currentStep].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuizAnswer(option)}
                        className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl hover:bg-emerald-100 transition-colors duration-300 text-sm"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full pl-16 pr-4 py-3 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all duration-300"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-500 transition-colors"
                    >
                      <Camera className="w-5 h-5" />
                    </button>
                    <button
                      onClick={toggleVoiceRecording}
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors ${
                        isListening ? 'text-red-500' : 'text-gray-400 hover:text-emerald-500'
                      }`}
                    >
                      {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    </button>
                  </div>
                  <motion.button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim()}
                    className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                    whileHover={{ scale: inputValue.trim() ? 1.05 : 1 }}
                    whileTap={{ scale: inputValue.trim() ? 0.95 : 1 }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">إجراءات سريعة</h3>
              <div className="space-y-4">
                <button
                  onClick={startSkinQuiz}
                  className="w-full flex items-center gap-3 p-4 bg-emerald-50 text-emerald-600 rounded-2xl hover:bg-emerald-100 transition-colors duration-300"
                >
                  <Sparkles className="w-5 h-5" />
                  ابدأ تحليل البشرة
                </button>
                
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center gap-3 p-4 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-100 transition-colors duration-300"
                >
                  <Upload className="w-5 h-5" />
                  رفع صورة للتحليل
                </button>
                
                <button
                  onClick={() => handleSendMessage('أريد توصيات للمنتجات')}
                  className="w-full flex items-center gap-3 p-4 bg-purple-50 text-purple-600 rounded-2xl hover:bg-purple-100 transition-colors duration-300"
                >
                  <Star className="w-5 h-5" />
                  توصيات المنتجات
                </button>
              </div>
            </motion.div>

            {/* Skin Analysis Results */}
            <AnimatePresence>
              {skinAnalysis && (
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <h3 className="text-2xl font-bold text-gray-900">نتائج التحليل</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">نوع البشرة:</h4>
                      <p className="text-emerald-600 font-medium">{skinAnalysis.skinType}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">المشاكل الأساسية:</h4>
                      <ul className="space-y-1">
                        {skinAnalysis.concerns.map((concern, index) => (
                          <li key={index} className="text-gray-700 flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                            {concern}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">التوصيات:</h4>
                      <ul className="space-y-2">
                        {skinAnalysis.recommendations.map((rec, index) => (
                          <li key={index} className="text-gray-700 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">دقة التحليل:</span>
                        <span className="font-bold text-emerald-600">{skinAnalysis.confidence}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Image Preview */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">الصورة المرفوعة</h3>
                  <img
                    src={selectedImage}
                    alt="Uploaded skin analysis"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <p className="text-gray-600 text-sm mt-4">جاري تحليل الصورة...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIAssistantPage;