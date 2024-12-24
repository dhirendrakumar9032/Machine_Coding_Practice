import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage/HomePage';
import TabsQuestion from './pages/TabsQuestion';
import { AutoComplete } from './pages/AutoComplete';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tabs" element={<TabsQuestion />} />
          <Route path="/autoComplete" element={<AutoComplete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;