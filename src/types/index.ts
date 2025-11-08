export interface Project {
  id: string;
  name: string;
  manager: string;
  status: 'Em Andamento' | 'Concluído' | 'Atrasado';
  endDate: string;
}

export interface Task {
  id: string;
  description: string;
  project: string;
  completed: boolean;
}
