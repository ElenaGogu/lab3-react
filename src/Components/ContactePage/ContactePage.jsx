import './ContactePage.css'
import imgShowroom from '@assets/showroom.png';

function ContactePage() {
    return (
        <>
        <div className="contacteContainer">
           
            <div className="paginaContacte">
                <img src={imgShowroom} alt="Showroom" className="imgContacte" />
                <h1 className="titluContacte">SHOWROOM</h1>
            </div>

            <div className="formularContacte">
                <h3>Contactati-ne</h3>
                <form className="contactFormContacte">
                    <input type="text" placeholder="Adresă de email sau număr de telefon" className="inputContacte" />
                    <div className="inputRindContacte">
                        <input type="text" placeholder="Prenumele" />
                        <input type="text" placeholder="Numele" />
                    </div>
                    <textarea placeholder="Mesajul dumneavoastra"></textarea>
                    <button type="submit" className="btnTrimiteContacte">Trimite mesaj</button>
                </form>
            </div>

            <div className="informContacte">
                <div className="informBox">
                    <h4>Adresa</h4>
                    <p>SHOWROOM: Strada Valea Cascadelor 23, București.</p>
                    <p>Punct de Lucru/Sediu Administrativ (Ilfov)</p>
                    <p>Splaiul Unirii 1C, Popești-Leordeni</p>
                    <p>Vânzări & Consultanță: <strong>0730 971 111</strong></p>
                    <p>Comenzi & Proiecte: <strong>0729 007 124</strong></p>
                    <p>Email: office@constructmob.ro</p>
                </div>
                <div className="informBox">
                    <h4>Program de lucru</h4>
                    <p>Luni - Vineri: 09:00 - 17:00</p>
                    <p>Sâmbătă: 09:00 - 13:00</p>
                </div>
            </div>
        </div>
        </>
    );
}

export {ContactePage}
        