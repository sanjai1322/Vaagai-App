import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, BarChart2, User, Info, Award, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'முகப்பு', path: '/' },
    { icon: BookOpen, label: 'பாடங்கள்', path: '/courses' },
    { icon: BarChart2, label: 'முன்னேற்றம்', path: '/progress' },
    { icon: User, label: 'சுயவிவரம்', path: '/profile' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border-2 border-stone-100 overflow-hidden">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-lg md:text-xl font-bold text-emerald-700 tracking-tight truncate">வாகை தமிழ்ச்சங்கம்</h1>
        </div>
        <div className="flex gap-3">
           <Link to="/about" title="எங்களைப் பற்றி">
             <Info className="w-5 h-5 text-stone-500" />
           </Link>
           <Link to="/contact" title="தொடர்புக்கு">
             <Phone className="w-5 h-5 text-stone-500" />
           </Link>
           <Link to="/admin/login" title="நிர்வாகி (Admin)">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield text-stone-500"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
           </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-20 overflow-x-hidden">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 px-6 py-2 flex justify-between items-center z-50">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1 transition-colors",
                isActive ? "text-emerald-600" : "text-stone-400 hover:text-stone-600"
              )}
            >
              <item.icon className={cn("w-6 h-6", isActive && "fill-emerald-50")} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
