import React from 'react';
import { Bell } from 'lucide-react';

const Header = ({ activePage }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: '1.5rem',
      borderBottom: '1px solid var(--border-color)',
      marginBottom: '2rem'
    }}>
      {activePage === 'Reports' ? (
        <h2 style={{ fontSize: '1.5rem', color: '#1e293b', fontWeight: 700 }}>Reports</h2>
      ) : (
        <div></div>
      )}
      
      <div className="flex items-center gap-6">
        <button 
          onClick={() => alert('No new notifications')}
          style={{ 
            position: 'relative', 
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: '4px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <Bell size={24} color={'#64748b'} />
          <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            backgroundColor: '#ff8f50',
            color: '#fff',
            fontSize: '0.7rem',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            transform: 'translate(25%, -25%)'
          }}>3</div>
        </button>

        <div className="flex items-center gap-3">
          <div style={{
            backgroundColor: '#ff8f50',
            color: '#fff',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: '1rem'
          }}>
            RK
          </div>
          <div className="flex-col">
            <div style={{ fontWeight: 600, color: 'var(--text-dark)', fontSize: '0.9rem' }}>Rajesh Kumar</div>
            <div className="text-muted" style={{ fontSize: '0.8rem' }}>System Administrator</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
