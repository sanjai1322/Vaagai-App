import React from 'react';
import { motion } from 'motion/react';
import { Users, BookOpen, Clock, Activity, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'மொத்த மாணவர்கள்', value: '10,482', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'செயலில் உள்ள பாடங்கள்', value: '54', icon: BookOpen, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { label: 'நேரலை வகுப்புகள்', value: '3', icon: Activity, color: 'text-rose-500', bg: 'bg-rose-500/10' },
    { label: 'இன்றைய பதிவுகள்', value: '+124', icon: TrendingUp, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">முகப்பு</h1>
        <p className="text-slate-500 text-sm">வாகை நிர்வாகப் பலகைக்கு வரவேற்கிறோம்.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4"
          >
            <div className={`w-14 h-14 ${stat.bg} rounded-xl flex items-center justify-center shrink-0`}>
              <stat.icon className={`w-7 h-7 ${stat.color}`} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Enrollments */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-stone-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">சமீபத்திய சேர்க்கைகள் (Recent Enrollments)</h3>
            <button className="text-sm font-medium text-emerald-600 hover:underline">அனைத்தும் காண்க</button>
          </div>
          <div className="flex-1 p-0 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-50/50">
                  <th className="p-4 text-xs font-bold text-stone-500 uppercase">மாணவர்</th>
                  <th className="p-4 text-xs font-bold text-stone-500 uppercase">பாடம்</th>
                  <th className="p-4 text-xs font-bold text-stone-500 uppercase">நேரம்</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  { name: 'கார்த்திகேயன்', course: 'சிலப்பதிகாரம்', time: '10 நிமிடங்களுக்கு முன்' },
                  { name: 'சரவணன் மு.', course: 'Python நிரலாக்கம்', time: '1 மணிநேரத்திற்கு முன்' },
                  { name: 'பிரியா கு.', course: 'தமிழகக் கோயில்களின் கலை', time: '3 மணிநேரத்திற்கு முன்' },
                  { name: 'அருண் வ.', course: 'அற இலக்கியங்கள்', time: 'நேற்று' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-stone-50/50 transition-colors">
                    <td className="p-4 font-medium text-sm text-slate-800">{row.name}</td>
                    <td className="p-4 text-sm text-slate-600">{row.course}</td>
                    <td className="p-4 text-xs text-slate-400">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Status / Quick Actions */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-lg p-6 text-white space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-1">கணினி நிலை (System Status)</h3>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-emerald-400 font-medium">அனைத்து சேவைகளும் சீராக உள்ளன</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">விரைவுச் செயல்கள் (Quick Actions)</h4>
            <button className="w-full flex items-center justify-between p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors">
              <span className="text-sm font-medium">புதிய பாடம் சேர்க்க</span>
              <span className="w-6 h-6 bg-slate-700 rounded-md flex items-center justify-center text-white">+</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors">
              <span className="text-sm font-medium">அறிக்கை தரவிறக்க</span>
              <span className="w-6 h-6 bg-slate-700 rounded-md flex items-center justify-center text-white">↓</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
