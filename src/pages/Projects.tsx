import { useLangContext } from "../components/Layout";
import { useState, useEffect } from "react";
import github from "../assets/github.png";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

export default function Projects(): JSX.Element {
  interface ProjectData {
    id: string;
    name: string;
    description_en: string;
    description_de: string;
    imageUrl: string;
    gitURL: string;
    appURL: string;
    extra: string;
  }

  interface ProjectsData extends Array<ProjectData> {}

  const { isGerman } = useLangContext();
  const [projectsData, setProjectsData] = useState<ProjectsData>([]);
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const [isDataReady, setIsDataReady] = useState<boolean>(false); //this state is only for satisfying TS type checking
  const projectsDataURL =
    "https://raw.githubusercontent.com/Qinisfighting/my-portfolio/main/src/projectsData.json";

  const indicators = (index: number = 0) => (
    <div className="indicator">{index + 1}</div>
  );
  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
    margin: "0 -10px 50px",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
          opacity="0.3"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
          opacity="0.3"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await fetch(projectsDataURL);
      const data = await response.json();
      setProjectsData(data);
      setIsDataReady(true);
      // console.log(data)
    }
    fetchData();
  }, []);

  const loader = (): JSX.Element => {
    return <div className={isDisplay ? "loader-zoom" : "loader"}></div>;
  };

  const projectElements = projectsData
    .sort((a, b) => Number(b.id) - Number(a.id))
    .map((project) => {
      const {
        id,
        name,
        description_en,
        description_de,
        imageUrl,
        gitURL,
        appURL,
      } = project;
      return (
        <div
          key={id}
          className={isDisplay ? "each-zoom-effect" : "project-tile"}
        >
          <div className="top">
            <a target="_blank" href={appURL}>
              <img
                className="project--img"
                src={imageUrl}
                alt="project-snapshot"
              />
            </a>
            <div className="project-tile-top">
              <a target="_blank" href={appURL}>
                <div className="img--hover-text">APP ONLINE</div>
              </a>
            </div>
          </div>
          <div className="project-tile-content">
            <div className="project-tile-content-text">
              <h3>{name}</h3>
              <h4>{isGerman ? description_de : description_en}</h4>
            </div>
            <div className="bottom">
              <a target="_blank" href={gitURL}>
                <img src={github} className="git--icon" />
              </a>
              <div className="project-tile-bottom">
                <a target="_blank" href={gitURL}>
                  <div className="icon--hover-text">SOURCE CODE</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div>
      <h1 className="project-header">
        {isGerman ? "PROJEKT BEISPIELE" : "PROJECT EXAMPLES"}
      </h1>
      {isDisplay ? (
        <div>
          <div className="projectsDisplay-container">
            {isDataReady ? (
              <Zoom {...properties} indicators={indicators} scale={1.5}>
                {projectElements}
              </Zoom>
            ) : (
              loader()
            )}
            <button
              className="all"
              onClick={() => setIsDisplay((prev) => !prev)}
            >
              {isGerman ? "ALLES ZEIGEN" : "DISPLAY ALL"}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="projectsAll-container">
            <button
              className="go-zoom"
              onClick={() => setIsDisplay((prev) => !prev)}
            >
              {isGerman ? "EINZELN ZEIGEN" : "DISPLAY ONE"}
            </button>
            {isDataReady ? projectElements : loader()}
          </div>
        </div>
      )}

      <Link className="about-link" to="/services">
        <button
          className="about-btn"
          style={{
            float: "right",
            marginRight: "15vw",
            width: 140,
            fontSize: "small",
            marginBottom: 150,
          }}
        >
          {isGerman ? "LEISTUNGEN" : "SERVICES"}
        </button>
      </Link>
    </div>
  );
}
