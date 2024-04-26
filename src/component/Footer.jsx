export default function Footer(){
    return(
        <div className="footer container">
            <div className="footer-container">
                <div className="footer-text">
                    <h2 className="heading2">Have something in mind?</h2>
                    <h2 className="heading2 with-pic"><img src="src/assets/hero-img.png" className="footer-img"/>let's build it together.</h2>
                </div>

                <button className="footer-btn para-md">Get in touch</button>
            </div>
            <div className="footer-container">
                <p className="para-md">Build with 💖 by Brightscout & Ayush</p>
                <ul className="footer-links para-md">
                    <li><a href="#" >LinkedIn</a></li>
                    <li><a href="#" >Twitter</a></li>
                    <li><a href="#" >Instagram</a></li>
                    <li><a href="#" >Webflow</a></li>
                </ul>
            </div>
        </div>
    )
}