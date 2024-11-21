// src/components/dashboard/views/ManageCourses.js
import React, { useState } from 'react';
import { FiEdit, FiTrash, FiPlus, FiBookOpen, FiUsers, FiEye } from 'react-icons/fi';

const CourseCard = ({ icon: Icon, title, students, status, onEdit, onDelete, onViewDetails }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-center">
    <div>
      <div className="flex items-center space-x-4">
        <div className="bg-primary bg-opacity-10 p-4 rounded-full">
          <Icon size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500 text-sm">{students} learners enrolled</p>
        </div>
      </div>
      <p className={`text-sm mt-2 ${status === 'Active' ? 'text-green-500' : 'text-gray-400'}`}>
        {status}
      </p>
    </div>
    <div className="flex space-x-3">
      <button onClick={onViewDetails} className="text-blue-500 hover:text-blue-700">
        <FiEye size={20} />
      </button>
      <button onClick={onEdit} className="text-blue-500 hover:text-blue-700">
        <FiEdit size={20} />
      </button>
      <button onClick={onDelete} className="text-red-500 hover:text-red-700">
        <FiTrash size={20} />
      </button>
    </div>
  </div>
);

const ManageCourses = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "Basic Literacy", chapters: "Reading, Writing", students: 200, progress: 78, status: "Active" },
    { id: 2, title: "Math Fundamentals", chapters: "Addition, Subtraction", students: 150, progress: 60, status: "Inactive" },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(null);

  const [newCourse, setNewCourse] = useState({
    title: "", chapters: "", students: 0, progress: 0, status: "Active"
  });

  const handleAddCourse = () => {
    setCourses([...courses, { ...newCourse, id: Date.now() }]);
    setShowAddModal(false);
    setNewCourse({ title: "", chapters: "", students: 0, progress: 0, status: "Active" });
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const handleViewDetails = (course) => {
    setShowDetailsModal(course);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Manage Courses</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
        >
          <FiPlus size={20} className="mr-2" />
          Add Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            icon={FiBookOpen}
            title={course.title}
            students={course.students}
            status={course.status}
            onEdit={() => console.log("Edit course")}
            onDelete={() => handleDeleteCourse(course.id)}
            onViewDetails={() => handleViewDetails(course)}
          />
        ))}
      </div>

      {/* Add Course Modal */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Add New Course</h2>
            <input
              type="text"
              placeholder="Course Title"
              className="border p-2 rounded mb-2 w-full"
              value={newCourse.title}
              onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Chapters Included"
              className="border p-2 rounded mb-2 w-full"
              value={newCourse.chapters}
              onChange={(e) => setNewCourse({ ...newCourse, chapters: e.target.value })}
            />
            <input
              type="number"
              placeholder="Number of Learners Enrolled"
              className="border p-2 rounded mb-2 w-full"
              value={newCourse.students}
              onChange={(e) => setNewCourse({ ...newCourse, students: e.target.value })}
            />
            <input
              type="number"
              placeholder="Average Progress"
              className="border p-2 rounded mb-2 w-full"
              value={newCourse.progress}
              onChange={(e) => setNewCourse({ ...newCourse, progress: e.target.value })}
            />
            <button
              onClick={handleAddCourse}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark w-full mt-2"
            >
              Add Course
            </button>
          </div>
        </div>
      )}

      {/* Course Details Modal */}
      {showDetailsModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Course Details</h2>
            <p><strong>Title:</strong> {showDetailsModal.title}</p>
            <p><strong>Chapters:</strong> {showDetailsModal.chapters}</p>
            <p><strong>Number of Learners Enrolled:</strong> {showDetailsModal.students}</p>
            <p><strong>Average Progress:</strong> {showDetailsModal.progress}%</p>
            <button
              onClick={() => setShowDetailsModal(null)}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark w-full mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCourses;
