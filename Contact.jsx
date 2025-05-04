import React from 'react';

const ContactSection = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">
        📧 <strong>Contact Me</strong>
      </h2>

      <div className="row">
        {/* Left: Contact Form */}
        <div className="col-md-7">
          <p>
            I'm currently open for freelance projects and full-time positions.
            Feel free to reach out if you'd like to work together!
          </p>

          <form>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your name" />
              </div>
              <div className="col">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="your.email@example.com" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" placeholder="Subject of your message" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="Your message..." />
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="col-md-5 ps-md-5 mt-5 mt-md-0">
          <h5>Get In Touch</h5>
          <p>
            Whether you have a question, project inquiry, or just want to say hello,
            I'll get back to you as soon as possible.
          </p>

          <h6>Email</h6>
          <p>
            📧 <a href="mailto:ombarve04@gmail.com">ombarve04@gmail.com</a>
          </p>

          <h6>Connect</h6>
          <div className="d-flex gap-3 mt-2">
            <a href="#" className="btn btn-outline-secondary rounded-circle">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/om-barve-b96b4827b/" className="btn btn-outline-secondary rounded-circle">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
