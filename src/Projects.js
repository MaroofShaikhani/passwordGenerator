import React from 'react';
import './Projects.css'; // Import CSS for styling (create this file if needed)

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects">
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
          <img src="./img/Screenshot (8).png"/>
         <button>View Project</button>
         <button>View Code</button>
        </div>
        <div className="projectS">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
         
          <img src="./img/Screenshot (9).png"/>
          <button>View Project</button>
         <button>View Code</button>
        </div>
        <div className="projectS">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        
          <img src="./img/Screenshot (10).png"/>
          <button>View Project</button>
         <button>View Code</button>
        </div>
        {/* Add more project items as needed */}
      </div>
    </section>
  );
}

export default Projects;
