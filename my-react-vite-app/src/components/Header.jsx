import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'; // Import the pen icon from Font Awesome

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 transition duration-300 ease-in-out hover:bg-gray-900">
      <div className="container mx-auto px-4 flex items-center justify-center"> {/* Center the content horizontally */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPen} className="text-2xl mr-2" /> {/* Use the pen icon */}
          <h1 className="text-2xl font-bold">Header</h1>
        </div>
      </div>
    </header>
  );
}
