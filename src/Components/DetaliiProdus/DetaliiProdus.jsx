import './DetaliiProdus.css';
import imaginePrincipala from '@assets/canapeaDescriere.png';
import img1 from '@assets/canapeaDescriere2.png';
import img2 from '@assets/canapeaDescriere3.png';
import img3 from '@assets/canapeaDescriere4.png';

function DetaliiProdus() {
    return (
        <div className="paginaProdus">
            <div className="containerDetaliiPr">
                <div className="parteaStingaDetalii">
                    <div className="imaginePrincipala">
                        <img src={imaginePrincipala} alt="Canapea Sorenta" className="imagineDetaliiMare"/>
                        <button className="sageataNav sageataStinga"><i className="fa-solid fa-chevron-left"></i></button>
                        <button className="sageataNav sageataDreapta"><i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                    <div className="containerImaginiMici">
                        <img src={img1} alt="detaliu 1" className="imgMica"/>
                        <img src={img2}  alt="detaliu 2" className="imgMica"/>
                        <img src={img3} alt="detaliu 3" className="imgMica"/>
                    </div>
                </div>

                <div className="parteaDreaptaDetalii">
                    <h2 className="denumireDetalii">Canapea Sorenta</h2>
            
            <div className="ratingDetalii">
                <div className="steleGrup">
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star-half-stroke gold"></i>
                </div>
                <span className="numarRecenzii">42 Recenzii</span>
                
                <button className="inimaBtn">
                    <i className="fa-regular fa-heart"></i>
                </button>
            </div>

                    <h3 className="descriereDetalii">Descriere</h3>
                    <p className="textDescriere">
                        Piesa centrală a livingului dumneavoastră. Design modern, linii elegante și finisaje de durată.
                    </p>
                    <ul className="listaDetalii">
                        <li>Structură: lemn masiv (fag/molid/stejar - în funcție de model)</li>
                        <li>Perne din spumă de înaltă densitate,</li>
                        <li>Picioare lemn sau inox</li>
                        <li>Garanție 5 ani</li>
                    </ul>

                    <p className="dimensiuniTextDetalii">Dimensiuni (cm)</p>
                    <p className="valoareDimensiuni">220 x 95 x 85 cm.</p>

                    <div className="optiuniComanda">
                        <div className="selectorCulori">
                            <p>Culoare:</p>
                            <div className="cercuriCulori">
                                <span className="cercGri"></span>
                                <span className="cercVerdeOliv"></span>
                                <span className="cercMenta"></span>
                                <span className="cercBej"></span>
                            </div>
                        </div>
                        <div className="selectorCantitate">
                            <p>Cantitate:</p>
                            <select className="selectCantitate">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                    <div className="pretCumpara">
                        <span className="pretDetalii">Pret 30.000 Lei</span>
                        <button className="butonCumpara">Cumpara</button>
                    </div>

                    <div className="infoSuplimentare">
                        <p className="textRosu">Plată în Rate - 0% Dobândă</p>
                        <p className="informSuplimentare">Livrăm și montăm gratuit în întreaga țară.</p>
                    </div>
                </div>
            </div>
            <div className="socialLinks">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
            </div>

            <div className="sectiuneRecenzii">
                <h3>Recenzii</h3>
                <div className="cardRecenzie">
                    <div className="avatarRecenzie">E G</div>
                    <div className="continutRecenzie">
                        <div className="headerRecenzie">
                            <strong>Elena Gogu</strong>
                            <span>23 Septembrie 2025</span>
                        </div>
                        <p>Am ales Sorenta pentru că știam că vreau o canapea care să reziste în timp. Structura din lemn masiv se simte solidă, iar garanția de 5 ani mi-a oferit încredere. Livrarea a fost rapidă și echipa de montaj foarte profesionistă. Este o investiție pe termen lung, iar plata în rate fără dobândă a fost un mare plus. Mulțumesc Construct Mob!</p>
                    </div>
                    <button className="sageataRecenzie">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export {DetaliiProdus}
