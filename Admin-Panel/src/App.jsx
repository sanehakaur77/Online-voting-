import React from 'react';
import AdminPanel from './pages/AdminPanel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddParties from './pages/AddParties';
import Admintasks from './pages/Admintasks';
import Parties from './pages/Parties';
import Results from './pages/Results';

const App = () => {
  return (
    <BrowserRouter> {/* Move this to wrap all route-related components */}
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<AdminPanel />} />
        <Route path="/add-parties" element={<AddParties />} />
        <Route path="/admintasks" element={<Admintasks/>} />
         <Route path="/parties" element={<Parties/>} />
          <Route path="/results" element={<Results/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;