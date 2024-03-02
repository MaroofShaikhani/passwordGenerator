import React from 'react';
import './Resume.css'; // Import CSS for styling (create this file if needed)

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2>Resume</h2>
        <div className="resume-item">
          <h3>Education</h3>
          <h3>10th</h3>
          <p>10th in Vidya Bhawan High School Nerul Securing 72%</p>
          <h3>12th</h3>
          <p>12th in Vidya Bhawan High School Nerul Securing 55%</p>
          <h3>BSC CS</h3>
          <p>Studied Bsc cs in SK Tilak College Securing 68%%</p>
          <h3>courses</h3>
          <p>Studied WEB DESIgner Course in CNC WEB WORLD</p>
        </div>
        {/* <div className="resume-item">
          <h3>Work Experience</h3>
          <p>Software Engineer Intern - ABC Company, Summer 20XX</p>
          <p>Web Developer - XYZ Agency, 20XX - Present</p>
        </div>
        Add more resume items as needed */}
      </div> 
    </section>
  );
}

export default Resume;
