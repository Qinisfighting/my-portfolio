import profile from "../../src/assets/profile.png";
import coding from "../../src/assets/coding.png";
import design from "../../src/assets/design.jpg";

export default function Home(): JSX.Element {
    return (
        <div className="home-container">
           <img src={profile} id="profile" alt="profile"/>
            <div className="home--text"> 
               
                <h1>codieren,</h1>
                <h1>designen, </h1>
                <h1>& Apps entwickeln. </h1>
            </div>
            <div className="home--img">
                <img src={coding} id="home-img1" alt="coding"/>
                <img src={design} id="home-img2" alt="design"/>
            </div>
        </div>
    );
}