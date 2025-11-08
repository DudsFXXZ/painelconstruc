import React from 'react';
import { projects } from '../lib/mock-data';
import { Project } from '../types';

const StatusBadge: React.FC<{ status: Project['status'] }> = ({ status }) => {
  const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full";
  const statusClasses = {
    'Em Andamento': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Concluído': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Atrasado': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };
  return <span className={`${baseClasses} ${statusClasses[status]}`}>{status}</span>;
};

const RecentProjects: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md col-span-1 lg:col-span-2">
      <h3 className="font-bold text-lg mb-4">Projetos Recentes</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-sm text-gray-500 dark:text-gray-400 border-b dark:border-gray-700">
            <tr>
              <th className="py-2">Projeto</th>
              <th className="py-2 hidden md:table-cell">Gerente</th>
              <th className="py-2">Status</th>
              <th className="py-2 hidden sm:table-cell">Prazo Final</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 font-medium">{project.name}</td>
                <td className="py-3 hidden md:table-cell">{project.manager}</td>
                <td className="py-3"><StatusBadge status={project.status} /></td>
                <td className="py-3 hidden sm:table-cell">{project.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentProjects;
