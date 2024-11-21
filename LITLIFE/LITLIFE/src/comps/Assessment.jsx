import React, { useState } from 'react';
import { FileText, Edit, Trash2, Plus, Save, X } from 'lucide-react';

const AssessmentManagement = () => {
  const [assessments, setAssessments] = useState([
    {
      id: 1,
      title: 'Web Development Skills Test',
      type: 'Technical',
      duration: '60 mins',
      passingScore: 70,
    },
    {
      id: 2,
      title: 'Communication Skills Assessment',
      type: 'Soft Skills',
      duration: '45 mins',
      passingScore: 60,
    },
  ]);

  const [editingAssessment, setEditingAssessment] = useState(null);
  const [newAssessment, setNewAssessment] = useState({
    title: '',
    type: '',
    duration: '',
    passingScore: '',
  });
  const [error, setError] = useState('');

  const validateAssessment = (assessment) => {
    if (!assessment.title || !assessment.type || !assessment.duration || !assessment.passingScore) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleAddAssessment = () => {
    if (!validateAssessment(newAssessment)) return;

    const assessmentToAdd = {
      ...newAssessment,
      id: Date.now(), // Generate unique ID
    };

    setAssessments([...assessments, assessmentToAdd]);
    setNewAssessment({ title: '', type: '', duration: '', passingScore: '' });
  };

  const handleUpdateAssessment = () => {
    if (!validateAssessment(editingAssessment)) return;

    setAssessments(
      assessments.map((assessment) =>
        assessment.id === editingAssessment.id ? editingAssessment : assessment
      )
    );
    setEditingAssessment(null);
  };

  const handleDeleteAssessment = (assessmentId) => {
    if (window.confirm('Are you sure you want to delete this assessment?')) {
      setAssessments(assessments.filter((assessment) => assessment.id !== assessmentId));
    }
  };

  const handleEditAssessment = (assessment) => {
    setEditingAssessment(assessment);
  };

  const handleCancelEdit = () => {
    setEditingAssessment(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <FileText className="mr-3 text-yellow-800" size={32} />
            Assessment Management
          </h1>
        </div>

        {JSON.parse(localStorage.getItem('userInfo')).user_type === 'admin' && (
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
            <div className="grid grid-cols-5 gap-4 p-4 bg-gray-100 font-semibold">
              <input
                placeholder="Assessment Title"
                value={newAssessment.title}
                onChange={(e) => setNewAssessment({ ...newAssessment, title: e.target.value })}
                className={`border rounded px-2 py-1 ${error && !newAssessment.title ? 'border-red-500' : ''}`}
              />
              <select
                value={newAssessment.type}
                onChange={(e) => setNewAssessment({ ...newAssessment, type: e.target.value })}
                className={`border rounded px-2 py-1 ${error && !newAssessment.type ? 'border-red-500' : ''}`}
              >
                <option value="">Assessment Type</option>
                <option value="Technical">Technical</option>
                <option value="Soft Skills">Soft Skills</option>
                <option value="Behavioral">Behavioral</option>
              </select>
              <input
                placeholder="Duration (mins)"
                type="number"
                value={newAssessment.duration}
                onChange={(e) => setNewAssessment({ ...newAssessment, duration: e.target.value })}
                className={`border rounded px-2 py-1 ${error && !newAssessment.duration ? 'border-red-500' : ''}`}
              />
              <input
                placeholder="Passing Score (%)"
                type="number"
                value={newAssessment.passingScore}
                onChange={(e) => setNewAssessment({ ...newAssessment, passingScore: e.target.value })}
                className={`border rounded px-2 py-1 ${error && !newAssessment.passingScore ? 'border-red-500' : ''}`}
              />
              <button
                onClick={handleAddAssessment}
                className="bg-yellow-800 text-white px-4 py-1 rounded hover:bg-yellow-900 flex items-center justify-center"
              >
                <Plus className="mr-2" size={16} /> Add Assessment
              </button>
            </div>
            {error && <p className="text-red-500 text-sm p-4">{error}</p>}
          </div>
        )}

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Duration</th>
                <th className="p-4 text-left">Passing Score</th>
                {JSON.parse(localStorage.getItem('userInfo')).user_type === 'admin' && (
                  <th className="p-4 text-center">Actions</th>
                )}
              </tr>
            </thead>
            <tbody>
              {assessments.map((assessment) => (
                <tr key={assessment.id} className="border-b hover:bg-gray-50">
                  {editingAssessment && editingAssessment.id === assessment.id ? (
                    <>
                      <td className="p-4">
                        <input
                          value={editingAssessment.title}
                          onChange={(e) => setEditingAssessment({ ...editingAssessment, title: e.target.value })}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="p-4">
                        <select
                          value={editingAssessment.type}
                          onChange={(e) => setEditingAssessment({ ...editingAssessment, type: e.target.value })}
                          className="border rounded px-2 py-1 w-full"
                        >
                          <option value="Technical">Technical</option>
                          <option value="Soft Skills">Soft Skills</option>
                          <option value="Behavioral">Behavioral</option>
                        </select>
                      </td>
                      <td className="p-4">
                        <input
                          type="number"
                          value={editingAssessment.duration}
                          onChange={(e) => setEditingAssessment({ ...editingAssessment, duration: e.target.value })}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="p-4">
                        <input
                          type="number"
                          value={editingAssessment.passingScore}
                          onChange={(e) => setEditingAssessment({ ...editingAssessment, passingScore: e.target.value })}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      {JSON.parse(localStorage.getItem('userInfo')).user_type === 'admin' && (
                      <td className="p-4 flex justify-center space-x-3">
                        <button
                          onClick={handleUpdateAssessment}
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
                      )}
                    </>
                  ) : (
                    <>
                      <td className="p-4">{assessment.title}</td>
                      <td className="p-4">{assessment.type}</td>
                      <td className="p-4">{assessment.duration} mins</td>
                      <td className="p-4">{assessment.passingScore}%</td>
                      {JSON.parse(localStorage.getItem('userInfo')).user_type === 'admin' && (
                      <td className="p-4 flex justify-center space-x-3">
                        <button
                          onClick={() => handleEditAssessment(assessment)}
                          className="text-yellow-800 hover:text-yellow-900"
                        >
                          <Edit size={20} />
                        </button>
                        <button
                          onClick={() => handleDeleteAssessment(assessment.id)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 size={20} />
                        </button>
                      </td>
                      )}
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

export default AssessmentManagement;
