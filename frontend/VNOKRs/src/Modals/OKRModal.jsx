import React from 'react';
import { X, Plus } from 'lucide-react';
import { CONSTANTS } from '../Assets/constants';

const OKRModal = ({ show, onClose, newOKR, setNewOKR, onSubmit }) => {
  if (!show) return null;

  const addKeyResult = () => {
    setNewOKR({
      ...newOKR,
      keyResults: [...newOKR.keyResults, { 
        description: '', 
        target: '', 
        unit: 'Người', 
        planLink: '', 
        resultLink: '', 
        relatedOKRs: [] 
      }]
    });
  };

  const removeKeyResult = (index) => {
    setNewOKR({
      ...newOKR,
      keyResults: newOKR.keyResults.filter((_, i) => i !== index)
    });
  };

  const updateKeyResult = (index, field, value) => {
    const updated = [...newOKR.keyResults];
    updated[index][field] = value;
    setNewOKR({ ...newOKR, keyResults: updated });
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-xl w-full max-w-4xl h-[90vh] flex flex-col">
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between flex-shrink-0">
          <h3 className="text-xl font-bold text-gray-800">Cập nhật OKRs</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          <p className="text-gray-500">Form OKR sẽ được hiển thị ở đây</p>
        </div>

        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex gap-3 justify-end flex-shrink-0">
          <button onClick={onClose} className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
            QUAY LẠI
          </button>
          <button onClick={onSubmit} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            CẬP NHẬT
          </button>
        </div>
      </div>
    </div>
  );
};

export default OKRModal;