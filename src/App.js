import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Timeline from './components/Timeline';
import Poem from './components/Poem';
import Quiz from './components/Quiz';
import LastPage from './components/LastPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/poem" element={<Poem />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/last-page" element={<LastPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
