import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, BookOpen, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: 'முகப்பு (Dashboard)', path: '/admin' },
    { icon: BookOpen, label: 'பாடங்கள் (Courses)', path: '/admin/courses' },
    { icon: Users, label: 'மாணவர்கள் (Students)', path: '/admin/students' },
    { icon: Settings, label: 'அமைப்புகள் (Settings)', path: '/admin/settings' },
  ];

  return (
    <div className="flex h-screen bg-stone-50 font-sans text-stone-900 overflow-hidden">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-900 text-slate-300">
        <div className="p-6 flex items-center gap-3 bg-slate-950">
          <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <h1 className="text-xl font-bold text-white tracking-tight">வாகை நிர்வாகம்</h1>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (location.pathname.startsWith(item.path) && item.path !== '/admin');
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-lg transition-all",
                  isActive ? "bg-emerald-600 text-white font-medium" : "hover:bg-slate-800 hover:text-white"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 bg-slate-950">
          <Link to="/admin/login" className="flex items-center gap-3 px-3 py-3 rounded-lg text-red-400 hover:bg-red-400/10 hover:text-red-300 transition-colors">
            <LogOut className="w-5 h-5" />
            <span>வெளியேறு</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Header for Mobile & Actions */}
        <header className="bg-white border-b border-stone-200 px-4 py-3 flex items-center justify-between md:justify-end shrink-0">
          <div className="md:hidden flex items-center gap-2">
             <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">A</span>
             </div>
             <h1 className="text-lg font-bold text-slate-900">வாகை நிர்வாகம்</h1>
          </div>
          <div className="flex items-center gap-3">
             <span className="text-sm font-medium hidden md:block">நிர்வாகி (Admin)</span>
             <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center border border-emerald-200">
               <User className="w-4 h-4 text-emerald-700" />
             </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 md:pb-6">
          {children}
        </main>

        {/* Bottom Nav for Mobile */}
        <nav className="md:hidden absolute bottom-0 left-0 right-0 bg-white border-t border-stone-200 px-2 py-2 flex justify-around items-center z-50">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (location.pathname.startsWith(item.path) && item.path !== '/admin');
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",
                  isActive ? "text-emerald-600" : "text-stone-400 hover:text-stone-600"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive && "fill-emerald-50")} />
                <span className="text-[10px] font-medium">{item.label.split(' ')[0]}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

// Temporary icon to avoid importing User again up top if not needed
function User(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
}
