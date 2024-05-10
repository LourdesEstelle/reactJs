import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const activeClass = 'rounded-md bg-gray-600 text-white p-2';

  const sideBarArray = new Map([
    ['Dashboard', '/dashboard'],
    ['Admin', '/admin'],
    ['Students', '/students'],
    ['Message', '/message'],
    ['Content', '/content'],
  ]);

  const renderNavLinks = () => (
    <ul>
      {[...sideBarArray].map(([key, value]) => (
        <li key={value} className="mb-2">
          <NavLink
            exact
            to={value}
            className={`text-blue-500 ${location.pathname === value ? activeClass : ''}`}
          >
            {key}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <aside className="bg-gray-200 px-4 py-8 md:w-64 relative">
      <h2 className="text-lg font-semibold mb-4 text-center text-gray-800">Welcome User!</h2>
      <div className="sidebar-content">{renderNavLinks()}</div>
    </aside>
  );
};

export default Sidebar;
