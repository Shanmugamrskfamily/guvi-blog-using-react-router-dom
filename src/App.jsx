import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../src/App.css';
import Home from './Pages/Home';
import Datascience from './Pages/DataScience';
import Cybersecurity from './Pages/CyberSecurity';
import Career from './Pages/Career';
import Fullstack from './Pages/Fullstack';
import Navbar from '../src/Components/Navbar/Navbar';
import Header from '../src/Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav justify-content-center links-style">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <p className='w-100 text-align-center'>ALL</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/full-stack-development">
                  <p className='w-100 text-align-center'>FULL STACK DEVELOPMENT</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/data-science">
                  <p className='w-100 text-align-center'>DATA SCIENCE</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cyber-security">
                  <p className='w-100 text-align-center'>CYBER SECURITY</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/career">
                  <p className='w-100 text-align-center'>CAREER</p>
                </Link>
              </li>
            </ul>
          </div>
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
