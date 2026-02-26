import {PromotiiCard} from "../PromotiiCard";
import canapeaProm from "@assets/canapeaPromotii.png";
import masaProm from "@assets/masaPromotii.png";
import scaunProm from "@assets/scaunPromotii.png";
import fotoliuProm from "@assets/fotoliuPromotii.png";
import dormitorProm from "@assets/dormitorPromotii.png";
import './Promotii.css';

function Promotii(){
    return(
        <div className="sectiuneProduseProm">
            <h2 className="titluProm">Promotii</h2>
            <div className="sliderContainer">
            <i className="fa-solid fa-chevron-left sageataStanga"></i>

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
            <i className="fa-solid fa-chevron-right sageataDreapta"></i>
        </div>
        </div>
    )
}
export {Promotii}