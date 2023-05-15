import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Button from './Components/Button';
import ChartPage from './Components/ChartPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
