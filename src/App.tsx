// import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
// import Home from './components/Home';
import About from './components/about';
import ProjectsContainer from './containers/ProjectsContainer';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Home from './components/Home';
import NavBar from './components/NavBar';


function App() {
  return (
      <BrowserRouter>
        <main className="main-back-ground-color">
          {window.location.pathname !== "/resume" && <NavBar/>}
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path="/resume" element={<Resume/>}/>
          </Routes>
          {(window.location.pathname !== "/resume") && <Footer/>}
        </main>
      </BrowserRouter>
      
       
  );
}

export default App;
