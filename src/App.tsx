// import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/about';

function App() {
  return (
      <BrowserRouter>
        <section className="main-back-ground-color">
          <div className='about-me'>
             <div>
                <img src="profileimg.jpeg" className="profile-img" alt="my self in blue tshirt"/>
                <svg viewBox="0 0 500 128" xmlns="http://www.w3.org/200/svg"><path d="m116 3h-104a8.91 8.91 0 0 0 -9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81v-104.42a8.93 8.93 0 0 0 -9-8.77z" fill="#0076b2"/><g fill="#fff"><path d="m21.06 48.73h18.11v58.27h-18.11zm9.06-29a10.5 10.5 0 1 1 -10.5 10.49 10.5 10.5 0 0 1 10.5-10.49"/><path d="m50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41 18.34-.04 21.74 12.03 21.74 27.68v32h-18.11v-28.35c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15v28.79h-18.08z"/></g></svg>
                
             </div>
             <About/>
          </div>
         
        </section>

        <Routes>
           <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
       
  );
}

export default App;
