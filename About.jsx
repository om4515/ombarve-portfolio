import React from 'react'
function About() {
  return (
    <section id="about" className="about-section">
      <div>
        <h2 className="about-heading">
          <i className="bi bi-person about-icon"></i> About Me
        </h2>
      </div>
      <div className="about-text">
        <p>
          I'm a passionate frontend developer with a strong focus on creating intuitive and engaging user experiences.
          With expertise in modern frontend technologies like React, I transform ideas into functional, beautiful websites and applications.
        </p>
        <p>
          My journey in web development began with a fascination for the intersection of design and technology. This led me to master HTML, CSS, and JavaScript, and eventually specialize in building responsive and accessible web interfaces.
        </p>
        <p>
          I believe that great frontend development is about more than just code; it's about solving problems and creating experiences that users love to interact with. This philosophy guides my approach to every project.
        </p>
        <p>
          When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or experimenting with emerging web technologies.
        </p>
      </div>
    </section>
  )
}

export default About