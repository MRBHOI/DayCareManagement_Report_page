import React from 'react';

const FilterBar = ({ filters, setFilters }) => {
  const centers = ['All Centers', 'Mumbai', 'Delhi', 'Bangalore', 'Pune'];
  const userTypes = ['All Users', 'Parent', 'Staff', 'Child'];
  const dateRanges = ['Last 30 Days', 'Last 90 Days', 'This Year'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const selectStyle = {
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    backgroundColor: '#fff',
    color: 'var(--text-dark)',
    outline: 'none',
    fontSize: '0.9rem',
    minWidth: '150px'
  };

  return (
    <div style={{
      display: 'flex',
      gap: '12px',
      marginBottom: '1.5rem',
      flexWrap: 'wrap'
    }}>
      <select name="dateRange" value={filters.dateRange} onChange={handleChange} style={selectStyle}>
        {dateRanges.map(dr => <option key={dr} value={dr}>{dr}</option>)}
      </select>

      <select name="center" value={filters.center} onChange={handleChange} style={selectStyle}>
        {centers.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <select name="userType" value={filters.userType} onChange={handleChange} style={selectStyle}>
        {userTypes.map(u => <option key={u} value={u}>{u}</option>)}
      </select>
    </div>
  );
};

export default FilterBar;
