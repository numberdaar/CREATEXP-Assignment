import React, { useState, useEffect } from 'react';
import ClientListTable from './components/ClientListTable';
import SortPanel from './components/SortPanel';
import { mockClients } from './data/mockData.jsx';

function App() {
  const [clients, setClients] = useState(mockClients);
  const [sortCriteria, setSortCriteria] = useState([
    { id: 'clientName', field: 'clientName', direction: 'asc', label: 'Client Name', icon: '👤' },
    { id: 'createdAt', field: 'createdAt', direction: 'asc', label: 'Created At', icon: '📅' }
  ]);
  const [showSortPanel, setShowSortPanel] = useState(false);
  const [activeTab, setActiveTab] = useState('All');

  // Apply sorting when sort criteria changes
  useEffect(() => {
    const sortedClients = [...mockClients].sort((a, b) => {
      for (const criterion of sortCriteria) {
        const aValue = a[criterion.field];
        const bValue = b[criterion.field];
        
        if (aValue < bValue) {
          return criterion.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return criterion.direction === 'asc' ? 1 : -1;
        }
      }
      return 0;
    });
    
    setClients(sortedClients);
  }, [sortCriteria]);

  const handleSortCriteriaChange = (newCriteria) => {
    setSortCriteria(newCriteria);
  };

  const handleApplySort = () => {
    setShowSortPanel(false);
  };

  const handleClearAll = () => {
    setSortCriteria([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Clients</h1>
                
                {/* Tabs */}
                <div className="flex space-x-8 mt-4">
                  {['All', 'Individual', 'Company'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab
                          ? 'border-black text-black'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                
                <button 
                  className="p-2 text-gray-400 hover:text-gray-600 relative"
                  onClick={() => setShowSortPanel(!showSortPanel)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                  {sortCriteria.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {sortCriteria.length}
                    </span>
                  )}
                </button>
                
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                  </svg>
                </button>
                
                <button className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-800">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Add Client</span>
                </button>
              </div>
            </div>
          </div>

          {/* Table and Sort Panel */}
          <div className="relative">
            <ClientListTable clients={clients} />
            
            {showSortPanel && (
              <SortPanel
                sortCriteria={sortCriteria}
                onSortCriteriaChange={handleSortCriteriaChange}
                onApplySort={handleApplySort}
                onClearAll={handleClearAll}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 