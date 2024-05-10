import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export class Dashboard extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8">
        <h2 className="text-gray-700 text-center text-2xl font-semibold mb-4">Dashboard</h2>
        <div className="container mx-auto">
          <h1 className="text-gray-600 text-center text-3xl font-bold mb-4">Student Log</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">1</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    John Doe
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    john.doe@example.com
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">2</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    Jane Smith
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    jane.smith@example.com
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">3</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    John Doe
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    john.doe@example.com
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">4</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    Jane Smith
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    jane.smith@example.com
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">5</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    John Doe
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    john.doe@example.com
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">6</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    Jane Smith
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    jane.smith@example.com
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">7</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    John Doe
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    john.doe@example.com
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">8</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    Jane Smith
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    jane.smith@example.com
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">9</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    John Doe
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    john.doe@example.com
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">10</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    Jane Smith
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    jane.smith@example.com
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">11</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    John Doe
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    john.doe@example.com
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">12</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    Jane Smith
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    jane.smith@example.com
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">13</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    John Doe
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    john.doe@example.com
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">14</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    Jane Smith
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    jane.smith@example.com
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">15</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    John Doe
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    john.doe@example.com
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">16</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                    Jane Smith
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                    jane.smith@example.com
                  </td>
                </tr>
                { }
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;
