import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            
            <div className="about-page-cta">
                 Lebenslauf come here
                
                <Link className="link-button" to="/works">See my work</Link>
            </div>
        </div>
    );
}