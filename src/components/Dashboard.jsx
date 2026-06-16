import { useEffect, useState } from 'react';
import api from '../api/api';

export default function Dashboard() {
    const [kpis, setKpis] = useState(null);

    useEffect(() => {
        api.get('/dashboard/kpis').then(res => setKpis(res.data));
    }, []);

    if (!kpis) return <p>Loading...</p>;

    return (
        <div className="kpi-grid">
            <KpiCard label="Total Revenue (Apr)" value={`₹${kpis.totalRevenue}`} change="+18%" />
            <KpiCard label="New Registrations" value={kpis.newRegistrations} change="+12%" />
            <KpiCard label="Active Sessions" value={kpis.activeSessions} change="+8%" />
            <KpiCard label="Avg. Response Time" value={`${kpis.avgResponseTime} hrs`} change="-15%" />
        </div>
    );
}