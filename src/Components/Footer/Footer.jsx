import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3 className="footer-nume">Mobila Elegantă</h3>
          <p className="footer-slogan">Transformăm casele în cămin</p>
        </div>
        
        <div className="footer-contact">
            <p>
              <i className="fa-solid fa-phone footer-icon"></i>
              <a href="tel:0712345678">0712 345 678</a>
            </p>
            <p>
                  <i className="fa-regular fa-envelope footer-icon"></i>
              <a href="mailto:contact@mobila.md">contact@mobila.md</a>
            </p>
        </div>
        
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Mobila Elegantă. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;