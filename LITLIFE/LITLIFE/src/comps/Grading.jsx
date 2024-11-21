import React, { useState } from 'react';
import { Award, Edit, Trash2, Plus, Save, X } from 'lucide-react';

const GradingManagement = () => {
  const [grades, setGrades] = useState([
    { 
      id: 1, 
      studentName: 'John Doe', 
      assessment: 'Web Development Test', 
      score: 85, 
      maxScore: 100, 
      status: 'Passed' 
    },
    { 
      id: 2, 
      studentName: 'Jane Smith', 
      assessment: 'Communication Skills', 
      score: 72, 
      maxScore: 100, 
      status: 'Passed' 
    }
  ]);

  const [editingGrade, setEditingGrade] = useState(null);
  const [newGrade, setNewGrade] = useState({
    studentName: '',
    assessment: '',
    score: '',
    maxScore: ''
  });

  const calculateStatus = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;
    return percentage >= 70 ? 'Passed' : 'Failed';
  };

  const handleAddGrade = () => {
    if (!newGrade.studentName || !newGrade.assessment || !newGrade.score || !newGrade.maxScore) return;

    const gradeToAdd = {
      ...newGrade,
      id: grades.length > 0 ? Math.max(...grades.map(g => g.id)) + 1 : 1,
      status: calculateStatus(newGrade.score, newGrade.maxScore)
    };

    setGrades([...grades, gradeToAdd]);
    setNewGrade({ studentName: '', assessment: '', score: '', maxScore: '' });
  };

  const handleUpdateGrade = () => {
    if (!editingGrade.studentName || !editingGrade.assessment || !editingGrade.score || !editingGrade.maxScore) return;

    setGrades(grades.map(grade => 
      grade.id === editingGrade.id 
        ? {...editingGrade, status: calculateStatus(editingGrade.score, editingGrade.maxScore)} 
        : grade
    ));
    setEditingGrade(null);
  };

  const handleDeleteGrade = (gradeId) => {
    setGrades(grades.filter(grade => grade.id !== gradeId));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Award className="mr-3 text-yellow-800" size={32} />
            Grading Management
          </h1>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <div className="grid grid-cols-5 gap-4 p-4 bg-gray-100 font-semibold">
            <input 
              placeholder="Student Name"
              value={newGrade.studentName}
              onChange={(e) => setNewGrade({...newGrade, studentName: e.target.value})}
              className="border rounded px-2 py-1"
            />
            <input 
              placeholder="Assessment"
              value={newGrade.assessment}
              onChange={(e) => setNewGrade({...newGrade, assessment: e.target.value})}
              className="border rounded px-2 py-1"
            />
            <input 
              type="number"
              placeholder="Score"
              value={newGrade.score}
              onChange={(e) => setNewGrade({...newGrade, score: e.target.value})}
              className="border rounded px-2 py-1"
            />
            <input 
              type="number"
              placeholder="Max Score"
              value={newGrade.maxScore}
              onChange={(e) => setNewGrade({...newGrade, maxScore: e.target.value})}
              className="border rounded px-2 py-1"
            />
            <button 
              onClick={handleAddGrade}
              className="bg-yellow-800 text-white px-4 py-1 rounded hover:bg-yellow-900 flex items-center justify-center"
            >
              <Plus className="mr-2" size={16} /> Add Grade
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-4 text-left">Student Name</th>
                <th className="p-4 text-left">Assessment</th>
                <th className="p-4 text-left">Score</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {grades.map(grade => (
                <tr key={grade.id} className="border-b hover:bg-gray-50">
                  {editingGrade && editingGrade.id === grade.id ? (
                    <>
                      <td className="p-4">
                        <input 
                          value={editingGrade.studentName}
                          onChange={(e) => setEditingGrade({...editingGrade, studentName: e.target.value})}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="p-4">
                        <input 
                          value={editingGrade.assessment}
                          onChange={(e) => setEditingGrade({...editingGrade, assessment: e.target.value})}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <input 
                            type="number"
                            value={editingGrade.score}
                            onChange={(e) => setEditingGrade({...editingGrade, score: e.target.value})}
                            className="border rounded px-2 py-1 w-20 mr-2"
                          />
                          / {editingGrade.maxScore}
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded ${editingGrade.status === 'Passed' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                          {editingGrade.status}
                        </span>
                      </td>
                      <td className="p-4 flex justify-center space-x-3">
                        <button 
                          onClick={handleUpdateGrade}
                          className="text-yellow-800 hover:text-yellow-900"
                        >
                          <Save size={20} />
                        </button>
                        <button 
                          onClick={() => setEditingGrade(null)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <X size={20} />
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-4">{grade.studentName}</td>
                      <td className="p-4">{grade.assessment}</td>
                      <td className="p-4">
                        {grade.score} / {grade.maxScore}
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded ${grade.status === 'Passed' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                          {grade.status}
                        </span>
                      </td>
                      <td className="p-4 flex justify-center space-x-3">
                        <button 
                          onClick={() => setEditingGrade(grade)}
                          className="text-yellow-800 hover:text-yellow-900"
                        >
                          <Edit size={20} />
                        </button>
                        <button 
                          onClick={() => handleDeleteGrade(grade.id)}
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

export default GradingManagement;