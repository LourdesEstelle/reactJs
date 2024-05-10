import React, { useState } from 'react';

const Students = () => {
  // State to manage the active department
  const [activeDepartment, setActiveDepartment] = useState(null);

  // Dummy data for departments and students
  const departments = [
    {
      id: 1,
      name: 'Computer Science',
      students: [
        'John Doe', 'Alice Smith', 'Bob Johnson', 'Emma Brown', 'Michael Wilson', 'Sarah Davis', 'James Miller',
        'Emma Garcia', 'David Martinez', 'Daniel White', 'Olivia Thompson', 'William Harris', 'Sophia Robinson',
        'Ethan Clark', 'Ava Lewis', 'Mia Rodriguez', 'Noah Martinez', 'Isabella Thompson', 'Logan Garcia', 'Sophia Clark'
      ],
    },
    {
      id: 2,
      name: 'Mathematics',
      students: [
        'Emily Brown', 'Michael Wilson', 'Sarah Davis', 'James Miller', 'Emma Garcia', 'David Martinez', 'Daniel White',
        'Olivia Thompson', 'William Harris', 'Sophia Robinson', 'Ethan Clark', 'Ava Lewis', 'Mia Rodriguez', 'Noah Martinez',
        'Isabella Thompson', 'Logan Garcia', 'Sophia Clark', 'Oliver Wilson', 'Amelia Harris', 'Benjamin Davis'
      ],
    },
    {
      id: 3,
      name: 'Physics',
      students: [
        'Daniel White', 'Olivia Thompson', 'William Harris', 'Sophia Robinson', 'Ethan Clark', 'Ava Lewis', 'Mia Rodriguez',
        'Noah Martinez', 'Isabella Thompson', 'Logan Garcia', 'Sophia Clark', 'Oliver Wilson', 'Amelia Harris', 'Benjamin Davis',
        'Emma Brown', 'Michael Wilson', 'Sarah Davis', 'James Miller', 'Emma Garcia', 'David Martinez'
      ],
    },
    {
      id: 4,
      name: 'Chemistry',
      students: [
        'Sophia Robinson', 'Ethan Clark', 'Ava Lewis', 'Mia Rodriguez', 'Noah Martinez', 'Isabella Thompson', 'Logan Garcia',
        'Sophia Clark', 'Oliver Wilson', 'Amelia Harris', 'Benjamin Davis', 'Emma Brown', 'Michael Wilson', 'Sarah Davis',
        'James Miller', 'Emma Garcia', 'David Martinez', 'Daniel White', 'Olivia Thompson', 'William Harris'
      ],
    },
    {
      id: 5,
      name: 'Biology',
      students: [
        'Mia Rodriguez', 'Noah Martinez', 'Isabella Thompson', 'Logan Garcia', 'Sophia Clark', 'Oliver Wilson', 'Amelia Harris',
        'Benjamin Davis', 'Emma Brown', 'Michael Wilson', 'Sarah Davis', 'James Miller', 'Emma Garcia', 'David Martinez', 'Daniel White',
        'Olivia Thompson', 'William Harris', 'Sophia Robinson', 'Ethan Clark', 'Ava Lewis'
      ],
    },
  ];
  

  // Function to toggle active department
  const toggleDepartment = (e, departmentId) => {
    e.stopPropagation(); // Stop event propagation
    setActiveDepartment(activeDepartment === departmentId ? null : departmentId);
  };

  return (
    <main className="flex-1 bg-gray-100 p-8">
      <h2 className="text-center text-gray-700 text-2xl font-semibold mb-4">List of Students by Department</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {departments.map((department) => (
          <div
            key={department.id}
            className={`bg-white shadow rounded-lg p-6 cursor-pointer transition duration-300 ease-in-out transform hover:bg-blue-100 hover:-translate-y-1 ${
              activeDepartment === department.id ? 'border border-blue-500' : ''
            }`}
            onClick={(e) => toggleDepartment(e, department.id)} // Pass the event and department id to the toggle function
          >
            <h3 className="text-lg font-semibold mb-2 text-center text-gray-900">{department.name}</h3>
            {/* Show students only if the department is active */}
            {activeDepartment === department.id && (
              <ul className="list-disc list-inside text-gray-700">
                {department.students.map((student, index) => (
                  <li key={index}>{student}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Students;
