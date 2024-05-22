// import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
// import Home from './components/Home';
import About from './components/about';
import ProjectsContainer from './containers/ProjectsContainer';
import Footer from './components/Footer';
type Img = {
  htmlIcon: string;
  cssIcon: string;
  postgresqlIcon: string;
  reactIcon: string;
  railsIcon: string;
  rubyIcon: string;
};

const img: Img = {
  htmlIcon:"icons/html5-original-wordmark.svg" ,
  cssIcon: "icons/css3-original-wordmark.svg" ,
  postgresqlIcon: "icons/postgresql-plain-wordmark.svg",
  reactIcon: "icons/react-original.svg",
  railsIcon:"icons/rails-plain-wordmark.svg",
  rubyIcon: "icons/ruby-plain-wordmark.svg"
}

function App() {
  return (
      <BrowserRouter>
        <main className="main-back-ground-color">
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
            <ProjectsContainer projectName="Work Orders App" url="https://work-orders-frontend-e69a673b70ee.herokuapp.com" icons={[img.htmlIcon, img.cssIcon,img.postgresqlIcon,img.railsIcon, img.reactIcon]}>
                <p className='project-text'>
                    Work orders app keep buildings maintenance record. You can create an account, login and logout, you can create locations, employees, work orders and assign it to an employees.
                    You can see any HPD violation or complaint, and you can see any DOB violation.
                </p>
            </ProjectsContainer>
            <ProjectsContainer projectName="East Harlem Corp" url="https://safe-sands-70988-45596a723e4f.herokuapp.com/" icons={[img.railsIcon,img.cssIcon, img.htmlIcon]}>
              <p className='project-text'>
                This app was build for a contruction company, they can upload images of construction renovation. constumers can apply for a quote.
              </p>
            </ProjectsContainer>
            <ProjectsContainer projectName="Soccer-quiz" url="https://rubygems.org/gems/soccer-quiz" icons={[img.rubyIcon]}>
              <p className='project-text'>
                
              </p>
            </ProjectsContainer>
            <ProjectsContainer projectName="Bet App" url="" icons={[img.htmlIcon, img.cssIcon,img.postgresqlIcon,img.railsIcon, img.reactIcon]} >
              <p className='project-text'>
              This is a soccer betting app where users have the ability to login, logout and sign-up. Users can also see, bet and like upcoming soccer matches.
              </p>
            </ProjectsContainer>
          </section>
          <Footer/>
        </main>
      </BrowserRouter>
      
       
  );
}

export default App;
