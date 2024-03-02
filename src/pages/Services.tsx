
import { useLangContext } from "../components/Layout";
import {Link} from "react-router-dom";




export default function Services() {  
    const {isGerman} = useLangContext()
    return(
        <div className="about-container"> 
            <div className="service-top">
                <div className="service-top-wrapper">
                    <div className="service-text-1">
                        <h1>{isGerman ? "Was biete ich an ?" : "What do I offer ?"}</h1>
                        <ul>
                            <li>{isGerman ? "Offizielle Website des Unternehmens" : "Company Official Website"}</li>
                            <li>{isGerman ? "B2B Webshop" : "B2B Webshop"}</li>
                            <li>{isGerman ? "Persönliches Portfolio" : "Personal Portfolio"}</li>
                            <li>{isGerman ? "Landingpage" : "Landing Page"}</li>
                            <li>{isGerman ? "Individuelle Event-Apps (Adventskalender, Ratespiele, Geburtstags- und Jubiläums-App usw.)" : "Personal event apps (Advent calendar, quiz games, birthday and anniversary app, etc.)"}</li>
                            <li>{isGerman ? "Apps nach Individuellen Ideen und Anforderungen" : "Apps according to personal ideas and requirements"}</li>
                        </ul>
                    </div>
                    <img></img>
                </div>    
                <div className="service-top-wrapper">
                    <img></img>
                    <div className="service-text-2">
                        <h1>{isGerman ? "Wie arbeite ich ?" : "How do I work ?"}</h1>
                        <ul>
                            <li>{isGerman ? "✯ Screening: Über ein Projektscreening werden die Merkmale des Projektes erhoben und die Möglichkeiten zur Umsetzung ermittelt. Über dieses Screening wird auch ein Zeitplan festgelegt sowie eine Kostenschätzung vorgenommen.  " : "✯ Discovery: The idea and options to achieve your goals will be with a detailed project assessment scrutinized, considering all the features and deadlines, estimating the timing and cost of the work and creates a detailed plan for each stage of development."}</li>
                            <li>{isGerman ? "✯ Prototyp entwickeln: Es entsteht ein Prototyp – ein grober Entwurf der zukünftigen Webanwendung. Du erhälst die Basisversion des Projekts." : "✯ Prototyping: A prototype – A rough draft of the future web application will be created. You will get the basic version of the project."}</li>
                            <li>{isGerman ? "✯ Design: Das Farbschema wird ausgewählt und das Grundlayout festgelegt. Das Erscheinungsbild der Elemente wird unter Berücksichtigung aller Anforderungen und Besonderheiten deiner Wahrnehmung und der deiner Nutzer gestaltet." : "✯ Design: The color scheme  will be selected and the basic layout will be decided. The appearance of the elements will be formed, considering all the requirements and peculiarities of you and your users’ perception."}</li>
                            <li>{isGerman ? "✯ Entwicklung und Tests: Programmierung, Implementierung der notwendigen Funktionen und Testen der Anwendung. Sicherstellen, dass alle Elemente stabil funktionieren und ihre Hauptfunktionen erfüllen." : "✯ Development and testing: Programming, implementing the necessary functions,  and testing the application. Ensuring all elements work stably and fulfill their main functions."}</li>
                            <li>{isGerman ? "✯ Support: Betreuung der Anwendung, Verfeinerung vorhandener Funktionen oder Hinzufügen neuer Funktionen basierend auf deinen Zielen und dem Feedback der Benutzer." : "✯ Support: Maintaining the application, refining the existing features, or adding new ones based on your objectives and the feedback from the users."}</li>       
                        </ul>
                    </div>
                </div>     
             </div>  

             <div className="service-bottom">
                {isGerman ? <p>Preise und weitere Fragen ?</p> : <p>Pricing and more questions ?</p>}
                
                <Link className="about-link" to="/contact">
                    <button className="about-btn">
                        {isGerman ? "KONTAKTIERE MICH" : "CONTACT ME"}
                    </button>
                </Link>
             </div>
           
        </div>
    )

 }