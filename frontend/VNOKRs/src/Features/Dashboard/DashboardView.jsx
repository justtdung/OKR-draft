import React from 'react';
import { MOCK_DATA } from '../../Assets/mockData';
import StatCard from '../../Components/StatCard';
import SummaryCard from '../../Components/SummaryCard';

const DashboardView = () => {
  const { dashboardStats, summaryCards } = MOCK_DATA;
  
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mb-6">
        {dashboardStats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {summaryCards.map((card, index) => (
          <SummaryCard key={index} card={card} />
        ))}
      </div>
    </>
  );
};

export default DashboardView;