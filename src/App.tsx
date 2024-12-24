import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage/HomePage';
import TabsQuestion from './pages/TabsQuestion';
import { AutoSearch } from './pages/AutoSearch';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tabs" element={<TabsQuestion />} />
          <Route path="/autoSearch" element={<AutoSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;