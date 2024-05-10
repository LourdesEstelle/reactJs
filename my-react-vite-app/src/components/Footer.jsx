import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 My Footer</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
