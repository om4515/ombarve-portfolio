import React from 'react'

function Hero() {
  return (
    <div className='hero '>
        <div className="hero-content">
         <section className="container text-center py-5 " >
      <h1 className="display-4 fw-bold">
        Hello, I'm <span className="text-primary">Om Barve</span>
      </h1>
      <h2 className="display-5 fw-bold mb-4">Frontend Developer</h2>
      <p style={{ color: '#999999 ' }} className="fs-5 mb-4">
        I build responsive, accessible, and performant web experiences with modern frontend technologies.
      </p>
      <div className="d-flex justify-content-center gap-3">
        <a href="#projects" className="btn btn-primary btn-lg px-4">
          View My Work
        </a>
        <a href="https://www.linkedin.com/in/om-barve-b96b4827b/" className="btn btn-outline-secondary btn-lg px-4">
          Get In Touch
        </a>
    
      </div>
    </section>
    </div>
    </div>
  )
}

export default Hero