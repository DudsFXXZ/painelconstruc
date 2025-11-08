import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { user } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-800 p-4 flex items-center justify-between border-b dark:border-gray-700">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="text-gray-500 dark:text-gray-400 lg:hidden">
            <Menu size={24} />
        </button>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Painel de Controle</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar projetos..."
            className="bg-gray-100 dark:bg-gray-700 rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button className="relative text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </button>
        <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
          {user?.name.charAt(0).toUpperCase() || 'U'}
        </div>
      </div>
    </header>
  );
};

export default Header;
