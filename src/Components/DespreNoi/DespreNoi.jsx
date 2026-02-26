import './DespreNoi.css';
import video from "@assets/Video.png";

function DespreNoi(){
        return(
        <div className="despreSectiune">
            <h2 className="despreTitlu">Despre noi</h2>
            <div className="despreContainer">
                    <div className="despreStinga">
                        <p className="textDespre">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    <button className="buttonDespre">Vezi detalii</button>
                </div>
                <div className="video">
                    <img src={video} alt="canapea moderna" className="despreImag"/>
                    <div className="playicon">
                        
                    </div>
                </div>
                </div>

            </div>
        )
}
export {DespreNoi}
