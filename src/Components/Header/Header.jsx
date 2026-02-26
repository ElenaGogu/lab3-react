import {Link} from 'react-router-dom'
import './Header.css';
import scaunImg from '@assets/scaun.png';

function Header() {
    return (
        <div className="headerContainer">
            <div className="headerStinga">
                <p className="subtitlu">Eleganta si Stil</p>
                <h1 className="titluComp">Construct Mob</h1>
                <Link to="/promotii">
                <button className="promotiiBtn">Promotii</button>
                </Link>
                
                <div className="icons">
                    <i className="fab fa-facebook-f icon"></i>
                    <i className="fab fa-instagram icon"></i>
                </div>
            </div>

            <div className="headerDreapta">
                <div className="cercDecorativ"> 
                        <img src={scaunImg} alt="scaun legant" className="scaun" />
           </div>
            </div>
        </div>
    );
}
export {Header}