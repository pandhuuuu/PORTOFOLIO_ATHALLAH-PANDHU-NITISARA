import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProjectDetail from './ProjectDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        {/* Fallback to Home or a 404 page */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
