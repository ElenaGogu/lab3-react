import './DespreNoi.css';
import video from "../../assets/Video.png";

function DespreNoi(){
        return(
        <div className="despre-sectiune">
            <h2 className="despre-titlu">Despre noi</h2>
            <div className="despre-container">
                    <div className="despre-stinga">
                        <p className="text-despre">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    <button className="button-despre">Vezi detalii</button>
                </div>
                <div className="video">
                    <img src={video} alt="canapea moderna" className="despre-imag"/>
                    <div className="play-icon">
                        
                    </div>
                </div>
                </div>

            </div>
        )
}
export default DespreNoi;
