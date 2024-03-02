import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Header';
import About from './About';
import Resume from './Resume';
 import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">

        <BrowserRouter>
        <Header/>
          <Routes>
             <Route path="/" element={<About/>}/>
             <Route path="resume" element={<Resume/>}/>
             <Route path="projects" element={<Projects/>}/>
             <Route path="contact" element={<Contact/>}/>

          </Routes>
          
        </BrowserRouter>
    </div>
  );
}

export default App;
