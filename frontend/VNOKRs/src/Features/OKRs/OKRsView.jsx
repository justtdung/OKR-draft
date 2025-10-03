import React from 'react';
import { Filter, Plus } from 'lucide-react';
import { MOCK_DATA } from '../../Assets/mockData';
import SummaryCard from '../../Components/SummaryCard';

const OKRsView = ({ onOpenModal }) => {
  const { summaryCards, okrsList } = MOCK_DATA;
  
  return (
    <>
      <div className="grid grid-cols-3 gap-6 mb-6">
        {summaryCards.map((card, index) => (
          <SummaryCard key={index} card={card} />
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">OKRs Công Ty</h2>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                Lọc
              </button>
              <button
                onClick={onOpenModal}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
                Thêm OKR
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-0">
          <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs font-semibold text-gray-600 uppercase">
            <div className="col-span-4">Mục tiêu</div>
            <div className="col-span-1 text-center">Key Results</div>
            <div className="col-span-1 text-center">Tiến độ</div>
            <div className="col-span-2">Người phụ trách</div>
            <div className="col-span-2 text-center">Hạn chót</div>
            <div className="col-span-1 text-center">Trạng thái</div>
            <div className="col-span-1 text-center">Hành động</div>
          </div>
          {okrsList && okrsList.length > 0 ? (
            okrsList.map((okr) => (
              <div key={okr.id} className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50 items-center">
                <div className="col-span-4">
                  <p className="text-sm text-gray-800 font-medium">{okr.title}</p>
                </div>
                <div className="col-span-1 flex justify-center">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">{okr.keyResults} KRs</span>
                </div>
                <div className="col-span-1">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`${okr.progressColor} h-full`} style={{ width: `${okr.progress}%` }}></div>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 w-8">{okr.progress}%</span>
                  </div>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    {/* Có thể thay bằng avatar nếu có */}
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <span className="text-sm text-gray-700">{okr.owner}</span>
                </div>
                <div className="col-span-2 text-center text-sm text-gray-600">{okr.deadline}</div>
                <div className="col-span-1 flex justify-center">
                  <span className={`text-xs font-medium ${okr.statusColor}`}>{okr.status}</span>
                </div>
                <div className="col-span-1 flex items-center justify-center gap-2">
                  <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21h6a2 2 0 002-2v-6a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4a2 2 0 012 2v2H7V5a2 2 0 012-2z" /></svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-4 text-gray-500">Không có OKRs nào.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default OKRsView;