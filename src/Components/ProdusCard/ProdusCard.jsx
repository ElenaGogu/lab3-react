import './ProdusCard.css'

function ProdusCard({imagine, titlu, altText, button, backgroundColor}){
    return(
        <div className="container" style={{backgroundColor}}>
            <div className="imagineContainer">
                <img src={imagine} alt={altText} className="canapea" />
            </div>
            <h4 className="text">{titlu}</h4>
            <button className="cumparaBtn">{button}</button>
        </div>
    )
}
export {ProdusCard}