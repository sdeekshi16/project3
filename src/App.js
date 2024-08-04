import React from 'react';
import CompanyName from './CompanyName';
import CompanyDetails from './CompanyDetails';

function App() {
    return (
        <div className="App">
            <CompanyName name="Google" />
            <CompanyDetails />
        </div>
    );
}

export default App;
