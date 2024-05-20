// import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/about';
import ProjectsContainer from './containers/ProjectsContainer';
import Technologies from './components/Techologies';

function App() {
  return (
      <BrowserRouter>
        <section className="main-back-ground-color">
          <nav className='nav-bar'> 
            <img src="../icons/profileimg.jpeg" className="profile-img" alt="my self in blue tshirt"/>
            <div className="icons-container">
              <Link to="https://www.linkedin.com/in/yarvin-hernandez-332572aa/" className="icon-link">
                  <img src="icons/linkedin-original.svg" className="icons" alt="Linkedin icon"/> 
              </Link>
              <Link to="https://github.com/yarvinh" className="icon-link">
                <img src="icons/github-original-wordmark.svg" className="icons" alt="github icon"/> 
              </Link>
            </div>
          </nav>
          <About/>
          <section className='projects-container'>
            <ProjectsContainer projectName="Work Orders App" url="https://work-orders-frontend-e69a673b70ee.herokuapp.com">
                <p>
                    I created this app to help keep buildings maintenance record, you can create an account , login and logout, you can create locations, employees and you can create work orders and assign it to an employees. Backend technologies used: Ruby on rails JWT and postgresql, frontend technologies used: React ,Javascript. 
                </p>
            </ProjectsContainer>
            <ProjectsContainer projectName="EAST HARLEN CORP" url="https://safe-sands-70988-45596a723e4f.herokuapp.com/" >
              <p>
                I created this app to help keep buildings maintenance record, you can create an account , login and logout, you can create locations, employees and you can create work orders and assign it to an employees. Backend technologies used: Ruby on rails JWT and postgresql, frontend technologies used: React ,Javascript. 
              </p>
            </ProjectsContainer>
            <ProjectsContainer projectName="Soccer-quiz" url="https://rubygems.org/gems/soccer-quiz" >
              <p>
                I created this app to help keep buildings maintenance record, you can create an account , login and logout, you can create locations, employees and you can create work orders and assign it to an employees. Backend technologies used: Ruby on rails JWT and postgresql, frontend technologies used: React ,Javascript. 
              </p>
            </ProjectsContainer>
            <ProjectsContainer projectName="Bet App" url="">
              <p>
                I created this app to help keep buildings maintenance record, you can create an account , login and logout, you can create locations, employees and you can create work orders and assign it to an employees. Backend technologies used: Ruby on rails JWT and postgresql, frontend technologies used: React ,Javascript. 
              </p>
            </ProjectsContainer>
          </section>
        
        </section>
      
        <Routes>
           <Route path="/" element={<Home/>}/>
        </Routes>

      </BrowserRouter>
      
       
  );
}

export default App;
