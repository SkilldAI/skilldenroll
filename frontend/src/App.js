import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SkilldEnrollApp from './components';
import VoiceAIArchitecturePage from './VoiceAIArchitecture';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SkilldEnrollApp />} />
          <Route path="/voice-ai-architecture" element={<VoiceAIArchitecturePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;