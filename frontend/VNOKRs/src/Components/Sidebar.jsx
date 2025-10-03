import React from 'react';
import { User } from 'lucide-react';
import CONSTANTS from '../Assets/constants';

const Sidebar = ({ activeNav, setActiveNav }) => (
  <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
    <div className="p-4 border-b border-gray-200 flex items-center justify-center">
      <img src="../logo.png" alt="Company Logo" className="h-20 w-auto" />
    </div>
    <nav className="flex-1 p-4">
      {CONSTANTS.NAV_ITEMS.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => setActiveNav(id)}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
            activeNav === id ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Icon className="w-5 h-5" />
          <span className="font-medium">{label}</span>
        </button>
      ))}
    </nav>
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-gray-800">Nguyễn Văn A</div>
          <div className="text-xs text-gray-500">Admin</div>
        </div>
      </div>
    </div>
  </aside>
);

export default Sidebar;