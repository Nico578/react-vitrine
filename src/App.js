import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Projet1' element={<Project1/>}/>
        <Route path='/Projet2' element={<Project2/>}/>
        <Route path='/Projet3' element={<Project3/>}/>
        <Route path='/Projet4' element={<Project4/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
