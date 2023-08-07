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
                 {isGerman?       
                   <div className="about-text-content">
                     
                  </div>            
                : 
                
                  <div  className="about-text-content">
                     <p>Hey there! I'm Qin, a sales-turned web developer,  who is passionate about creating modern apps with  up-to-date techniques  and a strong UI/UX focus. </p>    
                      <p>I was born and grew up in China and moved to Germany in 2012. I graduated from <a className="uni" target="_blank" href="https://english.ecnu.edu.cn/About/Introduction_to_ECNU.htm">East China Normal University</a> in Shanghai  with a BA in Business Administration.  Prior to web development, I've been working in international trade and retailing realm,  where I gained   profound experiences  in sales, notably E-Commerce.</p>       
                      <p>My transition to web and software development started when I realized I was more interested in creating things than selling them. I genuinely get excited about new ways of E-presentation and technologies and am eager to be a part of the creation process. I've always been an analytical problem solver as well, and the software developing process is a great fit for my personality and thinking style.</p> 
                      <p>Furthermore, 3 years of pandemic has confirmed my belief  that good product presentation through interactive  apps is extremely important for customer base growth and market expansion. Combining my extensive experience in sales with my web development skills, I am well positioned to help companies and individuals to achieve their business goals.</p>
                      <p>During my spare time, I enjoy travelling, watching movies, and reading about psychology and philosophy.</p>
                  </div>         
                }
             </div>
         </div>
         <div className="about-btns">
           <Link className="about-link" to="/works"><button className="about-btn">{isGerman? "MEINE PROJEKTE" : "MY PROJECT"}</button></Link>
           <Link className="about-link" to="/contact"><button className="about-btn">{isGerman? "KONTATIEREN MICH" : "CONTACT ME"}</button></Link>
         </div>
     </div>
    );
}
