import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout: React.FC = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(window.innerWidth >= 1024);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarExpanded(false);
      } else {
        setIsSidebarExpanded(true);
        setIsMobileSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar para Desktop */}
      <div className="hidden lg:block">
        <Sidebar isExpanded={isSidebarExpanded} />
      </div>

      {/* Sidebar para Mobile */}
      <div
        className={`fixed inset-0 z-30 transition-transform transform lg:hidden ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar isExpanded={true} />
      </div>
      
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
          onClick={toggleMobileSidebar}
        ></div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleMobileSidebar} />
        <main className="flex-1 overflow-y-auto">
          {/* O conteúdo da página (ex: DashboardPage) será renderizado aqui */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
