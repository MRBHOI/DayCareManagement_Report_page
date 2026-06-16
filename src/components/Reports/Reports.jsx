import { useState } from 'react';
import UserGrowth from './UserGrowth';
import CentersChart from './CentersChart';

export default function Reports() {
    const [activeTab, setActiveTab] = useState('Users');

    const tabs = ['Users', 'Revenue', 'Centers', 'Activity'];

    return (
        <div style={{ padding: '20px' }}>

            {/* Tab buttons */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: '8px 24px',
                            borderRadius: '20px',
                            border: 'none',
                            cursor: 'pointer',
                            background: activeTab === tab ? '#fff' : 'transparent',
                            fontWeight: activeTab === tab ? '600' : '400',
                            boxShadow: activeTab === tab ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab content */}
            {activeTab === 'Users' && <UserGrowth />}
            {activeTab === 'Centers' && <CentersChart />}
            {activeTab === 'Revenue' && <p>Revenue chart coming soon</p>}
            {activeTab === 'Activity' && <p>Activity chart coming soon</p>}

        </div>
    );
}