import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './Home/Home';
import Course from './Courses/Course';
import Signup from './components/Signup';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <>
<div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Courses" element={<Course/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        

      </Routes>
      </div>
    </>
  );
}

export default App;
