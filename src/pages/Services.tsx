import { useLangContext } from "../components/Layout";
import { Link } from "react-router-dom";

export default function Services() {
  const { isGerman } = useLangContext();
  return (
    <div className="about-container">
      <div className="service-top">
        <div className="service-top-wrapper">
          <div className="service-text-1">
            <h1>{isGerman ? "Was biete ich an ?" : "What do I offer ?"}</h1>
            <ul>
              <li>
                {isGerman
                  ? "App/Website des Unternehmens"
                  : "Company website/app"}
              </li>
              <li>{isGerman ? "B2B Shop" : "B2B shop"}</li>
              <li>
                {isGerman ? "Persönliches Portfolio" : "Personal portfolio"}
              </li>
              <li>
                {isGerman
                  ? "Event- App (Adventskalender, Ratespiele, Geburtstags und Jubiläums- App usw.)"
                  : "Event app (Advent calendar, quiz games, birthday and anniversary app, etc.)"}
              </li>
              <li>
                {isGerman
                  ? "App nach Individuellen Ideen und Anforderungen"
                  : "App according to personal ideas and requirements"}
              </li>
            </ul>
          </div>
          <img></img>
        </div>
        <div className="service-top-wrapper">
          <img></img>
          <div className="service-text-2">
            <h1>{isGerman ? "Wie arbeite ich ?" : "How do I work ?"}</h1>
            <ul>
              <li>
                {isGerman
                  ? "✯ Screening: Über ein Projektscreening werden die Merkmale des Projektes erhoben und die Möglichkeiten zur Umsetzung ermittelt. Über dieses Screening wird auch ein Zeitplan festgelegt sowie eine Kostenschätzung vorgenommen.  "
                  : "✯ Discovery: The idea and options to achieve your goals will be with a detailed project assessment scrutinized, considering all the features and deadlines, estimating the timing and cost of the work and creates a detailed plan for each stage of development."}
              </li>
              <li>
                {isGerman
                  ? "✯ Prototyp entwickeln: Es entsteht ein Prototyp – ein grober Entwurf der zukünftigen Anwendung. Du erhälst die Basisversion des Projekts."
                  : "✯ Prototyping: A prototype – A rough draft of the future Application will be created. You will get the basic version of the project."}
              </li>
              <li>
                {isGerman
                  ? "✯ Design: Das Farbschema wird ausgewählt und das Grundlayout festgelegt. Das Erscheinungsbild der Elemente wird unter Berücksichtigung aller Anforderungen und Besonderheiten deiner Wahrnehmung und der deiner Nutzer gestaltet."
                  : "✯ Design: The color scheme  will be selected and the basic layout will be decided. The appearance of the elements will be formed, considering all the requirements and peculiarities of you and your users’ perception."}
              </li>
              <li>
                {isGerman
                  ? "✯ Entwicklung und Tests: Programmierung, Implementierung der notwendigen Funktionen und Testen der Anwendung. Sicherstellen, dass alle Elemente stabil funktionieren und ihre Hauptfunktionen erfüllen."
                  : "✯ Development and testing: Programming, implementing the necessary functions,  and testing the application. Ensuring all elements work stably and fulfill their main functions."}
              </li>
              <li>
                {isGerman
                  ? "✯ Support: Betreuung der Anwendung, Verfeinerung vorhandener Funktionen oder Hinzufügen neuer Funktionen basierend auf deinen Zielen und dem Feedback der Benutzer."
                  : "✯ Support: Maintaining the application, refining the existing features, or adding new ones based on your objectives and the feedback from the users."}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="service-bottom">
        {isGerman ? (
          <p>Preise und weitere Fragen ?</p>
        ) : (
          <p>Pricing and more questions ?</p>
        )}

        <Link className="about-link" to="/contact">
          <button className="about-btn">
            {isGerman ? "KONTAKTIERE MICH" : "CONTACT ME"}
          </button>
        </Link>
      </div>
    </div>
  );
}
