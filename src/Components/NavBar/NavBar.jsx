import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navBar">
      
      <h1>ConstructMob</h1>
      
      <div className="butoane">
        <Link className="acasa" to="/">Acasa</Link>
        <Link className="produse" to="/produse">Produse</Link>
        <Link className="promotii" to="/promotii">Promotii</Link>
        <Link className="despreNoi" to="/despreNoi">Despre noi</Link>
        <Link className="contacte" to="/contacte">Contacte</Link>
      </div>

      <div className="icons">
        <i className="fa-regular fa-user icon"></i>
        <i className="fa-solid fa-cart-shopping icon"></i>
        <i className="fa-regular fa-heart icon"></i>
      </div>
    </nav>
  );
}

export {NavBar};