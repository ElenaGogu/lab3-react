import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerInfo">
          <h3 className="footerNume">Mobila Elegantă</h3>
          <p className="footerSlogan">Transformăm casele în cămin</p>
        </div>
        
        <div className="footerContact">
            <p>
              <i className="fa-solid fa-phone footerIcon"></i>
              <a href="tel:0712345678">0712 345 678</a>
            </p>
            <p>
                  <i className="fa-regular fa-envelope footerIcon"></i>
              <a href="mailto:contact@mobila.md">contact@mobila.md</a>
            </p>
        </div>
        
        <div className="footerCopyright">
          <p>© {new Date().getFullYear()} Mobila Elegantă. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
export {Footer}