import { Project, Task } from '../types';

export const projects: Project[] = [
  { id: 'PROJ-001', name: 'Residencial Vista Verde', manager: 'Ana Silva', status: 'Em Andamento', endDate: 'Dez 2025' },
  { id: 'PROJ-002', name: 'Centro Comercial Metrópole', manager: 'Carlos Lima', status: 'Em Andamento', endDate: 'Jan 2026' },
  { id: 'PROJ-003', name: 'Edifício Corporativo Prime', manager: 'Juliana Costa', status: 'Atrasado', endDate: 'Out 2025' },
  { id: 'PROJ-004', name: 'Condomínio Sol Nascente', manager: 'Marcos Rocha', status: 'Concluído', endDate: 'Mar 2025' },
];

export const tasks: Task[] = [
  { id: 'TASK-101', description: 'Revisar plantas estruturais', project: 'Residencial Vista Verde', completed: false },
  { id: 'TASK-102', description: 'Aprovar orçamento de materiais', project: 'Centro Comercial Metrópole', completed: false },
  { id: 'TASK-103', description: 'Contratar equipe de alvenaria', project: 'Residencial Vista Verde', completed: true },
  { id: 'TASK-104', description: 'Inspeção de segurança do local', project: 'Edifício Corporativo Prime', completed: false },
];

export const chartData = {
  labels: ['Residencial V.', 'Centro Comercial', 'Edifício Prime', 'Condomínio S.N.'],
  data: [75, 50, 30, 100],
};
