import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Join from './pages/Join';
import NewProject from './pages/NewProject';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/join" element={<Join />} />
              <Route path="/newProject" element={<NewProject />} />
            </Routes>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
