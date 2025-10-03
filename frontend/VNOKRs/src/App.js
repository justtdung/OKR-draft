// ==================== FILE: src/App.js ====================

// React core
import React, { useState } from 'react';

// Layout components
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

// Modal components
import OKRModal from './Modals/OKRModal';

// Feature views
import DashboardView from './Features/Dashboard/DashboardView';
import OKRsView from './Features/OKRs/OKRsView';
import TodayListView from './Features/TodayList/TodayListView';

// Assets - chỉ import những gì cần dùngf
import { MOCK_DATA } from './Assets/mockData';


export default function App() {
  // State management
  const [activeNav, setActiveNav] = useState('OKRs');
  const [selectedQuarter, setSelectedQuarter] = useState('Quý T36');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [tasks, setTasks] = useState(MOCK_DATA.todayTasksData);
  const [showOKRModal, setShowOKRModal] = useState(false);
  const [newOKR, setNewOKR] = useState({
    quarter: '',
    parent: '',
    objective: '',
    keyResults: [{ 
      description: '', 
      target: '', 
      unit: 'Người', 
      planLink: '', 
      resultLink: '', 
      relatedOKRs: [] 
    }],
    visibility: 'public'
  });

  const handleCreateOKR = () => {
    console.log('Creating OKR:', newOKR);
    setShowOKRModal(false);
    setNewOKR({
      quarter: '',
      parent: '',
      objective: '',
      keyResults: [{ 
        description: '', 
        target: '', 
        unit: 'Người', 
        planLink: '', 
        resultLink: '', 
        relatedOKRs: [] 
      }],
      visibility: 'public'
    });
  };

  console.log("Sidebar:", Sidebar);
  console.log("Header:", Header);
  console.log("OKRModal:", OKRModal);
  console.log("DashboardView:", DashboardView);
  console.log("OKRsView:", OKRsView);
  console.log("TodayListView:", TodayListView);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Modals */}
      <OKRModal
        show={showOKRModal}
        onClose={() => setShowOKRModal(false)}
        newOKR={newOKR}
        setNewOKR={setNewOKR}
        onSubmit={handleCreateOKR}
      />

      {/* Layout */}
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <main className="flex-1 flex flex-col">
        <Header
          activeNav={activeNav}
          selectedQuarter={selectedQuarter}
          setSelectedQuarter={setSelectedQuarter}
        />

        <div className="flex-1 p-6 overflow-auto">
          {/* Routing based on activeNav */}
          {activeNav === 'Dashboard' && <DashboardView />}
          
          {activeNav === 'OKRs' && (
            <OKRsView onOpenModal={() => setShowOKRModal(true)} />
          )}
          
          {activeNav === 'TodayList' && (
            <TodayListView
              tasks={tasks}
              setTasks={setTasks}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          )}
        </div>
      </main>
    </div>
  );
}