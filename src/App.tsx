// import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/about';
import ProjectsContainer from './containers/ProjectsContainer';

function App() {
  return (
      <BrowserRouter>
        <section className="main-back-ground-color">
          <nav className='nav-bar'> 
            <img src="profileimg.jpeg" className="profile-img" alt="my self in blue tshirt"/>
            <div className="icons-container">
              <Link to="https://www.linkedin.com/in/yarvin-hernandez-332572aa/" className="icon-div">
                  <img src="linkedin-original.svg" className="icons" alt="Linkedin icon"/> 
              </Link>
              <Link to="https://github.com/yarvinh" className="icon-div">
                <img src="github-original-wordmark.svg" className="icons" alt="github icon"/> 
              </Link>
            </div>
          </nav>

          <section >
            <ProjectsContainer/>
            <About/>

          </section>
    
         
        </section>
      
        <Routes>
           <Route path="/" element={<Home/>}/>
        </Routes>

      </BrowserRouter>
      
       
  );
}

export default App;
