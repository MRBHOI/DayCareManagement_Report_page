import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#6ee7b7', '#ff8f50', '#fbbf24', '#60a5fa']; // Reordered to match Screenshot 3 visually: Delhi Green, Mumbai Orange, Pune Yellow, Bangalore Blue

const CentersView = ({ data }) => {
  const displayData = [
    { name: 'Delhi', value: 6 },
    { name: 'Mumbai', value: 8 },
    { name: 'Pune', value: 5 },
    { name: 'Bangalore', value: 5 }
  ];

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, name, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} y={y} 
        fill={COLORS[index % COLORS.length]} 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize="13"
      >
        {`${name}: ${value}`}
      </text>
    );
  };

  return (
    <div className="flex-col gap-6">
      <div>
        <h3 className="text-muted" style={{ marginBottom: '1rem', fontWeight: 600 }}>Centers by Location</h3>
        <div style={{ height: '350px', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', paddingTop: '1rem', paddingBottom: '1rem' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={displayData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={renderCustomLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                stroke="#fff"
                strokeWidth={2}
              >
                {displayData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
        {displayData.map((center, index) => (
          <div key={center.name} className="card" style={{ padding: '1.25rem' }}>
            <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: COLORS[index % COLORS.length] }}></div>
              <div className="text-muted" style={{ fontSize: '0.8rem' }}>{center.name}</div>
            </div>
            <div className="text-2xl">{center.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CentersView;
