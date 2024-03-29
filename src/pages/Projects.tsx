import { useLangContext } from "../components/Layout";
import { useState, useEffect } from 'react';
import github from "../assets/github.png";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from "react-router-dom";

export default function Projects(): JSX.Element {

 interface ProjectData {
     id: string,
     name:  string,
     description_en:  string,
     description_de:  string,
     imageUrl: string,
     gitURL:  string,
     appURL:  string,
     extra: string
    } 

interface ProjectsData extends Array<ProjectData>{}

const {isGerman} = useLangContext()
const [projectsData, setProjectsData] = useState<ProjectsData>([])
const [isDisplay, setIsDisplay] = useState<boolean>(false)
const [isDataReady, setIsDataReady] = useState<boolean>(false) //this state is only for satisfying TS type checking
const projectsDataURL = "https://raw.githubusercontent.com/Qinisfighting/my-portfolio/main/src/projectsData.json" 

useEffect(() => {
 async function fetchData(): Promise<void> {
     const response = await fetch(projectsDataURL);
     const data = await response.json();
     setProjectsData(data) 
     setIsDataReady(true)
    // console.log(data)  
   }   
   fetchData();
}, [])


const loader = (): JSX.Element => {
  return <div className={isDisplay? "loader-slide": "loader"}></div>
}

// const skillsetDiv = (): JSX.Element => {
//     return (
//         <div className={isDisplay? "skillset-container-slide": "skillset-container"}>
//            <h2>SKILLSET:</h2>
//            <p className="tags">
//                <span className="tag-span">JavaScript</span>
//                <span className="tag-span">TypeScript</span>
//                <span className="tag-span">React</span> 
//                <span className="tag-span">Node</span>
//                <span className="tag-span">Express</span>  
//                <span className="tag-span">API/REST</span> 
//                <span className="tag-span">CSS(SCSS)</span>
//                <span className="tag-span">Tailwind</span>
//                <span className="tag-span">Figma</span>
//                <span className="tag-span">Firebase</span>
//                <span className="tag-span">MongoDB</span>
//                <span className="tag-span">Git</span>
//                <span className="tag-span">Agile</span>
//                . . .
//            </p>
//         </div>
//     )
// }

const projectElements = projectsData.sort((a, b) => Number(b.id) - Number(a.id)).map(project => {
    const {id, name, description_en, description_de, imageUrl,gitURL, appURL} = project
    return <div key={id} className={isDisplay? "each-slide-effect": "project-tile"}>
             <div className="top">
             <a target="_blank" href={appURL}><img className="project--img" src={imageUrl} alt="project-snapshot"/></a>
             <div className="project-tile-top"> 
                 <a target="_blank" href={appURL}><div className="img--hover-text">APP ONLINE</div></a>   
             </div>  
             </div>   
             <div className="project-tile-content">
               <div className="project-tile-content-text">
                 <h3>{name}</h3>
                 <h4>{isGerman? description_de: description_en}</h4> 
             </div>
             <div className="bottom">
             <a target="_blank" href={gitURL}><img src={github} className="git--icon"/></a>
             <div className="project-tile-bottom">
                 <a target="_blank" href={gitURL}><div className="icon--hover-text">SOURCE CODE</div></a>
             </div>
             </div> 
             </div>
           </div>
    } 
)



return ( 
    <div>
       <h1 className="project-header">{isGerman ? "PROJEKT BEISPIELE" : "PROJECT EXAMPLES"}</h1>
      { 
        isDisplay ? (
          <div>
            <div className="projectsDisplay-container" >
              {isDataReady?
                 <Slide indicators={true}>{projectElements}</Slide>
                :
                loader()}      
              <button className="all" onClick={() => setIsDisplay((prev) => !prev)}>
                  {isGerman ? "LISTE SHOW" : "LIST SHOW"}
              </button>
        
            </div>
          </div>  
        ) : (
          <div>
              <div className="projectsAll-container"> 
                      <button
                      className="go-slide"
                      onClick={() => setIsDisplay((prev) => !prev)}
                      >
                      SLIDE SHOW 
                      </button>
                  {isDataReady?projectElements : loader()}
              </div>
          </div>          
        )
      }

        <Link className="about-link" to="/services" >
          <button className="about-btn" style={{float:"right", marginRight:"15vw", width:140, marginBottom:150}}>
            {isGerman ? "LEISTUNGEN" : "SERVICES"}
          </button>
        </Link>
   </div>
  ) 
}

