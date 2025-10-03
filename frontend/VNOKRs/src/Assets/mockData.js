// ==================== FILE: src/Assets/mockData.js ====================
import { Building2, User, Users } from 'lucide-react';

export const MOCK_DATA = {
  employeesNotCreated: ['Nguyễn Văn B', 'Trần Thị C', 'Lê Văn D', 'Phạm Thị E', 'Hoàng Văn F'],
  
  summaryCards: [
    { 
      icon: Building2, 
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
      icon: User, 
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
      icon: Users, 
      count: 8, 
      label: 'OKRs', 
      title: 'OKRs Nhóm', 
      progress: 82, 
      status: 'Tốt', 
      statusColor: 'text-green-600', 
      bgColor: 'bg-purple-500', 
      progressColor: 'bg-purple-500' 
    }
  ],
  
  okrsList: [
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
      title: 'Mở rộng thị trường sang 3 tỉnh thành mới', 
      keyResults: 5, 
      progress: 60, 
      owner: 'Lê Văn C', 
      deadline: '15/12/2024', 
      status: 'Chậm tiến độ', 
      statusColor: 'text-yellow-600', 
      progressColor: 'bg-yellow-500' 
    }
  ],
  
  // ⭐ QUAN TRỌNG: Đảm bảo có todayTasksData
  todayTasksData: [
    { 
      id: 1, 
      text: 'Review OKR Q4 với team Marketing', 
      status: 'Đang tiến hành', 
      time: '09:00 AM', 
      priority: 'Cao' 
    },
    { 
      id: 2, 
      text: 'Họp với CEO về chiến lược mở rộng', 
      status: 'Đã đóng', 
      time: '10:30 AM', 
      priority: 'Cao' 
    },
    { 
      id: 3, 
      text: 'Cập nhật tiến độ dự án vào hệ thống', 
      status: 'Chưa xử lý', 
      time: '02:00 PM', 
      priority: 'Trung bình' 
    },
    { 
      id: 4, 
      text: 'Phản hồi email khách hàng', 
      status: 'Đang tiến hành', 
      time: '03:30 PM', 
      priority: 'Cao' 
    },
    { 
      id: 5, 
      text: 'Chuẩn bị báo cáo tuần', 
      status: 'Chưa xử lý', 
      time: '04:00 PM', 
      priority: 'Thấp' 
    }
  ],
  
  dashboardStats: [
    { 
      label: 'Tổng OKRs', 
      value: '44', 
      change: '+12%', 
      color: 'text-blue-600', 
      bgColor: 'bg-blue-50' 
    },
    { 
      label: 'Hoàn thành', 
      value: '32', 
      change: '+8%', 
      color: 'text-green-600', 
      bgColor: 'bg-green-50' 
    },
    { 
      label: 'Đang thực hiện', 
      value: '8', 
      change: '+3%', 
      color: 'text-yellow-600', 
      bgColor: 'bg-yellow-50' 
    },
    { 
      label: 'Chậm tiến độ', 
      value: '4', 
      change: '-2%', 
      color: 'text-red-600', 
      bgColor: 'bg-red-50' 
    }
  ],
  
  todayListStats: {
    created: { count: 85, total: 100, percent: 85 },
    completed: { count: 72, total: 100, percent: 72 }
  }
};