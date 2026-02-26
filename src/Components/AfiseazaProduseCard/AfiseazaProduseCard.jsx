import './AfiseazaProduseCard.css'
import {Link} from 'react-router-dom'

function AfiseazaProduseCard({imagine, denumire, pret, buttonText}){
    return(
        <>
        <div className="componentaProdus">
            <img src={imagine} alt="canapea extensibila" className="canapeaAfiseaza"/>
            <h5 className="textAfiseaza">{denumire}</h5>
            <div className="containerPretButton">
            <p className="pretAfiseaza">{pret}</p>
            <Link to="/detaliiProdus">
            <button className="buttonAfiseaza">{buttonText}</button>
            </Link>
            </div>
        </div>
        </>
    )
}
export {AfiseazaProduseCard}
