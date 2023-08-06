import { Link } from "react-router-dom"
import { useLangContext } from "../components/Layout";
import profile2 from "../../src/assets/profile2.png";

export default function About() {
    const {isGerman} = useLangContext();
    return (
        <div className="about-container">
            
            <div className="about-main">
              <img src={profile2} alt="profile2" id="profile2"  />
              <div className="about-text">
                 <h1>{isGerman? "ÜBER MICH" : "ABOUT ME"}</h1>
                 <p>{isGerman? 
                 "Hi, I'm Qin! A China-born who's living by the beautiful Baltic sea in Germany. I graduated from ECNU Shanghai, China with a bachelor degree in business administration, after that I've been working in the sales department in one of the biggest non-food retailers in Germany. I love travel and movies, yet have a great passion for Webdesign & Development. Travelling around, while working as a front-end developer, is the best life I can imagine, and i'm working on it."
                
                : "dsadas"         
                }</p>
             </div>
         </div>
         <div className="about-btns">
           <Link className="about-link" to="/works"><button className="about-btn">{isGerman? "MEINE PROJEKTE" : "MY PROJECT"}</button></Link>
           <Link className="about-link" to="/contact"><button className="about-btn">{isGerman? "KONTATIEREN MICH" : "CONTACT ME"}</button></Link>
         </div>
     </div>
    );
}