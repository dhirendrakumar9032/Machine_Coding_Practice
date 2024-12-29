import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage/HomePage';
import { AutoComplete } from './pages/AutoComplete';
import {PieChart} from './pages/PieChart'
import {CountDownTimer} from './pages/CountDownTimer'
import {MultiSelectSearch} from './pages/MultiSelectSearch'
import {ProgressBar} from './pages/ProgressBar'


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/autoComplete" element={<AutoComplete />} />
          <Route path="/pieChart" element={<PieChart />} />
          <Route path="/countDownTimer" element={<CountDownTimer />} />
          <Route path="/multiSelectSearch" element={<MultiSelectSearch />} />
          <Route path="/progressBar" element={<ProgressBar />} />

        </Routes>
      </div>
    </Router>
  );
}
export default App;