import React from 'react';
import { Building, LayoutDashboard, CheckSquare, Wallet, Users, BarChart, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  isExpanded: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded }) => {
  const { logout } = useAuth();

  const navItems = [
    { icon: <LayoutDashboard size={20} />, text: 'Dashboard', active: true },
    { icon: <Building size={20} />, text: 'Projetos' },
    { icon: <CheckSquare size={20} />, text: 'Tarefas' },
    { icon: <Wallet size={20} />, text: 'Orçamentos' },
    { icon: <Users size={20} />, text: 'Equipe' },
    { icon: <BarChart size={20} />, text: 'Relatórios' },
  ];

  const bottomItems = [
    { icon: <Settings size={20} />, text: 'Configurações' },
  ];

  return (
    <aside className={`h-screen transition-all ${isExpanded ? 'w-64' : 'w-20'}`}>
      <nav className="h-full flex flex-col bg-white dark:bg-gray-800 border-r dark:border-gray-700 shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <h1 className={`overflow-hidden transition-all font-bold text-xl text-indigo-600 ${isExpanded ? 'w-32' : 'w-0'}`}>
            Constrói<span className="text-gray-600 dark:text-gray-400">PRO</span>
          </h1>
        </div>

        <ul className="flex-1 px-3">
          {navItems.map((item) => (
            <li
              key={item.text}
              className={`
                relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer
                transition-colors group
                ${item.active
                  ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 dark:from-indigo-900 dark:to-indigo-800 text-indigo-800 dark:text-white'
                  : 'hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
                }
              `}
            >
              {item.icon}
              <span className={`overflow-hidden transition-all ${isExpanded ? 'w-52 ml-3' : 'w-0'}`}>{item.text}</span>
              {!isExpanded && (
                <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                  {item.text}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="border-t dark:border-gray-700 flex flex-col p-3">
           {bottomItems.map((item) => (
            <li
              key={item.text}
              className="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group list-none hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
            >
              {item.icon}
              <span className={`overflow-hidden transition-all ${isExpanded ? 'w-52 ml-3' : 'w-0'}`}>{item.text}</span>
               {!isExpanded && (
                <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                  {item.text}
                </div>
              )}
            </li>
          ))}
           <li
              onClick={logout}
              className="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group list-none hover:bg-red-50 dark:hover:bg-red-900/50 text-red-500"
            >
              <LogOut size={20} />
              <span className={`overflow-hidden transition-all ${isExpanded ? 'w-52 ml-3' : 'w-0'}`}>Sair</span>
               {!isExpanded && (
                <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-red-100 text-red-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                  Sair
                </div>
              )}
            </li>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
