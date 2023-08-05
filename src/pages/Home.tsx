import profile from "../../src/assets/profile.png";
import coding from "../../src/assets/coding.png";
import design from "../../src/assets/design.jpg";
import { useLangContext } from "../components/Layout";




 const Home= () => {


    const {isGerman} = useLangContext();
    return (
        <div className="home-container">
           <img src={profile} id="profile" alt="profile"/>
           {isGerman?
              <div className="home--text"> 
                  <h1>Ich <br/>codiere,</h1>
                  <h1>designe,</h1>
                  <h1>& entwickle Apps. </h1>
              </div>
              :
              <div className="home--text"> 
                  <h1>I code</h1>
                  <h1>I design, </h1>
                  <h1> &<br /> I develope apps. </h1>
              </div>
                }
           
            <div className="home--img">
                <img src={coding} id="home-img1" alt="coding"/>
                <img src={design} id="home-img2" alt="design"/>
            </div>
        </div>
    );
}

export default Home