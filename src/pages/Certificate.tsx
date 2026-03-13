import React from 'react';
import { Award, Download, Share2, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Certificate() {
  return (
    <div className="min-h-screen bg-stone-50 p-6 space-y-8 pb-24">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">வாழ்த்துக்கள்!</h2>
        <p className="text-stone-500">நீங்கள் வெற்றிகரமாக பாடத்தை முடித்துவிட்டீர்கள்.</p>
      </div>

      {/* Certificate Preview */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="aspect-[1.4/1] bg-white rounded-xl shadow-2xl border-8 border-stone-100 p-8 relative overflow-hidden flex flex-col items-center justify-center text-center space-y-4"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-emerald-600"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-emerald-600"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
          <Award className="w-64 h-64" />
        </div>

        <div className="flex justify-center mb-2">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-emerald-100 overflow-hidden">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em]">வாகை தமிழ்ச்சங்கம்</div>
          <h1 className="text-xl font-serif italic text-stone-800">வெற்றிச் சான்றிதழ்</h1>
        </div>

        <div className="space-y-1">
          <div className="text-[8px] text-stone-400 uppercase">இது வழங்கப்படுகிறது</div>
          <div className="text-2xl font-bold text-stone-900 border-b-2 border-stone-100 pb-1 px-8">சஞ்சய்</div>
        </div>

        <p className="text-[10px] text-stone-600 max-w-[240px]">
          "நவீன வலைத்தள உருவாக்கம்" என்ற பாடத்திட்டத்தை வெற்றிகரமாக முடித்தமைக்காக இந்த சான்றிதழ் வழங்கப்படுகிறது.
        </p>

        <div className="flex justify-between w-full mt-4 px-8">
          <div className="text-center">
            <div className="w-16 h-0.5 bg-stone-200 mb-1"></div>
            <div className="text-[8px] font-bold">இயக்குநர்</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <div className="text-center">
            <div className="w-16 h-0.5 bg-stone-200 mb-1"></div>
            <div className="text-[8px] font-bold">தேதி: 24/02/2026</div>
          </div>
        </div>
      </motion.div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 bg-white border border-stone-200 p-4 rounded-2xl font-bold text-sm shadow-sm active:scale-95 transition-transform">
          <Download className="w-5 h-5 text-emerald-600" />
          பதிவிறக்கம்
        </button>
        <button className="flex items-center justify-center gap-2 bg-white border border-stone-200 p-4 rounded-2xl font-bold text-sm shadow-sm active:scale-95 transition-transform">
          <Share2 className="w-5 h-5 text-blue-600" />
          பகிர்
        </button>
      </div>

      {/* Course Summary */}
      <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm space-y-4">
        <h3 className="font-bold">பாடச் சுருக்கம்</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-stone-500">முடிந்த தேதி</span>
            <span className="font-bold">பிப்ரவரி 24, 2026</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-stone-500">மதிப்பெண்</span>
            <span className="font-bold text-emerald-600">95%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-stone-500">நேரம்</span>
            <span className="font-bold">12 மணிநேரம்</span>
          </div>
        </div>
      </div>
    </div>
  );
}
