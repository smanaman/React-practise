import './img.css'

function Img() {
    
    return(
        <>
    <div className="imgsection">
        <div className="photos">
            <div className="logoimg">
                <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Urus/10635/1724844423793/front-left-side-47.jpg?impolicy=resize&imwidth=480" alt=""/>
            </div>
            <div className="heading">Lamborghini</div>
        </div>
        <div className="photos">
             <div className="logoimg">
                <img src="https://images.pexels.com/photos/10854772/pexels-photo-10854772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
             </div>
             <div className="heading">Dodge Challenger </div>
        </div>
        <div className="photos">
        <div className="logoimg"> 
            <img src="https://images.autotrader.com/scaler/408/306/hn/c/c2b0718a2a2e4600a89443da3b08be2f.jpg" alt="" />
              </div>
        <div className="heading"> Mercedes-Benz G 63</div>   
        </div>

    </div>
        </>
    )
}
export default Img