import './AfiseazaProduse.css'
import canapea1 from "@assets/canapeaDescriere.png";
import canapea2 from "@assets/canapea2.png";
import canapea3 from "@assets/canapea3.png";
import canapea4 from "@assets/canapea4.png";
import canapea5 from "@assets/canapea5.png";
import canapea6 from "@assets/canapea6.png";
import {AfiseazaProduseCard} from '../AfiseazaProduseCard';

function AfiseazaProduse(){
    return (
        <div className="afiseazaSectiune">
            <AfiseazaProduseCard 
                imagine={canapea1}
                denumire="Canapea Sorenta" 
                pret="60.000 MDL"
                buttonText="Vezi Produsul"
            />

           <AfiseazaProduseCard 
                imagine={canapea2}
                denumire="Canapea Ottoman" 
                pret="60.000 MDL"
                buttonText="Vezi Produsul"
            />

            <AfiseazaProduseCard 
                imagine={canapea3}
                denumire="Canapea Maya" 
                pret="60.000 MDL"
                buttonText="Vezi Produsul"
            />

            <AfiseazaProduseCard
                imagine={canapea4}
                denumire="Canapea Nevada" 
                pret="60.000 MDL"
                buttonText="Vezi Produsul"
            />

            <AfiseazaProduseCard 
                imagine={canapea5}
                denumire="Canapea Minimalista" 
                pret="60.000 MDL"
                buttonText="Vezi Produsul" 
                 
            />

            <AfiseazaProduseCard 
                imagine={canapea6}
                denumire="Canapea Natur" 
                pret="60.000 MDL"
                buttonText="Vezi Produsul" 
                 
            />
        </div>
    )
}
export {AfiseazaProduse}
