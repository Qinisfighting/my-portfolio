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
                Moin! Ich bin Qin, eine leidenschaftliche Softwareentwicklerin,
                die funktionale und ansprechende Apps mit den neuesten
                Technologien und einem starken Fokus auf UI/UX gestaltet.
              </p>

              <p>
                Ich wurde in China geboren und habe meinen Bachelor in
                Betriebswirtschaftslehre an der<span> </span>
                <a
                  className="uni"
                  target="_blank"
                  href="https://english.ecnu.edu.cn/About/Introduction_to_ECNU.htm"
                >
                  Pädagogische Universität Ostchina
                </a>
                <span> </span>in Shanghai meinen Bachelor in BWL abgeschlossen.
                Seit 2012 lebe ich in Deutschland. Bevor ich in die
                Softwareentwicklung wechselte, war ich als Marketing-Managerin
                im internationalen Groß- und Einzelhandel tätig und habe dabei
                umfangreiche Erfahrungen im Vertrieb gesammelt, insbesondere im
                E-Commerce.
              </p>
              <p>
                Mein Weg zur Softwareentwicklung begann, als mir klar wurde,
                dass ich nicht nur Freude am Verkauf von Produkten habe, sondern
                vor allem daran, Dinge selbst zu erschaffen. Die Möglichkeiten
                moderner E-Präsentationen und technischer Innovationen
                begeistern mich, und ich bin voller Tatendrang, Teil des
                kreativen Entwicklungsprozesses zu sein. Als analytische
                Problemlöserin war für mich schnell klar, dass die
                Softwareentwicklung perfekt zu meiner Persönlichkeit und
                Denkweise passt.
              </p>
              <p>
                Darüber hinaus haben drei Jahre Pandemie meine Überzeugung
                gestärkt, wie essenziell eine effektive E-Produktpräsentation
                ist, um mit interaktiven und funktionalen Apps Umsatz und
                Marktanteile zu steigern. Mit meiner umfassenden
                Vertriebserfahrung und meinen fundierten Kenntnissen in der Web-
                und Desktop-Entwicklung bin ich bestens darauf vorbereitet,
                durch stilvolle und funktionale Apps echten Mehrwert zu schaffen
                und die Ziele meiner Kunden zu erreichen.
              </p>
              <p>
                In meiner Freizeit reise ich gerne, schaue Filme und lese gerne
                zu den Themen Psychologie und Philosophie.
              </p>
            </div>
          ) : (
            <div className="about-text-content">
              <p>
                Hi there! I'm Qin, a software developer passionate about
                building modern applications using cutting-edge techniques, with
                a strong emphasis on UI/UX.
              </p>
              <p>
                I was born and raised in China and moved to Germany in 2012. I
                hold a BA in Business Administration from<span> </span>
                <a
                  className="uni"
                  target="_blank"
                  href="https://english.ecnu.edu.cn/About/Introduction_to_ECNU.htm"
                >
                  East China Normal University
                </a>
                <span> </span>in Shanghai. Before transitioning to software
                development, I worked in the fields of international trade and
                retail, where I gained extensive experience in sales,
                particularly in e-commerce.
              </p>
              <p>
                My transition to software development began when I discovered my
                passion for creating rather than just selling. I find genuine
                excitement in exploring new approaches to e-presentation and
                emerging technologies, and I am eager to contribute to the
                creative process. As an analytical problem-solver, I’ve realized
                that the software development process aligns perfectly with my
                personality and thought process.
              </p>
              <p>
                Furthermore, three years of the pandemic have reinforced my
                belief in the critical importance of effective product
                presentation through interactive and functional apps for driving
                customer growth and market expansion. By combining my extensive
                sales experience with my strong web and desktop development
                skills, I am well-equipped to help businesses and individuals
                achieve their goals.
              </p>
              <p>
                In my spare time, I enjoy traveling, watching movies, and
                exploring topics in psychology and philosophy.
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
              <span className="tag-span">C#</span>
              <span className="tag-span">.NET</span>
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
