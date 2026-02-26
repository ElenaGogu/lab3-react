import './ProduseCardPage.css'
import { Link } from 'react-router-dom';

function ProduseCardPage({imagProdCard, textProdCard, descriereProdCard, buttonProdCard, inversat, linkDestinatie}){
    return (
    <>
        <div className={`containerProdCard ${inversat ? 'rindInvers' : ''}`}>
             <div className="produseCardStinga">
            <img src={imagProdCard} alt="produse" className="produseCardImg"/>
             </div>

             <div className="produseCardDreapta">
                <h1 className="textCardDenumire">{textProdCard}</h1>
                <p className="textCardDescriere">{descriereProdCard}</p>
                
                <Link to={linkDestinatie} className="afiseazaCardBtn">
                    {buttonProdCard}
                </Link>
             </div>
        </div>
    </>
    )
}
export {ProduseCardPage}