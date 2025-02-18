
import React from 'react';
import { Film, Search } from 'lucide-react';
import { AuthDialog } from './auth/AuthDialog';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Film className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-display font-semibold">MovieCatalog</h1>
          </div>
          
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <input
                type="search"
                placeholder="Search movies..."
                className="w-full rounded-full border border-gray-200 bg-white px-10 py-2 text-sm outline-none focus:ring-2 focus:ring-primary dark:border-gray-800 dark:bg-gray-950"
              />
            </div>
          </div>

          <nav className="flex items-center space-x-4">
            <AuthDialog />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
