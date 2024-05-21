// import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
// import Home from './components/Home';
import About from './components/about';
import ProjectsContainer from './containers/ProjectsContainer';
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

{/* <img src="icons/html5-original-wordmark.svg" className="icons" alt="HTML5 icon"/>
<img src="icons/css3-original-wordmark.svg" className="icons" alt="css3 icon"/>
<img src="icons/postgresql-plain-wordmark.svg" className="icons" alt="postgresql icon"/>
<img src="icons/react-original.svg" className="icons" alt="HTML5 icon"/>
<img src="icons/rails-plain-wordmark.svg" className="icons" alt="Ruby On Rails icon"/> */}
function App() {
  console.log(img)
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
            <ProjectsContainer projectName="Work Orders App" url="https://work-orders-frontend-e69a673b70ee.herokuapp.com" icons={[img.htmlIcon, img.cssIcon,img.postgresqlIcon,img.railsIcon, img.reactIcon]}>
                <p>
                    I created this app to help keep buildings maintenance record, you can create an account , login and logout, you can create locations, employees and you can create work orders and assign it to an employees. Backend technologies used: Ruby on rails JWT and postgresql, frontend technologies used: React ,Javascript. 
                </p>
            </ProjectsContainer>
            <ProjectsContainer projectName="East Harlem Corp" url="https://safe-sands-70988-45596a723e4f.herokuapp.com/" icons={[img.railsIcon,img.cssIcon, img.htmlIcon]}>
              <p>
                I created this app to help keep buildings maintenance record, you can create an account , login and logout, you can create locations, employees and you can create work orders and assign it to an employees. Backend technologies used: Ruby on rails JWT and postgresql, frontend technologies used: React ,Javascript. 
              </p>
            </ProjectsContainer>
            <ProjectsContainer projectName="Soccer-quiz" url="https://rubygems.org/gems/soccer-quiz" icons={[img.rubyIcon]}>
              <p>
                I created this app to help keep buildings maintenance record, you can create an account , login and logout, you can create locations, employees and you can create work orders and assign it to an employees. Backend technologies used: Ruby on rails JWT and postgresql, frontend technologies used: React ,Javascript. 
              </p>
            </ProjectsContainer>
            <ProjectsContainer projectName="Bet App" url="" icons={[img.htmlIcon, img.cssIcon,img.postgresqlIcon,img.railsIcon, img.reactIcon]} >
              <p>
                I created this app to help keep buildings maintenance record, you can create an account , login and logout, you can create locations, employees and you can create work orders and assign it to an employees. Backend technologies used: Ruby on rails JWT and postgresql, frontend technologies used: React ,Javascript. 
              </p>
            </ProjectsContainer>
          </section>
        
        </section>
      </BrowserRouter>
      
       
  );
}

export default App;
