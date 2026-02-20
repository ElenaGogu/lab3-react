import './ProduseCardPage.css'
import { Link } from 'react-router-dom';

function ProduseCardPage({imagProdCard, textProdCard, descriereProdCard, buttonProdCard, inversat, linkDestinatie}){
    return (
    <>
        <div className={`containerProdCard ${inversat ? 'rind-invers' : ''}`}>
             <div className="produse-card-stinga">
            <img src={imagProdCard} alt="produse" className="produse-card-img"/>
             </div>

             <div className="produse-card-dreapta">
                <h1 className="text-card-denumire">{textProdCard}</h1>
                <p className="text-card-descriere">{descriereProdCard}</p>
                
                <Link to={linkDestinatie} className="afiseaza-card-btn">
                    {buttonProdCard}
                </Link>
             </div>
        </div>
    </>
    )
}
export default ProduseCardPage