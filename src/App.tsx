import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { AppShell } from './components/AppShell';
import { MetricCard } from './components/MetricCard';
import { TaskTable } from './components/TaskTable';
import { metrics, taskFlow, tasks } from './data/mockData';

export function App() {
  return (
    <AppShell>
      <section className="page-heading">
        <div>
          <span className="eyebrow">Workspace SaaS</span>
          <h1>Pilotage des taches d'equipe</h1>
          <p>
            Suivi operationnel, priorites, risques et metriques temps reel dans une
            interface prete pour l'integration API.
          </p>
        </div>
        <button className="primary-button" type="button">Creer un projet</button>
      </section>

      <section className="metrics-grid" aria-label="Metriques principales">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </section>

      <section className="dashboard-grid">
        <div className="panel chart-panel">
          <div className="panel-header">
            <div>
              <h2>Flux hebdomadaire</h2>
              <p>Taches creees vs terminees.</p>
            </div>
          </div>
          <div className="chart-frame">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={taskFlow} barGap={8}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: 'rgba(15, 23, 42, 0.04)' }} />
                <Bar dataKey="created" name="Creees" fill="#2563eb" radius={[6, 6, 0, 0]} />
                <Bar dataKey="completed" name="Terminees" fill="#14b8a6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <aside className="panel activity-panel">
          <div className="panel-header">
            <div>
              <h2>Activite recente</h2>
              <p>Evenements a remplacer par le flux temps reel.</p>
            </div>
          </div>
          <ul className="activity-list">
            <li><strong>Nadia</strong> a deplace une tache vers En cours</li>
            <li><strong>Yassine</strong> a ajoute un commentaire</li>
            <li><strong>Sara</strong> a cree une maquette dashboard</li>
            <li><strong>Omar</strong> a termine une optimisation</li>
          </ul>
        </aside>
      </section>

      <TaskTable tasks={tasks} />
    </AppShell>
  );
}
