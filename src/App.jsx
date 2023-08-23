import React,{useState} from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import '../src/App.css';
import Home from './Pages/Home';
import Datascience from './Pages/DataScience';
import Cybersecurity from './Pages/CyberSecurity';
import Career from './Pages/Career';
import Fullstack from './Pages/Fullstack';
import Navbar from './Components/Navbar';
import Header from './Components/Header';

function App() {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  return (
     <div className="App">
      <Navbar/>
      <Header/>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          {navbarExpanded ? 'Blog Category' : null}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavbarToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navbarExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                ALL
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/full-stack-development">
                FULL STACK DEVELOPMENT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/data-science">
                DATA SCIENCE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cyber-security">
                CYBER SECURITY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career">
                CAREER
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/full-stack-development' element={<Fullstack />} />
        <Route path='/data-science' element={<Datascience />} />
        <Route path='/cyber-security' element={<Cybersecurity />} />
        <Route path='/career' element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;