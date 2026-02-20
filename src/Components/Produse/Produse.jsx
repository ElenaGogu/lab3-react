import './Produse.css';
import ProdusCard from '../ProdusCard/ProdusCard';
import canapeaImg from '../../assets/canapea.png';
import dormitorImg from '../../assets/dormitor.png';
import masaImg from '../../assets/masa.png';

function Produse(){
    return(
        <div className="sectiuneProduse">
            <h2 className="titlu">Produse</h2>

            <div className="listaProduse">
                <ProdusCard
                    imagine={canapeaImg}
                    titlu="CANAPEA"
                    altText="Canapea confortabila"
                    button="Cumpara"
                    backgroundColor='#CFEBFA'
                />

                  <ProdusCard
                    imagine={dormitorImg}
                    titlu="DORMITOR"
                    altText="Dormitor modern"
                    button="Cumpara"
                    backgroundColor='#CDD9C7'
                />

                  <ProdusCard
                    imagine={masaImg}
                    titlu="MASA"
                    altText="Masa din lemn"
                    button="Cumpara"
                    backgroundColor='#FBF2E5'
                />


            </div>
            <button className="veziCategorii">Vezi Categorii</button>
        </div>
    )
}
export default Produse;
