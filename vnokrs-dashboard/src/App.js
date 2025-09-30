import React, { useState } from 'react';
import { Search, Grid, CheckCircle, Target, MessageCircle, Store, ChevronDown, Filter, Plus, Eye, Edit2, Trash2, Building2, User, Users } from 'lucide-react';

export default function VNOKRsSystem() {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [selectedQuarter, setSelectedQuarter] = useState('Quý T36');

  const summaryCards = [
    {
      icon: <Building2 className="w-6 h-6" />,
      count: 12,
      label: 'OKRs',
      title: 'OKRs Toàn Công Ty',
      progress: 78,
      status: 'Tốt',
      statusColor: 'text-green-600',
      bgColor: 'bg-blue-500',
      progressColor: 'bg-blue-500'
    },
    {
      icon: <User className="w-6 h-6" />,
      count: 24,
      label: 'OKRs',
      title: 'OKRs Cá Nhân',
      progress: 65,
      status: 'Trung bình',
      statusColor: 'text-yellow-600',
      bgColor: 'bg-green-500',
      progressColor: 'bg-green-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      count: 8,
      label: 'OKRs',
      title: 'OKRs Nhóm',
      progress: 82,
      status: 'Tốt',
      statusColor: 'text-green-600',
      bgColor: 'bg-purple-500',
      progressColor: 'bg-purple-500'
    }
  ];

  const okrsList = [
    {
      id: 1,
      title: 'Tăng doanh thu công ty lên 150% so với năm trước',
      keyResults: 4,
      progress: 85,
      owner: 'Nguyễn Văn A',
      deadline: '31/12/2024',
      status: 'Đúng tiến độ',
      statusColor: 'text-green-600',
      progressColor: 'bg-green-500'
    },
    {
      id: 2,
      title: 'Cải thiện trải nghiệm khách hàng và tăng độ hài lòng',
      keyResults: 3,
      progress: 72,
      owner: 'Trần Thị B',
      deadline: '30/11/2024',
      status: 'Đúng tiến độ',
      statusColor: 'text-green-600',
      progressColor: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Phát triển sản phẩm mới và mở rộng thị trường',
      keyResults: 5,
      progress: 45,
      owner: 'Lê Văn C',
      deadline: '15/01/2025',
      status: 'Có rủi ro',
      statusColor: 'text-yellow-600',
      progressColor: 'bg-yellow-500'
    },
    {
      id: 4,
      title: 'Xây dựng văn hóa doanh nghiệp và phát triển nhân sự',
      keyResults: 3,
      progress: 28,
      owner: 'Phạm Thị D',
      deadline: '28/02/2025',
      status: 'Chậm tiến độ',
      statusColor: 'text-red-600',
      progressColor: 'bg-red-500'
    },
    {
      id: 5,
      title: 'Tối ưu hóa quy trình vận hành và giảm chi phí',
      keyResults: 4,
      progress: 91,
      owner: 'Hoàng Văn E',
      deadline: '20/12/2024',
      status: 'Đúng tiến độ',
      statusColor: 'text-green-600',
      progressColor: 'bg-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            VN
          </div>
          <span className="font-bold text-gray-800">OKRs System</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <button
            onClick={() => setActiveNav('Dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeNav === 'Dashboard'
                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Grid className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => setActiveNav('Check-in')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeNav === 'Check-in'
                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Check-in</span>
          </button>

          <button
            onClick={() => setActiveNav('OKRs')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeNav === 'OKRs'
                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Target className="w-5 h-5" />
            <span className="font-medium">OKRs</span>
          </button>

          <button
            onClick={() => setActiveNav('CFRs')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeNav === 'CFRs'
                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">CFRs</span>
          </button>

          <button
            onClick={() => setActiveNav('Store')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeNav === 'Store'
                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Store className="w-5 h-5" />
            <span className="font-medium">Store</span>
          </button>
        </nav>

        {/* User Profile */}
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              <select
                value={selectedQuarter}
                onChange={(e) => setSelectedQuarter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Quý T36</option>
                <option>Quý T35</option>
                <option>Quý T34</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm OKRs..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <Grid className="w-4 h-4" />
                Xem theo
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1 right-1"></div>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {summaryCards.map((card, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${card.bgColor} rounded-lg flex items-center justify-center text-white`}>
                    {card.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-800">{card.count}</div>
                    <div className="text-sm text-gray-500">{card.label}</div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-3">{card.title}</h3>
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Tiến độ</span>
                    <span className="font-semibold">{card.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${card.progressColor} transition-all duration-300`}
                      style={{ width: `${card.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className={`${card.statusColor} font-medium flex items-center gap-1`}>
                    {card.status === 'Tốt' ? '↑' : '→'} {card.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* OKRs List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">OKRs Công Ty</h2>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    Lọc
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                    <Plus className="w-4 h-4" />
                    Thêm OKR
                  </button>
                </div>
              </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs font-semibold text-gray-600 uppercase">
              <div className="col-span-4">Mục tiêu</div>
              <div className="col-span-1 text-center">Key Results</div>
              <div className="col-span-1 text-center">Tiến độ</div>
              <div className="col-span-2">Người phụ trách</div>
              <div className="col-span-2 text-center">Hạn chót</div>
              <div className="col-span-1 text-center">Trạng thái</div>
              <div className="col-span-1 text-center">Hành động</div>
            </div>

            {/* Table Rows */}
            {okrsList.map((okr) => (
              <div
                key={okr.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors items-center"
              >
                <div className="col-span-4">
                  <p className="text-sm text-gray-800 font-medium">{okr.title}</p>
                </div>
                <div className="col-span-1 flex justify-center">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    {okr.keyResults} KRs
                  </span>
                </div>
                <div className="col-span-1">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${okr.progressColor} transition-all duration-300`}
                        style={{ width: `${okr.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 w-8">{okr.progress}%</span>
                  </div>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-700">{okr.owner}</span>
                </div>
                <div className="col-span-2 text-center text-sm text-gray-600">{okr.deadline}</div>
                <div className="col-span-1 flex justify-center">
                  <span className={`text-xs font-medium ${okr.statusColor}`}>{okr.status}</span>
                </div>
                <div className="col-span-1 flex items-center justify-center gap-2">
                  <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}