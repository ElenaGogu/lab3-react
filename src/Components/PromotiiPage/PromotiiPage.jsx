import PromotiiCard from "../PromotiiCard/PromotiiCard";
import canapeaProm from "../../assets/canapeaPromotii.png";
import masaProm from "../../assets/masaPromotii.png";
import scaunProm from "../../assets/scaunPromotii.png";
import fotoliuProm from "../../assets/fotoliuPromotii.png";
import dormitorProm from "../../assets/dormitorPromotii.png";
import canapea2Prom from "../../assets/canapea2Promotii.png";
import masa2Prom from "../../assets/masa2Promotii.png";
import scaun2Prom from "../../assets/scaun2Promotii.png";
import fotoliu2Prom from "../../assets/fotoliu2Promotii.png";
import dormitor2Prom from "../../assets/dormitor2Promotii.png";
import '../Promotii/Promotii.css'

function PromotiiPage(){
    return(
        <div className="sectiuneProduseProm">
            <h2 className="titluProm">Promotii</h2>
            <div className="slider-container">
            <div className="listaProduseProm">
                <PromotiiCard
                    imagineProm={canapeaProm}
                    textProm="Canapea MARTIN"
                    pretProm="39.000 MDL"
                    reducere="22 %"
                />

                <PromotiiCard
                imagineProm={masaProm}
                textProm="Masa SFERA"
                pretProm="12.000 MDL"
                reducere="10 %"
                />

                <PromotiiCard
                imagineProm={scaunProm}
                textProm="Scaun MASIV"
                pretProm="2.500 MDL"
                reducere="12 %"
                />

                <PromotiiCard
                imagineProm={fotoliuProm}
                textProm="Scaun MOLECULA"
                pretProm="3.000 MDL"
                reducere="10 %"
                />

                <PromotiiCard
                imagineProm={dormitorProm}
                textProm="Dormitor AVRORA"
                pretProm="31.000 MDL"
                reducere="20 %"
                />
            </div>
            <div className="listaProduseProm">
                <PromotiiCard
                    imagineProm={canapea2Prom}
                    textProm="Canapea ELLA"
                    pretProm="37.000 MDL"
                    reducere="20 %"
                />

                <PromotiiCard
                imagineProm={masa2Prom}
                textProm="Masa ROTUNDA"
                pretProm="10.000 MDL"
                reducere="10 %"
                />

                <PromotiiCard
                imagineProm={scaun2Prom}
                textProm="Scaun COLOR"
                pretProm="3.500 MDL"
                reducere="12 %"
                />

                <PromotiiCard
                imagineProm={fotoliu2Prom}
                textProm="Scaun MOLECULA"
                pretProm="3.000 MDL"
                reducere="10 %"
                />

                <PromotiiCard
                imagineProm={dormitor2Prom}
                textProm="Dormitor ANNA"
                pretProm="31.000 MDL"
                reducere="20 %"
                />
            </div>
        </div>
        </div>
    )
}
export default PromotiiPage;