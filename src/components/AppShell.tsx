import {
  Bell,
  ChartNoAxesCombined,
  CheckSquare,
  LayoutDashboard,
  Search,
  Settings,
  Users,
} from 'lucide-react';
import type { ReactNode } from 'react';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Taches', icon: CheckSquare },
  { label: 'Equipe', icon: Users },
  { label: 'Analytics', icon: ChartNoAxesCombined },
  { label: 'Parametres', icon: Settings },
];

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Navigation principale">
        <div className="brand">
          <span className="brand-mark">TC</span>
          <div>
            <strong>TaskCraft</strong>
            <span>Team workspace</span>
          </div>
        </div>

        <nav className="nav-list">
          {navItems.map((item) => (
            <button
              className={item.active ? 'nav-item active' : 'nav-item'}
              key={item.label}
              type="button"
              aria-label={item.label}
              title={item.label}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <div className="workspace">
        <header className="topbar">
          <div className="search-box">
            <Search size={18} />
            <input type="search" placeholder="Rechercher tache, projet, membre..." />
          </div>
          <div className="topbar-actions">
            <button className="icon-button" type="button" aria-label="Notifications" title="Notifications">
              <Bell size={18} />
            </button>
            <div className="profile-chip" aria-label="Profil utilisateur">
              <span>AO</span>
            </div>
          </div>
        </header>

        <main className="content">{children}</main>
      </div>
    </div>
  );
}
