import React from 'react';

const ActivityView = ({ data }) => {
  const activityCounts = data.reduce((acc, curr) => {
    acc[curr.activityType] = (acc[curr.activityType] || 0) + 1;
    return acc;
  }, {});

  const stats = [
    { label: 'Activities', count: 2456, colorCode: '#ff8f50', bgCode: '#fff0e6' },
    { label: 'Meals', count: 8942, colorCode: '#6ee7b7', bgCode: '#e6ffed' },
    { label: 'Health Updates', count: 1234, colorCode: '#60a5fa', bgCode: '#e5f0ff' },
    { label: 'Messages', count: 5678, colorCode: '#fbbf24', bgCode: '#fff5db' },
  ];

  return (
    <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
      <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
        <h3 className="text-muted" style={{ fontWeight: 600 }}>Activity Statistics (Last 30 Days)</h3>
      </div>
      <div className="flex-col gap-4" style={{ padding: '1.5rem' }}>
        {stats.map((stat, idx) => (
          <div key={idx} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px'
          }}>
            <div className="flex items-center gap-4">
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: stat.bgCode
              }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: stat.colorCode }}></div>
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-dark)', fontSize: '0.95rem' }}>{stat.label}</div>
                <div className="text-muted" style={{ fontSize: '0.8rem' }}>Total logged</div>
              </div>
            </div>
            <div className="text-2xl" style={{ fontSize: '1.4rem' }}>
              {stat.count.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityView;
