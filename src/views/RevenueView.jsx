import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { initialRevenueData } from '../data/mockData';

const RevenueView = ({ data }) => {
  const formatCurrencyRaw = (val) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: '#fff', padding: '10px 14px', border: '1px solid #edf2f7', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ color: 'var(--text-dark)', marginBottom: '4px', fontSize: '0.9rem' }}>{label}</div>
          <div style={{ color: '#ff8f50', fontSize: '0.85rem' }}>revenue : {formatCurrencyRaw(payload[0].value)}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex-col gap-6">
      <div>
        <h3 className="text-muted" style={{ marginBottom: '1rem', fontWeight: 600 }}>Revenue Overview</h3>
        <div style={{ height: '350px', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', paddingTop: '1rem', paddingBottom: '1rem' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={initialRevenueData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#edf2f7" />
              <XAxis dataKey="month" tick={{ fill: 'var(--text-muted)' }} tickLine={false} axisLine={{ stroke: '#edf2f7' }} tickMargin={10} />
              <YAxis 
                tick={{ fill: 'var(--text-muted)' }} 
                tickLine={false} 
                axisLine={{ stroke: '#edf2f7' }}
                ticks={[0, 35000, 70000, 105000, 140000]}
                domain={[0, 140000]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="linear" 
                dataKey="revenue" 
                stroke="#ff8f50" 
                strokeWidth={3} 
                dot={{ fill: '#fff', stroke: '#ff8f50', strokeWidth: 3, r: 5 }} 
                activeDot={{ r: 7 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
        <div className="card" style={{ padding: '1.25rem' }}>
          <div className="text-muted" style={{ marginBottom: '0.25rem', fontSize: '0.8rem' }}>Total Revenue (2026)</div>
          <div className="text-2xl" style={{ marginBottom: '0.25rem' }}>₹44.6L</div>
          <div className="text-success" style={{ fontSize: '0.8rem' }}>+18% from last year</div>
        </div>
        <div className="card" style={{ padding: '1.25rem' }}>
          <div className="text-muted" style={{ marginBottom: '0.25rem', fontSize: '0.8rem' }}>Average per Center</div>
          <div className="text-2xl" style={{ marginBottom: '0.25rem' }}>₹1,85,830</div>
          <div className="text-success" style={{ fontSize: '0.8rem' }}>Monthly average</div>
        </div>
      </div>
    </div>
  );
};

export default RevenueView;
