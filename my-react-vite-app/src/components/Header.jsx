import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPen} className="text-2xl mr-2" />
          <h1 className="text-2xl font-bold">Header</h1>
        </div>
      </div>
    </header>
  );
}
