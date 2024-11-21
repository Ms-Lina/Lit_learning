import React, { useState } from 'react';
import { Users, Edit, Trash2, Plus, Save, X } from 'lucide-react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Manager' }
  ]);

  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role) return;

    const userToAdd = {
      ...newUser,
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1
    };

    setUsers([...users, userToAdd]);
    setNewUser({ name: '', email: '', role: '' });
  };

  const handleUpdateUser = () => {
    if (!editingUser.name || !editingUser.email || !editingUser.role) return;

    setUsers(users.map(user => 
      user.id === editingUser.id ? editingUser : user
    ));
    setEditingUser(null);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Users className="mr-3 text-yellow-800" size={32} />
            User Management
          </h1>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 font-semibold">
            <input 
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({...newUser, name: e.target.value})}
              className="border rounded px-2 py-1"
            />
            <input 
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({...newUser, email: e.target.value})}
              className="border rounded px-2 py-1"
            />
            <select 
              value={newUser.role}
              onChange={(e) => setNewUser({...newUser, role: e.target.value})}
              className="border rounded px-2 py-1"
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Manager">Manager</option>
            </select>
            <button 
              onClick={handleAddUser}
              className="bg-yellow-800 text-white px-4 py-1 rounded hover:bg-yellow-900 flex items-center justify-center"
            >
              <Plus className="mr-2" size={16} /> Add User
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Role</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  {editingUser && editingUser.id === user.id ? (
                    <>
                      <td className="p-4">
                        <input 
                          value={editingUser.name}
                          onChange={(e) => setEditingUser({...editingUser, name: e.target.value})}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="p-4">
                        <input 
                          value={editingUser.email}
                          onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="p-4">
                        <select 
                          value={editingUser.role}
                          onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}
                          className="border rounded px-2 py-1 w-full"
                        >
                          <option value="Admin">Admin</option>
                          <option value="User">User</option>
                          <option value="Manager">Manager</option>
                        </select>
                      </td>
                      <td className="p-4 flex justify-center space-x-3">
                        <button 
                          onClick={handleUpdateUser}
                          className="text-yellow-800 hover:text-yellow-900"
                        >
                          <Save size={20} />
                        </button>
                        <button 
                          onClick={handleCancelEdit}
                          className="text-red-500 hover:text-red-600"
                        >
                          <X size={20} />
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-4">{user.name}</td>
                      <td className="p-4">{user.email}</td>
                      <td className="p-4">{user.role}</td>
                      <td className="p-4 flex justify-center space-x-3">
                        <button 
                          onClick={() => handleEditUser(user)}
                          className="text-yellow-800 hover:text-yellow-900"
                        >
                          <Edit size={20} />
                        </button>
                        <button 
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 size={20} />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;