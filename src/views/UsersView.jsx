import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { initialUsersData } from '../data/mockData';

const UsersView = ({ data }) => {
  const totalParents = data.filter(d => d.userType === 'Parent').length;
  const totalStaff = data.filter(d => d.userType === 'Staff').length;
  const totalChildren = data.filter(d => d.userType === 'Child').length;

  return (
    <div className="flex-col gap-6">
      <div>
        <h3 className="text-muted" style={{ marginBottom: '1rem', fontWeight: 600 }}>User Growth Trends</h3>
        <div style={{ height: '350px', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', paddingTop: '1rem', paddingBottom: '1rem' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={initialUsersData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#edf2f7" />
              <XAxis dataKey="month" axisLine={true} tickLine={false} tick={{ fill: 'var(--text-muted)' }} tickMargin={10} />
              <YAxis axisLine={true} tickLine={false} tick={{ fill: 'var(--text-muted)' }} ticks={[0, 250, 500, 750, 1000]} domain={[0, 1000]} />
              <Tooltip cursor={{ fill: '#f4f5f7' }} />
              <Bar dataKey="parents" fill="#ff8f50" radius={[4, 4, 0, 0]} />
              <Bar dataKey="staff" fill="#6ee7b7" radius={[4, 4, 0, 0]} />
              <Bar dataKey="children" fill="#60a5fa" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
        <div className="card" style={{ padding: '1.25rem' }}>
          <div className="text-muted" style={{ marginBottom: '0.25rem', fontSize: '0.8rem' }}>Total Parents</div>
          <div className="text-2xl" style={{ marginBottom: '0.25rem' }}>{totalParents > 0 ? totalParents : 856}</div>
          <div className="text-success" style={{ fontSize: '0.8rem' }}>+12% from last month</div>
        </div>
        <div className="card" style={{ padding: '1.25rem' }}>
          <div className="text-muted" style={{ marginBottom: '0.25rem', fontSize: '0.8rem' }}>Total Staff</div>
          <div className="text-2xl" style={{ marginBottom: '0.25rem' }}>{totalStaff > 0 ? totalStaff : 124}</div>
          <div className="text-success" style={{ fontSize: '0.8rem' }}>+8% from last month</div>
        </div>
        <div className="card" style={{ padding: '1.25rem' }}>
          <div className="text-muted" style={{ marginBottom: '0.25rem', fontSize: '0.8rem' }}>Total Children</div>
          <div className="text-2xl" style={{ marginBottom: '0.25rem' }}>{totalChildren > 0 ? totalChildren : 856}</div>
          <div className="text-success" style={{ fontSize: '0.8rem' }}>+6% from last month</div>
        </div>
      </div>
    </div>
  );
};

export default UsersView;
