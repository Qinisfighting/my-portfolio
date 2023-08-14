import { useLangContext } from "../components/Layout";
import { useState, useEffect } from 'react';
import github from "../assets/github.png";
import upArrow from "../assets/upArrow.png";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

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

const skillsetDiv = (): JSX.Element => {
    return (
        <div className={isDisplay? "skillset-container-slide": "skillset-container"}>
           <h2>SKILLSET:</h2>
           <p className="tags">
               <span className="tag-span">JavaScript</span>
               <span className="tag-span">TypeScript</span>
               <span className="tag-span">React</span> 
               <span className="tag-span">Node</span>
               <span className="tag-span">Express</span>  
               <span className="tag-span">API/REST</span> 
               <span className="tag-span">jQuery</span>
               <span className="tag-span">CSS(SCSS)</span>
               <span className="tag-span">Bootstrap</span>
               <span className="tag-span">Figma</span>
               <span className="tag-span">Firebase</span>
               <span className="tag-span">MongoDB</span>
               <span className="tag-span">Git</span>
           </p>
        </div>
    )
}

const projectElements = projectsData.map(project => {
    const {id, name, description_en, description_de, imageUrl,gitURL, appURL} = project
    return <div key={id} className={isDisplay? "each-slide-effect": "project-tile"}>
             <div className="top">
             <a target="_blank" href={appURL}><img className="project--img" src={imageUrl} alt="project-snapshot"/></a>
             <div className="project-tile-top"> 
               <div className="img--hover-text">APP ONLINE</div>   
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
                 <div className="icon--hover-text">SOURCE CODE</div>
             </div>
             </div> 
             </div>
           </div>
    } 
)

function goTop(){
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

return ( 
    <>
      { 
        isDisplay ? (
          <div>
            <div className="projectsDisplay-container">
              {skillsetDiv()}
              {isDataReady?
                 <Slide indicators={true}>{projectElements}</Slide>
                :
                loader()}      
              <button className="all" onClick={() => setIsDisplay((prev) => !prev)}>
                  {isGerman ? "ALLE PROJEKTE" : "All PROJECTS"}
              </button>
            </div>
          </div>  
        ) : (
          <div>
              {skillsetDiv()}  
              <div className="projectsAll-container">
                  <button
                  className="go-slide"
                  onClick={() => setIsDisplay((prev) => !prev)}
                  >
                  SLIDE SHOW 
                  </button>
                  {isDataReady?projectElements : loader()}
                  <img src={upArrow} className="go-top" onClick={goTop} />
              </div>
          </div>          
        )
      }
   </>
  ) 
}

