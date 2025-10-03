// ==================== FILE: src/Features/TodayList/TodayListView.jsx ====================
import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';  // ✅ Đã xóa Calendar
import CONSTANTS, { STATUS_COLORS } from '../../Assets/constants';

const TodayListView = ({ tasks, setTasks, selectedDate, setSelectedDate }) => {
  const [newTask, setNewTask] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('Trung bình');

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: tasks.length + 1,
        text: newTask,
        status: 'Chưa xử lý',
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        priority: newTaskPriority
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const changeTaskStatus = (id, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Danh sách công việc</h2>
          <div className="flex items-center gap-3">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Thêm công việc mới..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={newTaskPriority}
            onChange={(e) => setNewTaskPriority(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {CONSTANTS.PRIORITIES.map(p => (
              <option key={p}>{p}</option>
            ))}
          </select>
          <button
            onClick={addTask}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-5 h-5" /> Thêm
          </button>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-6">
          {CONSTANTS.TASK_STATUSES.map((status) => (
            <div key={status} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-gray-700">
                {tasks.filter(t => t.status === status).length}
              </div>
              <div className="text-xs text-gray-600 mt-1">{status}</div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${STATUS_COLORS[task.status]}`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-sm font-medium text-gray-800">{task.text}</p>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    task.priority === 'Cao'
                      ? 'bg-red-100 text-red-700'
                      : task.priority === 'Trung bình'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {task.priority}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-xs text-gray-500">{task.time}</p>
                  <select
                    value={task.status}
                    onChange={(e) => changeTaskStatus(task.id, e.target.value)}
                    className="text-xs px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {CONSTANTS.TASK_STATUSES.map(s => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                {task.closeNote && (
                  <div className="mt-2 p-2 bg-green-50 rounded text-xs text-green-800">
                    <strong>Ghi chú:</strong> {task.closeNote}
                  </div>
                )}
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodayListView;