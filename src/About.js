import React from 'react';
import './About.css'; // Import CSS for styling (create this file if needed)

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <img src="./img/profile-img.jpg"/>
        <p>
        Hi there! My name is Maroof, and I'm currently studying web design at CNC. I have a passion for creating beautiful and user-friendly websites that make a positive impact. 
          </p>
          <p>
            In my courses, I've been learning various aspects of web design, including HTML, CSS, JavaScript, responsive design, UI/UX principles, and more. I'm excited to apply my skills and knowledge to real-world projects and further develop my abilities as a web designer.
          </p>
          <p>
            Outside of my studies, I enjoy exploring the latest trends in web design, experimenting with different design tools and techniques, and collaborating with fellow designers and developers to enhance my skills.
          </p>
          <p>
            I'm eager to continue learning and growing in the field of web design, and I'm always open to new opportunities and challenges. Feel free to reach out to me if you'd like to connect or collaborate on a project!
          </p>
      </div>
    </section>
  );
}

export default About;
