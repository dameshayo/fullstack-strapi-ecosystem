import { Globe } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <Globe className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">StrapiPortal</span>
        </div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Articles</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Categories</a>
          <a href="http://localhost:1337/admin" target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
            Staff Portal
          </a>
        </nav>
      </div>
    </header>
  );
};
