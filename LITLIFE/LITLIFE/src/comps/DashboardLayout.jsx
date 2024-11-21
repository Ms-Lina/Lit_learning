// src/components/dashboard/DashboardLayout.js
import React, { useState ,useEffect} from 'react';
import { 
  FiHome, FiBook, FiUsers, FiAward, FiSettings, 
  FiLogOut, FiMenu, FiX, FiBookOpen, FiCheckSquare 
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Overview from './Overview';
import ManageCourses from './ManageCourses';
import GradingManagement from './Grading';
import UserManagement from './Manageusers';
import AssessmentManagement from './Assessment';
import CoursesList from './CourseList';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [userRole, setUserRole] = useState('admin'); // This should come from your auth context SetViewPath
  const [setView, SetViewPath] = useState('overview'); // This should come from your auth context SetViewPath
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    // console.log(JSON.parse(localStorage.getItem('userInfo')).user_type);
  }, []);

  

  const adminMenuItems = [
    { icon: FiHome, label: 'Dashboard', path: 'overview' },
    { icon: FiBook, label: 'Manage Courses', path: 'courses' },
    { icon: FiUsers, label: 'Manage Users', path: 'users' },
    { icon: FiAward, label: 'Assessments', path: 'assessments' },
    { icon: FiCheckSquare, label: 'Grading', path: 'grading' },

    
  ];

  const userMenuItems = [
    { icon: FiHome, label: 'Dashboard', path: 'overview' },
    { icon: FiBookOpen, label: 'My Courses', path: 'my-courses' },
    { icon: FiAward, label: 'Assessments', path: 'assessments' },
  ];

  const menuItems = userRole == JSON.parse(localStorage.getItem('userInfo')).user_type ? adminMenuItems : userMenuItems;
 const HandelLogout = () => {
  localStorage.removeItem('userInfo');
  window.location.href = '/login';
 }
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-white shadow-lg transition-all duration-300 fixed h-full`}
      >
        <div className="flex items-center justify-between h-16 px-4">
          {isSidebarOpen && (
            <h1 className="text-xl font-bold text-primary">LITLIFE</h1>
          )}
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        <nav className="mt-8">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => SetViewPath(item.path)}
              className="w-full flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary transition-colors"
            >
              <item.icon size={20} />
              {isSidebarOpen && (
                <span className="ml-4">{item.label}</span>
              )}
            </button>
          ))}

          <button
            onClick={() => {HandelLogout()}}
            className="w-full flex items-center px-4 py-3 text-red-500 hover:bg-red-50 transition-colors mt-auto"
          >
            <FiLogOut size={20} />
            {isSidebarOpen && <span className="ml-4">Logout</span>}
          </button>
        </nav>

        {/* User Profile Section */}
        <div className="absolute bottom-0 w-full p-4 border-t">
          <div className="flex items-center">
            <img
              src="/api/placeholder/40/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            {isSidebarOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium">{JSON.parse(localStorage.getItem('userInfo')).username}</p>
                <p className="text-xs text-gray-500 capitalize">{JSON.parse(localStorage.getItem('userInfo')).user_type}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 ${
          isSidebarOpen ? 'ml-64' : 'ml-20'
        } transition-all duration-300`}
      >
        <header className="bg-white h-16 shadow-sm fixed w-full z-10">
          <div className="flex items-center justify-between h-full px-6">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <div className="flex items-center gap-4">
              {/* Add notification bell, profile dropdown, etc. here */}
            </div>
          </div>
        </header>
        <main className="p-6 mt-16">
          {setView == "overview" && <Overview/>}
          {setView == "courses" && <ManageCourses/>}
          {setView == "grading" && <GradingManagement/>}
          {setView == "users" && <UserManagement/>}
          {setView == "assessments" && <AssessmentManagement/>}
          {setView == "my-courses" && <CoursesList/>}
          {setView == "logout" && <LogoutManagement/>}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;