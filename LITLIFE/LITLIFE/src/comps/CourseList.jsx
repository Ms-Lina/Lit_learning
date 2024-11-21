import React, { useState } from "react";

const Dashboard = () => {
  const [courses, setCourses] = useState([
    { id: 1, courseName: "Web Development", instructor: "John Doe", schedule: "Mon, Wed, Fri - 10:00 AM" },
    { id: 2, courseName: "Data Structures", instructor: "Jane Smith", schedule: "Tue, Thu - 2:00 PM" },
    { id: 3, courseName: "Database Systems", instructor: "Alice Johnson", schedule: "Mon, Wed - 1:00 PM" },
  ]);

  const [newCourse, setNewCourse] = useState({ courseName: "", instructor: "", schedule: "" });
  const [searchQuery, setSearchQuery] = useState("");

  const addCourse = () => {
    if (!newCourse.courseName || !newCourse.instructor || !newCourse.schedule) return;
    setCourses([...courses, { ...newCourse, id: Date.now() }]);
    setNewCourse({ courseName: "", instructor: "", schedule: "" });
  };

  const removeCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <span className="bg-yellow-800 text-white px-4 py-2 rounded">
            Total Courses: {courses.length}
          </span>
        </header>


        {/* Search Bar */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        {/* Courses Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-4">Course Name</th>
                <th className="p-4">Instructor</th>
                <th className="p-4">Schedule</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course) => (
                <tr key={course.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{course.courseName}</td>
                  <td className="p-4">{course.instructor}</td>
                  <td className="p-4">{course.schedule}</td>
                  <td className="p-4 flex justify-center space-x-3">
                    <button
                      onClick={() => removeCourse(course.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              {filteredCourses.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No courses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
