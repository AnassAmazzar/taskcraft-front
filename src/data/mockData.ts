import type { Metric, Task } from '../types';

export const metrics: Metric[] = [
  {
    label: 'Taches actives',
    value: '128',
    trend: '+14 cette semaine',
    tone: 'positive',
  },
  {
    label: 'Delai moyen',
    value: '2.4 j',
    trend: '-8% vs sprint precedent',
    tone: 'positive',
  },
  {
    label: 'Risque retard',
    value: '11',
    trend: '3 critiques',
    tone: 'warning',
  },
  {
    label: 'Completion sprint',
    value: '76%',
    trend: 'objectif 85%',
    tone: 'neutral',
  },
];

export const taskFlow = [
  { day: 'Lun', created: 18, completed: 12 },
  { day: 'Mar', created: 24, completed: 20 },
  { day: 'Mer', created: 16, completed: 18 },
  { day: 'Jeu', created: 28, completed: 22 },
  { day: 'Ven', created: 21, completed: 27 },
  { day: 'Sam', created: 9, completed: 13 },
  { day: 'Dim', created: 11, completed: 15 },
];

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Finaliser le systeme de roles equipe',
    project: 'Core Platform',
    assignee: 'Nadia',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2026-10-08',
  },
  {
    id: 2,
    title: 'Connecter les evenements temps reel',
    project: 'Notifications',
    assignee: 'Yassine',
    status: 'review',
    priority: 'medium',
    dueDate: '2026-10-10',
  },
  {
    id: 3,
    title: 'Maquetter le tableau analytics',
    project: 'Dashboard',
    assignee: 'Sara',
    status: 'todo',
    priority: 'medium',
    dueDate: '2026-10-12',
  },
  {
    id: 4,
    title: 'Optimiser la liste des projets',
    project: 'Workspace',
    assignee: 'Omar',
    status: 'done',
    priority: 'low',
    dueDate: '2026-10-04',
  },
];
