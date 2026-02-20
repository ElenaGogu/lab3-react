import './PromotiiCard.css';
function PromotiiCard({imagineProm, textProm, pretProm, reducere}){
    return (
        <div className="cardPromotii">
        <div>
            <img src={imagineProm} alt="canapeaPromotie" className="PromotiiCanapea" />
            {reducere && (
                <span className="procentReducere">{reducere}</span>
            )}
        </div>
        <div className="iconsProm">
            <i className="fa-solid fa-cart-shopping icon"></i>
            <i className="fa-regular fa-heart icon"></i>
        </div>
        <h4 className="textProm">{textProm}</h4>
        <div className="pretContainer">
            <span className="pretText">{pretProm}</span>
        </div>
    </div>
    ) 
}
export default PromotiiCard;