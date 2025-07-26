import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  FileText, 
  Plus, 
  AlertTriangle, 
  Users, 
  Settings,
  Shield,
  Download
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: BarChart3 },
  { name: 'Claims', href: '/claims', icon: FileText },
  { name: 'New Claim', href: '/NewClaim', icon: Plus },
  { name: 'Risk Alerts', href: '/alerts', icon: AlertTriangle },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Reports', href: '/reports', icon: Download },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col bg-card border-r border-border">
      <div className="flex h-16 items-center px-6 border-b border-border">
        <Shield className="h-8 w-8 text-primary" />
        <span className="ml-2 text-lg font-semibold text-foreground">
          ClaimsAnalytics
        </span>
      </div>
      
      <nav className="flex-1 space-y-1 px-4 py-6">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )
            }
          >
            <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      <div className="border-t border-border p-4">
        <div className="text-xs text-muted-foreground">
          Actuarial Analytics Platform
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          v2.1.0 - Production
        </div>
      </div>
    </div>
  );
}