import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import api from '../api/api';

const COLORS = ['#4CAF50', '#FF7043', '#FFC107', '#42A5F5'];

export default function CentersChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get('/reports/centers-by-location').then(res =>
            setData(res.data.map(r => ({ name: r.city, value: Number(r.count) })))
        );
    }, []);

    return (
        <PieChart width={400} height={300}>
            <Pie data={data} dataKey="value" nameKey="name" label={e => `${e.name}: ${e.value}`}>
                {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip />
        </PieChart>
    );
}
