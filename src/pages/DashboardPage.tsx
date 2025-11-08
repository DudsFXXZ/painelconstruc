import React from 'react';
import StatCard from '../components/StatCard';
import RecentProjects from '../components/RecentProjects';
import ConstructionProgressChart from '../components/ConstructionProgressChart';
import RecentTasks from '../components/RecentTasks';
import { Building, ListTodo, CircleDollarSign, HardHat } from 'lucide-react';

const DashboardPage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          icon={<Building size={24} className="text-blue-600" />}
          title="Projetos Ativos"
          value="12"
          color="bg-blue-100 dark:bg-blue-900/50"
        />
        <StatCard
          icon={<ListTodo size={24} className="text-yellow-600" />}
          title="Tarefas Pendentes"
          value="45"
          color="bg-yellow-100 dark:bg-yellow-900/50"
        />
        <StatCard
          icon={<CircleDollarSign size={24} className="text-green-600" />}
          title="Orçamento Gasto (Mês)"
          value="R$ 1.2M"
          color="bg-green-100 dark:bg-green-900/50"
        />
        <StatCard
          icon={<HardHat size={24} className="text-orange-600" />}
          title="Funcionários Ativos"
          value="238"
          color="bg-orange-100 dark:bg-orange-900/50"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentProjects />
        <ConstructionProgressChart />
        <RecentTasks />
      </div>
    </div>
  );
};

export default DashboardPage;
