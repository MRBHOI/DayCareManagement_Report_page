import React from 'react';
import { LayoutDashboard, Home, Users, FileText, Settings } from 'lucide-react';

const Sidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Home, label: 'Centers' },
    { icon: Users, label: 'Users' },
    { icon: FileText, label: 'Reports' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside style={{
      width: '260px',
      backgroundColor: '#fff',
      borderRight: '1px solid var(--border-color, #e2e8f0)',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      position: 'sticky',
      top: 0,
      flexShrink: 0
    }}>
      <div className="flex items-center gap-3" style={{ marginBottom: '2.5rem', cursor: 'pointer', paddingLeft: '0.5rem' }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '16px',
          backgroundColor: '#ffaa73',
          background: 'linear-gradient(135deg, #ffb585 0%, #ff9858 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0,
          boxShadow: '0 4px 10px rgba(255, 152, 88, 0.3)'
        }}>
          <span style={{ fontSize: '30px', lineHeight: 1, paddingBottom: '2px' }}>👶</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1e3354', margin: 0, letterSpacing: '-0.3px', lineHeight: '1.2' }}>LittleSteps</h2>
          <p style={{ fontSize: '0.85rem', color: '#57799e', margin: 0, fontWeight: 500, lineHeight: '1.2', marginTop: '2px' }}>System Administrator</p>
        </div>
      </div>

      <nav style={{ flex: 1 }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activePage === item.label;
            return (
              <li key={index}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (setActivePage) setActivePage(item.label);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    color: isActive ? 'white' : '#64748b',
                    backgroundColor: isActive ? 'var(--primary-orange, #f97316)' : 'transparent',
                    textDecoration: 'none',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 4px 10px -2px rgba(249, 115, 22, 0.4)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                      e.currentTarget.style.color = '#0f172a';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#64748b';
                    }
                  }}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} style={{ opacity: isActive ? 1 : 0.8 }} />
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
