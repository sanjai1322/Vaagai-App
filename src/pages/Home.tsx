import React from 'react';
import { motion } from 'motion/react';
import { Play, Star, Clock, ChevronRight, Award, Users, BookCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'தொழில்நுட்பம்', icon: '💻', count: 12 },
  { name: 'வணிகம்', icon: '📈', count: 8 },
  { name: 'கலை', icon: '🎨', count: 15 },
  { name: 'மொழி', icon: '🗣️', count: 10 },
];

const featuredCourses = [
  {
    id: 'silappathikaram',
    title: 'சிலப்பதிகாரம்',
    instructor: 'நா. கனகராஜ் M.A., B.Ed., TET.',
    rating: 4.9,
    students: 1500,
    duration: '12 மணிநேரம்',
    thumbnail: 'https://picsum.photos/seed/silambu/400/250',
  },
  {
    id: 'python',
    title: 'Python நிரலாக்கம்',
    instructor: 'முனைவர் சு. கனிமொழி சுகுணா',
    rating: 4.8,
    students: 1200,
    duration: '15 மணிநேரம்',
    thumbnail: 'https://picsum.photos/seed/python/400/250',
  },
  {
    id: 'temple-art',
    title: 'தமிழகக் கோயில்களின் கலை',
    instructor: 'Er. இரா. கணேஷ் & கா. நாவரசி',
    rating: 4.9,
    students: 950,
    duration: '10 மணிநேரம்',
    thumbnail: 'https://picsum.photos/seed/temple/400/250',
  }
];

export default function Home() {
  return (
    <div className="space-y-12 pb-12 animate-in fade-in duration-700">
      {/* Hero Section - Editorial Style */}
      <section className="relative h-[320px] bg-emerald-950 overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/tamil-culture/1200/600" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6 md:px-12 max-w-2xl space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 px-3 py-1 rounded-full"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">புதிய பாடங்கள் நேரலையில்</span>
          </motion.div>

          <div className="space-y-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight"
            >
              தமிழ் வழியில் <br />
              <span className="text-emerald-400">சிறந்த கல்வி</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-emerald-100/70 text-sm md:text-base max-w-md leading-relaxed"
            >
              வாகை தமிழ்ச்சங்கம் வழங்கும் தரமான பாடத்திட்டங்கள் மூலம் உங்கள் திறன்களை உலகத்தரம் வாய்ந்த முறையில் மேம்படுத்துங்கள்.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <Link 
              to="/courses" 
              className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-6 py-3 rounded-xl text-sm font-bold shadow-xl shadow-emerald-500/20 transition-all active:scale-95"
            >
              பாடங்களை ஆராயுங்கள்
            </Link>
            <Link 
              to="/about" 
              className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-1 group"
            >
              எங்களைப் பற்றி <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats - Clean Utility Style */}
      <section className="px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {[
            { icon: Users, label: 'மாணவர்கள்', value: '10K+', color: 'text-emerald-500', bg: 'bg-emerald-50' },
            { icon: BookCheck, label: 'பாடங்கள்', value: '50+', color: 'text-blue-500', bg: 'bg-blue-50' },
            { icon: Award, label: 'சான்றிதழ்', value: '100%', color: 'text-amber-500', bg: 'bg-amber-50' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="bg-white p-4 md:p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow text-center space-y-2"
            >
              <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mx-auto`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-stone-900">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-stone-500 uppercase font-bold tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories - Modern Grid */}
      <section className="px-6 max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-stone-900">பிரிவுகள்</h3>
            <p className="text-xs text-stone-500">உங்களுக்கு பிடித்த துறையைத் தேர்ந்தெடுங்கள்</p>
          </div>
          <button className="text-emerald-600 text-sm font-bold hover:underline">அனைத்தும்</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.name}
              whileHover={{ y: -4 }}
              className="bg-white border border-stone-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-100 transition-all cursor-pointer group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
              <div className="font-bold text-stone-900">{cat.name}</div>
              <div className="text-[10px] text-stone-400 font-medium">{cat.count} பாடங்கள்</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Courses - Engaging Cards */}
      <section className="px-6 max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-stone-900">சிறப்புப் பாடங்கள்</h3>
            <p className="text-xs text-stone-500">எங்கள் சிறந்த ஆசிரியர்களின் வழிகாட்டுதலில்</p>
          </div>
          <Link to="/courses" className="text-emerald-600 text-sm font-bold hover:underline">மேலும் பார்க்க</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (i * 0.1) }}
            >
              <Link 
                to={`/courses/${course.id}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-emerald-500 text-emerald-950 text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg">சிறப்பு</span>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <div className="space-y-1">
                    <h4 className="font-bold text-stone-900 group-hover:text-emerald-600 transition-colors line-clamp-1">{course.title}</h4>
                    <p className="text-xs text-stone-500 line-clamp-1">{course.instructor}</p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-stone-50">
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold text-stone-700">{course.rating}</span>
                      </div>
                      <span className="text-stone-300 text-[10px]">•</span>
                      <div className="flex items-center gap-1 text-stone-500">
                        <Users className="w-3 h-3" />
                        <span className="text-[10px]">{course.students}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600">
                      <Clock className="w-3 h-3" />
                      <span className="text-[10px] font-bold">{course.duration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
