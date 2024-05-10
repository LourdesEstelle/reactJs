import React, { Component } from 'react';
import { LaptopIcon, DocumentIcon, BeakerIcon } from '@heroicons/react/solid';

class Navigation extends Component {
  render() {
    return (
      <nav className="bg-gray-200 p-4 mb-4">
        {/* Placeholder navigation links */}
        <ul className="flex">
          <li className="mr-4">
            <a href="https://www.ustp.edu.ph/" className="text-gray-800 hover:text-gray-900 hover:bg-gray-300 rounded-lg px-4 py-2 transition duration-300">Home</a>
          </li>
          <li className="mr-4">
            <a href="https://www.ustp.edu.ph/about-ustp/" className="text-gray-800 hover:text-gray-900 hover:bg-gray-300 rounded-lg px-4 py-2 transition duration-300">About</a>
          </li>
          <li>
            <a href="https://www.ustp.edu.ph/contact-us/" className="text-gray-800 hover:text-gray-900 hover:bg-gray-300 rounded-lg px-4 py-2 transition duration-300">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Logo extends Component {
  render() {
    return (
      <div className="text-center mb-8">
        {/* Placeholder logo */}
        <h1 className="text-3xl font-bold text-gray-900">Logo</h1>
      </div>
    );
  }
}

import { SolidLaptopIcon, SolidDocumentIcon, SolidBeakerIcon } from '@heroicons/react/solid';

class Graphics extends Component {
  render() {
    return (
      <div className="grid grid-cols-3 gap-4">
        {/* Placeholder graphics */}
        <a href="https://ustep.ustp.edu.ph/login/index.php" className="bg-gray-300 p-4 block text-center hover:bg-gray-400 transition duration-300">
          <SolidLaptopIcon className="h-6 w-6 mx-auto mb-2" />
          Graphic 1
        </a>
        <a href="https://prisms.ustp.edu.ph/auth/login" className="bg-gray-300 p-4 block text-center hover:bg-gray-400 transition duration-300">
          <SolidDocumentIcon className="h-6 w-6 mx-auto mb-2" />
          Graphic 2
        </a>
        <a href="https://hims.ustp.edu.ph/" className="bg-gray-300 p-4 block text-center hover:bg-gray-400 transition duration-300">
          <SolidBeakerIcon className="h-6 w-6 mx-auto mb-2" />
          Graphic 3
        </a>
      </div>
    );
  }
}





class AdminProfile extends Component {
  render() {
    return (
      <div className="bg-gray-300 p-4 mb-4">
        {/* Placeholder admin profile */}
        <h2 className="text-xl font-semibold mb-2">Admin Profile</h2>
        <p>This is the admin's profile information.</p>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8">
        <h2 className="text-gray-700 text-2xl font-semibold mb-4">Content</h2>
        {/* Render placeholder components */}
        <Navigation />
        <Logo />
        <AdminProfile />
        <Graphics />
        <p className="text-gray-800">This is the main content area of the application.</p>
      </main>
    );
  }
}

export default Content;
