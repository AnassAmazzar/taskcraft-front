import type { Task, TaskPriority, TaskStatus } from '../types';

type TaskTableProps = {
  tasks: Task[];
};

const statusLabels: Record<TaskStatus, string> = {
  todo: 'A faire',
  'in-progress': 'En cours',
  review: 'Review',
  done: 'Terminee',
};

const priorityLabels: Record<TaskPriority, string> = {
  low: 'Basse',
  medium: 'Moyenne',
  high: 'Haute',
};

export function TaskTable({ tasks }: TaskTableProps) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h2>Taches prioritaires</h2>
          <p>Vue initiale basee sur des donnees mockees.</p>
        </div>
        <button className="primary-button" type="button">Nouvelle tache</button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tache</th>
              <th>Projet</th>
              <th>Responsable</th>
              <th>Statut</th>
              <th>Priorite</th>
              <th>Echeance</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.project}</td>
                <td>{task.assignee}</td>
                <td>
                  <span className={`status-pill ${task.status}`}>
                    {statusLabels[task.status]}
                  </span>
                </td>
                <td>
                  <span className={`priority-dot ${task.priority}`} />
                  {priorityLabels[task.priority]}
                </td>
                <td>{new Intl.DateTimeFormat('fr-FR').format(new Date(task.dueDate))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
