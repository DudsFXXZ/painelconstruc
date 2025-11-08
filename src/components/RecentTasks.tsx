import React from 'react';
import { tasks } from '../lib/mock-data';

const RecentTasks: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-4">Tarefas Recentes</h3>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center">
            <input
              type="checkbox"
              id={task.id}
              checked={task.completed}
              readOnly
              className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
            />
            <label htmlFor={task.id} className={`ml-3 flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
              <p className="font-medium">{task.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{task.project}</p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTasks;
