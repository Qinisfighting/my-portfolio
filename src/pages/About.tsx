import { Link } from "react-router-dom";
import { useLangContext } from "../components/Layout";
import profile2 from "../../src/assets/profile2.png";

export default function About() {
  const { isGerman } = useLangContext();

  return (
    <div className="about-container">
      <div className="about-main">
        <img src={profile2} alt="profile2" id="profile2" />
        <div className="about-text">
          <h2>{isGerman ? "ÜBER MICH" : "ABOUT ME"}</h2>
          {isGerman ? (
            <div className="about-text-content">
              <p>
                Moin! Ich bin Qin, eine Softwareentwicklerin, die mit Begeisterung
                funktionale und ansprechende Apps entwickelt unter Einsatz
                neuester Technologien mit starkem UI/UX-Fokus.
              </p>

              <p>
                Ich bin in China geboren und habe an der<span> </span>
                <a
                  className="uni"
                  target="_blank"
                  href="https://english.ecnu.edu.cn/About/Introduction_to_ECNU.htm"
                >
                  Pädagogische Universität Ostchina
                </a>
                <span> </span>in Shanghai meinen Bachelor in BWL abgeschlossen. Seit 2012 lebe
                ich in Deutschland. Vor meiner Zeit als Entwicklerin war ich
                im internationalen Groß- und Einzelhandel als Marketing-Managerin
                tätig und habe fundierte Erfahrungen im Vertrieb erworben,
                insbesondere im E-Commerce.
              </p>
              <p>
                Mein Übergang zur Softwareentwicklung begann, als mir klar wurde, 
                dass ich auch viel Spaß daran habe, Dinge zu erschaffen und nicht nur Dinge zu verkaufen. 
                Ich bin begeistert von den neuesten Möglichkeiten der E-Präsentation und den technischen
                Gestaltungsmöglichkeiten in der Programmierung und möchte gerne
                Teil des Entstehungsprozesses sein. Ich war schon immer auch ein
                analytischer Problemlöser und der Softwareentwicklungsprozess
                passt hervorragend zu meiner Persönlichkeit und meinem Denkstil.
              </p>
              <p>
                Darüber hinaus haben drei Jahre Pandemie meine Überzeugung
                gefestigt, wie wichtig eine gute E-Produktpräsentation ist,
                um mit Hilfe von interaktiven und funktionalen Apps den Umsatz
                und die Marktanteile zu steigern. Durch die Kombination meiner
                umfassenden Vertriebserfahrung mit meinen soliden Full Stack-
                Entwicklungskenntnissen bin ich bestens aufgestellt und freue
                mich darauf, mit stilvollen und funktionalen Apps einen echten
                Mehrwert zur Erreichung von Kundenzielen zu schaffen.
              </p>
              <p>
                In meiner Freizeit reise ich gerne, schaue Filme und lese gerne
                zu den Themen Psychologie und Philosophie.
              </p>
            </div>
          ) : (
            <div className="about-text-content">
              <p>
                Hey there! I'm Qin, a software developer, who is
                passionate about creating modern apps with up-to-date techniques
                and a strong UI/UX focus.
              </p>
              <p>
                I was born and grew up in China and moved to Germany in 2012. I
                graduated from<span> </span>
                <a
                  className="uni"
                  target="_blank"
                  href="https://english.ecnu.edu.cn/About/Introduction_to_ECNU.htm"
                >
                   East China Normal University
                </a>
                <span> </span>in Shanghai with a BA in Business Administration. Prior to software development,
                I've been working in international trade and
                retailing realm, where I gained profound experiences in sales,
                notably E-Commerce.
              </p>
              <p>
                My transition to software development started when I
                realized I was very much interested in creating things, rather than only selling
                them. I genuinely get excited about new ways of E-presentation
                and technologies and am eager to be a part of the creation
                process. I've always been an analytical problem solver as well,
                and the software developing process is a great fit for my
                personality and thinking style.
              </p>
              <p>
                Furthermore, 3 years of pandemic has confirmed my belief that
                good product presentation through interactive apps is extremely
                important for customer base growth and market expansion.
                Combining my extensive experience in sales with my solid full-stack
                development skills, I am well positioned to help companies and
                individuals to achieve their goals.
              </p>
              <p>
                During my spare time, I enjoy travelling, watching movies, and
                reading about psychology and philosophy.
              </p>
            </div>
          )}
          <div className="skillset-container">
            <h2> {isGerman ? "HAUPTSKILLS" : "MAIN SKILLS"}</h2>
            <p className="tags">
                <span className="tag-span">JavaScript</span>
                <span className="tag-span">TypeScript</span>
                <span className="tag-span">React</span>
                <span className="tag-span">Next</span>
                <span className="tag-span">SQL</span>
                <span className="tag-span">Firebase</span>
                <span className="tag-span">Node</span>
                <span className="tag-span">Express</span>  
                <span className="tag-span">API/REST</span> 
                <span className="tag-span">HTML6</span> 
                <span className="tag-span">CSS(SCSS)</span>
                <span className="tag-span">Tailwind</span>
                <span className="tag-span">Figma</span>  
                <span className="tag-span">Git</span>
                <span className="tag-span">Azure</span>
            </p>
        </div>
        </div>
       
      </div>
   
      <div className="about-btns">
        <Link className="about-link" to="/projects">
          <button className="about-btn">
            {isGerman ? "PROJEKTE" : "PROJECTS"}
          </button>
        </Link>
        <Link className="about-link" to="/services">
          <button className="about-btn">
            {isGerman ? "LEISTUNGEN" : "SERVICES"}
          </button>
        </Link>
      </div>
    </div>
  );
}
