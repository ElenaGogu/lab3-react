import './DetaliiProdus.css';
import imaginePrincipala from '../../assets/canapeaDescriere.png';
import img1 from '../../assets/canapeaDescriere2.png';
import img2 from '../../assets/canapeaDescriere3.png';
import img3 from '../../assets/canapeaDescriere4.png';

function DetaliiProdus() {
    return (
        <div className="pagina-produs">
            <div className="container-detaliiPr">
                <div className="partea-stinga-detalii">
                    <div className="imagine-principala">
                        <img src={imaginePrincipala} alt="Canapea Sorenta" className="imagine-detalii-mare"/>
                        <button className="sageata-nav sageata-stinga"><i className="fa-solid fa-chevron-left"></i></button>
                        <button className="sageata-nav sageata-dreapta"><i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                    <div className="container-imaginiMici">
                        <img src={img1} alt="detaliu 1" className="img-mica"/>
                        <img src={img2}  alt="detaliu 2" className="img-mica"/>
                        <img src={img3} alt="detaliu 3" className="img-mica"/>
                    </div>
                </div>

                <div className="partea-dreapta-detalii">
                    <h2 className="denumire-detalii">Canapea Sorenta</h2>
            
            <div className="rating-detalii">
                <div className="stele-grup">
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star-half-stroke gold"></i>
                </div>
                <span className="numar-recenzii">42 Recenzii</span>
                
                <button className="inima-btn">
                    <i className="fa-regular fa-heart"></i>
                </button>
            </div>

                    <h3 className="descriere-detalii">Descriere</h3>
                    <p className="text-descriere">
                        Piesa centrală a livingului dumneavoastră. Design modern, linii elegante și finisaje de durată.
                    </p>
                    <ul className="lista-detalii">
                        <li>Structură: lemn masiv (fag/molid/stejar - în funcție de model)</li>
                        <li>Perne din spumă de înaltă densitate,</li>
                        <li>Picioare lemn sau inox</li>
                        <li>Garanție 5 ani</li>
                    </ul>

                    <p className="dimensiuni-text-detalii">Dimensiuni (cm)</p>
                    <p className="valoare-dimensiuni">220 x 95 x 85 cm.</p>

                    <div className="optiuni-comanda">
                        <div className="selector-culori">
                            <p>Culoare:</p>
                            <div className="cercuri-culori">
                                <span className="cerc gri"></span>
                                <span className="cerc verde-oliv"></span>
                                <span className="cerc menta"></span>
                                <span className="cerc bej"></span>
                            </div>
                        </div>
                        <div className="selector-cantitate">
                            <p>Cantitate:</p>
                            <select className="select-cantitate">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                    <div className="pret-cumpara">
                        <span className="pret-detalii">Pret 30.000 Lei</span>
                        <button className="buton-cumpara">Cumpara</button>
                    </div>

                    <div className="info-suplimentare">
                        <p className="text-rosu">Plată în Rate - 0% Dobândă</p>
                        <p className="inform-suplimentare">Livrăm și montăm gratuit în întreaga țară.</p>
                    </div>
                </div>
            </div>
            <div className="social-links">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
            </div>

            <div className="sectiune-recenzii">
                <h3>Recenzii</h3>
                <div className="card-recenzie">
                    <div className="avatar-recenzie">E G</div>
                    <div className="continut-recenzie">
                        <div className="header-recenzie">
                            <strong>Elena Gogu</strong>
                            <span>23 Septembrie 2025</span>
                        </div>
                        <p>Am ales Sorenta pentru că știam că vreau o canapea care să reziste în timp. Structura din lemn masiv se simte solidă, iar garanția de 5 ani mi-a oferit încredere. Livrarea a fost rapidă și echipa de montaj foarte profesionistă. Este o investiție pe termen lung, iar plata în rate fără dobândă a fost un mare plus. Mulțumesc Construct Mob!</p>
                    </div>
                    <button className="sageata-recenzie">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetaliiProdus;
