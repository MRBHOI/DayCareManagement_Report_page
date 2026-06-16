import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import api from '../../api/api';

export default function UserGrowth() {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get('/reports/user-growth').then(res => {
            const formatted = res.data.map(row => ({
                month: new Date(row.month).toLocaleString('default', { month: 'short' }),
                Parents: row.parents,
                Centers: row.centers,
                Staff: row.staff,
            }));
            setData(formatted);
        });
    }, []);

    if (!data.length) return <p>Loading...</p>;

    return (
        <div style={{ width: '100%', padding: '20px' }}>
            <h3 style={{ marginBottom: '16px' }}>User Growth Trends</h3>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Parents" fill="#FF7043" />
                    <Bar dataKey="Centers" fill="#42A5F5" />
                    <Bar dataKey="Staff" fill="#4CAF50" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}