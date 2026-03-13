import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col px-6 py-12">
      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full space-y-8">
        <div className="text-center space-y-2">
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl shadow-emerald-100 border-4 border-emerald-50 overflow-hidden">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold text-stone-900">
            வாகை தமிழ்ச்சங்கம்
          </h2>
          <p className="text-stone-500 text-sm">
            {isLogin ? 'உங்கள் கணக்கில் நுழையுங்கள்' : 'இன்றே உங்கள் கற்றலைத் தொடங்குங்கள்'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <AnimatePresence mode="wait">
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-1"
              >
                <label className="text-xs font-bold text-stone-500 uppercase ml-1">பெயர்</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white border border-stone-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="உங்கள் பெயர்"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-1">
            <label className="text-xs font-bold text-stone-500 uppercase ml-1">மின்னஞ்சல்</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input 
                type="email" 
                required
                className="w-full bg-white border border-stone-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                placeholder="example@mail.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-stone-500 uppercase ml-1">கடவுச்சொல்</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input 
                type="password" 
                required
                className="w-full bg-white border border-stone-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {isLogin && (
            <div className="text-right">
              <button type="button" className="text-xs font-bold text-emerald-600">கடவுச்சொல் மறந்ததா?</button>
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-emerald-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-100 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
          >
            {isLogin ? 'உள்நுழை' : 'பதிவு செய்'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-stone-200"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-stone-50 px-2 text-stone-400 font-bold">அல்லது</span>
          </div>
        </div>

        <button className="w-full bg-white border border-stone-200 text-stone-700 font-bold py-4 rounded-2xl flex items-center justify-center gap-3 active:scale-[0.98] transition-all">
          <Github className="w-5 h-5" />
          Google மூலம் தொடரவும்
        </button>

        <p className="text-center text-sm text-stone-500">
          {isLogin ? 'கணக்கு இல்லையா?' : 'ஏற்கனவே கணக்கு உள்ளதா?'} {' '}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-emerald-600 font-bold"
          >
            {isLogin ? 'பதிவு செய்' : 'உள்நுழை'}
          </button>
        </p>
      </div>
    </div>
  );
}
