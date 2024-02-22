import React from 'react';
import Homepage from './Homepage/Homepage';
import ErrorBoundary from './ErrorBoundry';

function Dashboard() {
  return (
    <div>
      <ErrorBoundary>
        <Homepage />
      </ErrorBoundary>
    </div>
  );
}

export default Dashboard
