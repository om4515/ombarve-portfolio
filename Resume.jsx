import React from 'react';
import { FaFileDownload } from 'react-icons/fa';


function Resume() {
  return (
    <section className="resume-section">
      <h2 className="resume-title">📄 Resume</h2>
      <div className="resume-content">
        {/* Left Column - Experience */}
        <div className="resume-column">
          <h3 className="resume-heading">Professional Experience</h3>

          

         

          <div className="resume-item">
            <div className="resume-dot" />
            <div>
              <h4>Web Developer Intern</h4>
              <p className="company">BIG HOST INDIA PRIVATE LTD </p>
              <p className="date">May 2024 - Dec 2024</p>
            </div>
          </div>
        </div>

        {/* Right Column - Education */}
        <div className="resume-column">
          <h3 className="resume-heading">Education</h3>

          <div className="resume-item">
            <div className="resume-dot" />
            <div>
              <h4>Bachelor of Enginnering in Computer</h4>
              <p className="company">Savitribai Phule University</p>
              <p className="date">2024 - 2027</p>
              <p className="description">
                Focused on web development, software engineering, and user experience design.
              </p>
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-dot" />
            <div>
              <h4>Frontend Web Development Certification</h4>
              <p className="company">Web Development Institute</p>
              <p className="date">2025</p>
              <p className="description">
                Specialized training in advanced JavaScript frameworks and responsive design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="download-section">
        <h3>Download</h3>
        <a href="/om.png" download="" className="download-btn">
          <FaFileDownload className="icon" /> Download CV
        </a>
      </div>
    </section>
  );
}

export default Resume;
