import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Users', 'Revenue', 'Centers', 'Activity'];

  return (
    <div className="tabs-container" style={{
      display: 'flex',
      backgroundColor: 'var(--bg-secondary)',
      borderRadius: '24px',
      padding: '4px',
      marginBottom: '2rem'
    }}>
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          style={{
            flex: 1,
            padding: '8px 16px',
            borderRadius: '20px',
            fontWeight: activeTab === tab ? '600' : '500',
            backgroundColor: activeTab === tab ? '#ffffff' : 'transparent',
            boxShadow: activeTab === tab ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
            color: activeTab === tab ? 'var(--text-dark)' : 'var(--text-muted)',
            transition: 'all 0.2s ease'
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
