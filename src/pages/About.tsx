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
                Moin! Ich bin Qin, eine Softwareentwicklerin, die mit
                Begeisterung funktionale und ansprechende Apps entwickelt unter
                Einsatz neuester Technologien mit starkem UI/UX-Fokus.
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
                <span> </span>in Shanghai meinen Bachelor in BWL abgeschlossen.
                Seit 2012 lebe ich in Deutschland. Vor meiner Zeit als
                Entwicklerin war ich im internationalen Groß- und Einzelhandel
                als Marketing-Managerin tätig und habe fundierte Erfahrungen im
                Vertrieb erworben, insbesondere im E-Commerce.
              </p>
              <p>
                Mein Übergang zur Softwareentwicklung begann, als mir klar
                wurde, dass ich auch viel Spaß daran habe, Dinge zu erschaffen
                und nicht nur Dinge zu verkaufen. Ich bin begeistert von den
                neuesten Möglichkeiten der E-Präsentation und den technischen
                Gestaltungsmöglichkeiten in der Programmierung und möchte gerne
                Teil des Entstehungsprozesses sein. Ich war schon immer auch ein
                analytischer Problemlöser und der Softwareentwicklungsprozess
                passt hervorragend zu meiner Persönlichkeit und meinem Denkstil.
              </p>
              <p>
                Darüber hinaus haben drei Jahre Pandemie meine Überzeugung
                gefestigt, wie wichtig eine gute E-Produktpräsentation ist, um
                mit interaktiven und funktionalen Apps den Umsatz und die
                Marktanteile zu steigern. Durch die Kombination meiner
                umfassenden Vertriebserfahrung mit meinen soliden Kenntnissen in
                der Web- und Desktop-Full-Stack-Entwicklung bin ich bestens
                aufgestellt und freue mich darauf, mit stilvollen und
                funktionalen Apps einen echten Mehrwert zur Erreichung der
                Kundenziele zu schaffen.
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
                sales experience with my strong web and desktop full-stack
                development skills, I am well-equipped to help businesses and
                individuals achieve their goals.
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
