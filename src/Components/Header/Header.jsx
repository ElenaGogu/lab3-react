import {Link} from 'react-router-dom'
import './Header.css';
import scaunImg from '../../assets/scaun.png';

function Header() {
    return (
        <div className="header-container">
            <div className="header-stinga">
                <p className="subtitlu">Eleganta si Stil</p>
                <h1 className="titluComp">Construct Mob</h1>
                <Link to="/promotii">
                <button className="promotii-btn">Promotii</button>
                </Link>
                
                <div className="icons">
                    <i className="fab fa-facebook-f icon"></i>
                    <i className="fab fa-instagram icon"></i>
                </div>
            </div>

            <div className="header-dreapta">
                <div className="cerc-decorativ"> 
                        <img src={scaunImg} alt="scaun legant" className="scaun" />
           </div>
            </div>
        </div>
    );
}
export default Header;