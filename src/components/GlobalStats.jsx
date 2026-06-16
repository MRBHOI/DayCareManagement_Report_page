import React, { useEffect, useState } from 'react';
import { IndianRupee, Users, TrendingUp, Calendar } from 'lucide-react';
import api from '../api/api';

const GlobalStats = () => {
  const [kpis, setKpis] = useState(null);

  useEffect(() => {
    api.get('/dashboard/kpis')
      .then(res => setKpis(res.data))
      .catch(() => console.log('using default stats'));
  }, []);

  const statCards = [
    {
      title: 'Total Revenue (Apr)',
      value: kpis ? `₹${kpis.totalRevenue}` : '₹12.5L',
      trend: '+18%',
      isPositive: true,
      icon: IndianRupee
    },
    {
      title: 'New Registrations',
      value: kpis ? `${kpis.newRegistrations}` : '86',
      trend: '+12%',
      isPositive: true,
      icon: Users
    },
    {
      title: 'Active Sessions',
      value: kpis ? `${kpis.activeSessions}` : '1,248',
      trend: '+8%',
      isPositive: true,
      icon: TrendingUp
    },
    {
      title: 'Avg. Response Time',
      value: kpis ? `${kpis.avgResponseTime} hrs` : '2.4 hrs',
      trend: '-15%',
      isPositive: true,
      icon: Calendar
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1.5rem',
      marginBottom: '3rem'
    }}>
      {statCards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="card" style={{ padding: '1.25rem' }}>
            <div className="flex justify-between items-start" style={{ marginBottom: '1.5rem' }}>
              <div style={{
                backgroundColor: 'var(--icon-orange-bg)',
                color: 'var(--icon-orange-color)',
                padding: '0.5rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Icon size={20} />
              </div>
              <div className="text-success" style={{ fontWeight: 500, fontSize: '0.9rem' }}>
                {stat.trend}
              </div>
            </div>
            <div className="text-muted" style={{ marginBottom: '0.25rem' }}>{stat.title}</div>
            <div className="text-2xl">{stat.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default GlobalStats;