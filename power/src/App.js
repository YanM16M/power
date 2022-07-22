import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Join from './pages/Join';
import NewProject from './pages/NewProject';
import MyProjects from './pages/MyProjects';

function App() {
  const [token, setToken] = useState('');
  const [myUsername, setMyUsername] = useState('');

  return (
    <div className="App">
        <Router>
          <Navbar setToken={setToken} token={token} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/join" element={<Join token={token} setToken={setToken} setMyUsername={setMyUsername}/>} />
              <Route path="/newProject" element={<NewProject myUsername={myUsername}/>} />
              <Route path="/myProjects" element={<MyProjects myUsername={myUsername}/>} />
              <Route path="/allProjects" element={<NewProject />} />
            </Routes>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
