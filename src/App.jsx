import React, { useState, useMemo, useEffect } from 'react';
import { Download, Filter } from 'lucide-react';
import { exportToCSV, exportToPDF } from './utils/exportUtils';
import { isAfter, subDays, startOfDay } from 'date-fns';
import { MOCK_DATASET } from './data/mockData';

import Header from './components/Header';
import GlobalStats from './components/GlobalStats';
import Tabs from './components/Tabs';
import FilterBar from './components/FilterBar';
import UsersView from './views/UsersView';
import RevenueView from './views/RevenueView';
import CentersView from './views/CentersView';
import ActivityView from './views/ActivityView';
import Sidebar from './components/Sidebar';

function App() {
  const [activePage, setActivePage] = useState('Reports');
  const [activeTab, setActiveTab] = useState('Users');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    dateRange: 'This Year',
    center: 'All Centers',
    userType: 'All Users'
  });

  const [reportsData, setReportsData] = useState(MOCK_DATASET);

  const filteredData = useMemo(() => {
    let result = reportsData;
    if (filters.center !== 'All Centers') result = result.filter(d => d.center === filters.center);
    if (filters.userType !== 'All Users') result = result.filter(d => d.userType === filters.userType);

    const today = startOfDay(new Date());
    if (filters.dateRange === 'Last 30 Days') {
      result = result.filter(d => isAfter(d.date, subDays(today, 30)));
    } else if (filters.dateRange === 'Last 90 Days') {
      result = result.filter(d => isAfter(d.date, subDays(today, 90)));
    }
    return result;
  }, [filters]);

  const handleExportAll = () => {
    const headers = ['Date', 'Month', 'Center', 'User Type', 'Activity Type', 'Revenue'];
    const rows = filteredData.map(d => [d.dateString, d.month, d.center, d.userType, d.activityType, d.isRevenueEvent ? d.revenueBase : 0]);
    exportToCSV(filteredData, `reports_export_${activeTab}.csv`);
    exportToPDF(headers, rows, `System Reports - ${activeTab}`, `reports_export_${activeTab}.pdf`);
  };

  return (
    <div style={{ display: 'flex', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div style={{ flex: 1, height: '100vh', overflowY: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem' }}>

          <Header activePage={activePage} />

          {activePage === 'Reports' ? (
            <>
              <GlobalStats />

              {/* System Reports Section Header */}
              <div className="flex justify-end items-center" style={{ marginBottom: '1.5rem' }}>
                <div className="flex items-center gap-3">

                  <button className="btn-primary" onClick={handleExportAll}>
                    <Download size={16} /> Export All
                  </button>
                </div>
              </div>

              <div style={{ background: '#fff', borderRadius: '16px', padding: '1.5rem', border: '1px solid var(--border-color)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

                <div style={{ marginTop: '1.5rem' }}>
                  {activeTab === 'Users' && <UsersView data={filteredData} />}
                  {activeTab === 'Revenue' && <RevenueView data={filteredData} />}
                  {activeTab === 'Centers' && <CentersView data={filteredData} />}
                  {activeTab === 'Activity' && <ActivityView data={filteredData} />}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
