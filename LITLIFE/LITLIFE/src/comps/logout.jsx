import React from 'react';
import { LogOut, UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication token from local storage
    localStorage.removeItem('authToken');
    
    // Clear any user-related session data
    localStorage.removeItem('userProfile');
    
    // Optional: Call logout API if required
    // axios.post('/api/logout')
    
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <UserCircle className="mx-auto mb-6 text-yellow-800" size={64} />
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Admin Logout
        </h2>
        
        <p className="text-gray-600 mb-6">
          Are you sure you want to log out of the admin dashboard?
        </p>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => navigate(-1)}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-yellow-800 text-white rounded-md hover:bg-yellow-900 flex items-center"
          >
            <LogOut className="mr-2" size={20} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogout;