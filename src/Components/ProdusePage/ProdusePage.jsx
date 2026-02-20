import './ProdusePage.css'
import ProduseCardPage from "../ProduseCardPage/ProduseCardPage";
import canapeaGalbena from "../../assets/canapeaGalb.png";
import masaLemn from "../../assets/masaProduse.png";
import birouLucru from "../../assets/masaBirou.png";
import fotoliuAccent from "../../assets/scaun2Produse.png";
import patPerfect from "../../assets/patPerfect.png";

function ProdusePage(){
    return (
        <div>
            <ProduseCardPage 
                imagProdCard={canapeaGalbena} 
                textProdCard="Stil si Confort" 
                descriereProdCard="Piesa centrală a livingului tău." 
                buttonProdCard="Afiseaza Produsele"
                linkDestinatie="/afiseazaProduse/canapele"
            />

           <ProduseCardPage 
                imagProdCard={masaLemn} 
                textProdCard="Blat Rezistent" 
                descriereProdCard="Lemn masiv sau ceramică. Durabilitate garantată." 
                buttonProdCard="Afiseaza Produsele" 
                inversat={true}
                
            />

            <ProduseCardPage 
                imagProdCard={birouLucru} 
                textProdCard="Spatiu Eficient" 
                descriereProdCard="Birouri reglabile și stocare inteligentă." 
                buttonProdCard="Afiseaza Produsele" 
            />

            <ProduseCardPage 
                imagProdCard={fotoliuAccent} 
                textProdCard="Piese de Accent" 
                descriereProdCard="Scaune moderne pentru dining și birou." 
                buttonProdCard="Afiseaza Produsele" 
                inversat={true} 
            />

            <ProduseCardPage 
                imagProdCard={patPerfect} 
                textProdCard="Patul Perfect" 
                descriereProdCard="Confort care redefineste odihna." 
                buttonProdCard="Afiseaza Produsele" 
                 
            />
        </div>
    )
}
export default ProdusePage