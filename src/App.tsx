import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Users, Play } from 'lucide-react';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';
import Home from './pages/Home';
import Auth from './pages/Auth';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';
import CourseDetail from './pages/CourseDetail';
import Viewer from './pages/Viewer';
import Certificate from './pages/Certificate';

// Placeholder components for other pages
const Accreditation = () => <div className="p-6 space-y-6">
  <h2 className="text-2xl font-bold">அங்கீகாரம்</h2>
  <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
      <span className="text-3xl">🏅</span>
    </div>
    <h3 className="text-xl font-bold text-center">ISO 9001:2015 சான்றிதழ்</h3>
    <p className="text-stone-600 text-center">எங்கள் நிறுவனம் சர்வதேச தரத்திற்கு ஏற்ப கல்வி சேவைகளை வழங்கி வருகிறது.</p>
  </div>
</div>;

const Contact = () => <div className="p-6 space-y-6">
  <h2 className="text-2xl font-bold">தொடர்புக்கு</h2>
  <form className="space-y-4">
    <div className="space-y-1">
      <label className="text-sm font-medium">பெயர்</label>
      <input type="text" className="w-full p-3 rounded-xl border border-stone-200 bg-white" placeholder="உங்கள் பெயர்" />
    </div>
    <div className="space-y-1">
      <label className="text-sm font-medium">மின்னஞ்சல்</label>
      <input type="email" className="w-full p-3 rounded-xl border border-stone-200 bg-white" placeholder="உங்கள் மின்னஞ்சல்" />
    </div>
    <div className="space-y-1">
      <label className="text-sm font-medium">செய்தி</label>
      <textarea className="w-full p-3 rounded-xl border border-stone-200 bg-white h-32" placeholder="உங்கள் செய்தி"></textarea>
    </div>
    <button className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl shadow-lg active:scale-95 transition-transform">அனுப்புக</button>
  </form>
</div>;

const CourseList = () => {
  const courses = [
    { id: '1', title: 'வாகை தமிழ்ச்சங்கம் - நேரலை வகுப்பு 1', instructor: 'தமிழ் அறிஞர்', thumb: 'https://img.youtube.com/vi/d5bMG01N_Gs/maxresdefault.jpg', level: 'அனைவருக்கும்', students: '1.2K' },
    { id: '2', title: 'வாகை தமிழ்ச்சங்கம் - நேரலை வகுப்பு 2', instructor: 'தமிழ் அறிஞர்', thumb: 'https://img.youtube.com/vi/rNM3ZpJYf88/maxresdefault.jpg', level: 'அனைவருக்கும்', students: '850' },
    { id: '3', title: 'வாகை தமிழ்ச்சங்கம் - நேரலை வகுப்பு 3', instructor: 'தமிழ் அறிஞர்', thumb: 'https://img.youtube.com/vi/zgpmddEK868/maxresdefault.jpg', level: 'அனைவருக்கும்', students: '950' },
    { id: 'silappathikaram', title: 'சிலப்பதிகாரம்', instructor: 'நா. கனகராஜ் M.A., B.Ed., TET.', thumb: 'https://picsum.photos/seed/silambu/400/250', level: 'இடைநிலை', students: '1.5K' },
    { id: 'ara-ilakkiyam', title: 'அற இலக்கியங்கள்', instructor: 'முனைவர் இரா. வேதகனி & குழுவினர்', thumb: 'https://picsum.photos/seed/aram/400/250', level: 'அடிப்படை', students: '920' },
    { id: 'thirukkural', title: 'திருக்குறள்', instructor: 'முனைவர் சு. சத்தியா', thumb: 'https://picsum.photos/seed/kural/400/250', level: 'அனைவருக்கும்', students: '2.1K' },
    { id: 'azhwargal', title: 'ஆழ்வார்கள்', instructor: 'முனைவர் சு. பலராமன் & குழுவினர்', thumb: 'https://picsum.photos/seed/azhwar/400/250', level: 'இடைநிலை', students: '740' },
    { id: 'nayanmargal', title: 'நாயன்மார்கள்', instructor: 'திரு. மா. மனோஜ்குமார் & குழுவினர்', thumb: 'https://picsum.photos/seed/nayanmar/400/250', level: 'இடைநிலை', students: '810' },
    { id: 'thiruppavai', title: 'திருப்பாவை', instructor: 'முனைவர் சு. பலராமன் & முனைவர் கோ. காயத்ரி', thumb: 'https://picsum.photos/seed/pava/400/250', level: 'அடிப்படை', students: '1.1K' },
    { id: 'temple-art', title: 'தமிழகக் கோயில்களின் கலை மற்றும் கட்டடக்கலை', instructor: 'Er. இரா. கணேஷ் & கா. நாவரசி', thumb: 'https://picsum.photos/seed/temple/400/250', level: 'மேம்பட்டது', students: '950' },
    { id: 'uraiyasiriyargal', title: 'உரையாசிரியர்கள்', instructor: 'செல்வன் வெ. கார்த்திகேயன்', thumb: 'https://picsum.photos/seed/urai/400/250', level: 'மேம்பட்டது', students: '420' },
    { id: 'python', title: 'Python', instructor: 'முனைவர் சு. கனிமொழி சுகுணா', thumb: 'https://picsum.photos/seed/python/400/250', level: 'அடிப்படை', students: '1.2K' },
    { id: 'c-lang', title: 'C', instructor: 'முனைவர் சு. கனிமொழி சுகுணா', thumb: 'https://picsum.photos/seed/clang/400/250', level: 'அடிப்படை', students: '880' },
    { id: 'sql', title: 'SQL', instructor: 'வாகை தமிழ்ச்சங்கம்', thumb: 'https://picsum.photos/seed/sql/400/250', level: 'அடிப்படை', students: '1.4K' },
    { id: 'java', title: 'Java', instructor: 'வாகை தமிழ்ச்சங்கம்', thumb: 'https://picsum.photos/seed/java/400/250', level: 'இடைநிலை', students: '1.1K' },
  ];

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto pb-24">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-stone-900">பாடங்கள்</h2>
        <p className="text-stone-500 text-sm">உங்கள் ஆர்வத்திற்கு ஏற்ற பாடத்தைத் தேர்ந்தெடுங்கள்</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="flex"
          >
            <Link 
              to={`/courses/${course.id}`} 
              className="group block bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all h-full w-full flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden shrink-0">
                <img 
                  src={course.thumb} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-sm text-stone-900 text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm">
                    {course.level}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 flex-grow">
                  <h3 className="font-bold text-stone-900 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-tight min-h-[2.5rem]">
                    {course.title}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-1">{course.instructor}</p>
                </div>
                
                <div className="pt-4 border-t border-stone-50 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-stone-400">
                      <Users className="w-3 h-3" />
                      <span className="text-[10px] font-medium">{course.students} மாணவர்கள்</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold text-sm">இலவசம்</span>
                    <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Progress = () => <div className="p-6 space-y-6">
  <h2 className="text-2xl font-bold">முன்னேற்றம்</h2>
  <div className="space-y-4">
    <div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-sm">நவீன வலைத்தள உருவாக்கம்</h3>
        <span className="text-xs font-bold text-emerald-600">65%</span>
      </div>
      <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
        <div className="h-full bg-emerald-500 w-[65%]"></div>
      </div>
    </div>
    <div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-sm">தமிழ் இலக்கியம்</h3>
        <span className="text-xs font-bold text-emerald-600">100%</span>
      </div>
      <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
        <div className="h-full bg-emerald-500 w-full"></div>
      </div>
      <Link to="/certificate" className="block w-full py-2 bg-amber-50 text-amber-700 text-xs font-bold rounded-lg border border-amber-100 text-center">சான்றிதழ் பெறுக</Link>
    </div>
  </div>
</div>;

const Profile = () => <div className="p-6 space-y-8">
  <div className="flex flex-col items-center space-y-3">
    <div className="w-24 h-24 bg-emerald-100 rounded-full border-4 border-white shadow-lg overflow-hidden">
      <img src="/person.png" alt="Avatar" className="w-full h-full object-cover" />
    </div>
    <div className="text-center">
      <h2 className="text-xl font-bold">மா. மனோஜ்குமார்</h2>
      <p className="text-stone-500 text-sm">manoj@example.com</p>
    </div>
  </div>
  
  <div className="space-y-2">
    <button className="w-full p-4 bg-white rounded-2xl border border-stone-100 shadow-sm flex justify-between items-center">
      <span className="font-medium">எனது பாடங்கள்</span>
      <span className="text-stone-400">→</span>
    </button>
    <button className="w-full p-4 bg-white rounded-2xl border border-stone-100 shadow-sm flex justify-between items-center">
      <span className="font-medium">அமைப்புகள்</span>
      <span className="text-stone-400">→</span>
    </button>
    <Link to="/auth" className="w-full p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100 shadow-sm flex justify-between items-center">
      <span className="font-bold">வெளியேறு</span>
    </Link>
  </div>
</div>;

function AppContent() {
  const location = useLocation();
  const isAdminLogin = location.pathname === '/admin/login';
  const isAdminArea = location.pathname.startsWith('/admin') && !isAdminLogin;
  const hideLayout = location.pathname === '/auth' || location.pathname.startsWith('/viewer') || isAdminLogin || isAdminArea;

  const content = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      {/* Admin routes inside their own layout manually below if needed, or matched here and wrapped by logic */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/*" element={
        <div className="p-6"><h1 className="text-2xl font-bold">விரைவில்... (Coming Soon)</h1></div>
      } />
      <Route path="/about" element={<About />} />
      <Route path="/accreditation" element={<Accreditation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/courses" element={<CourseList />} />
      <Route path="/courses/:id" element={<CourseDetail />} />
      <Route path="/viewer/:id" element={<Viewer />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/certificate" element={<Certificate />} />
    </Routes>
  );

  if (isAdminLogin) return <AdminLogin />;
  if (isAdminArea) return <AdminLayout>{content}</AdminLayout>;
  if (hideLayout) return content;

  return <Layout>{content}</Layout>;
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
