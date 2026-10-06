export type TaskStatus = 'todo' | 'in-progress' | 'review' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export type Task = {
  id: number;
  title: string;
  project: string;
  assignee: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
};

export type Metric = {
  label: string;
  value: string;
  trend: string;
  tone: 'positive' | 'warning' | 'neutral';
};
