const Footer = () => {
  return (
    <footer className="d-flex justify-content-between align-items-center p-3 bg-light text-dark dark-mode-bg-dark dark-mode-text-light">
      <small>© 2025 Om Barve. All rights reserved.</small>
      <div className="d-flex gap-3 fs-5">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="mailto:ombarve04@gmail.com" aria-label="Email">
          <i className="bi bi-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
