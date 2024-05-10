import React, { Component } from 'react';
import Graph from './Graph'; // Import the Graph component

class Content extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8">
        <h2 className="text-gray-700 text-2xl font-semibold mb-4">Content</h2>
        {/* Render placeholder components */}
        <Navigation />
        <Logo />
        <Graph />
        <p className="text-gray-800">This is the main content area of the application.</p>
      </main>
    );
  }
}

export default Content;
