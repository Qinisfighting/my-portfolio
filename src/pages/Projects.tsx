import { useLangContext } from "../components/Layout";
import { useState, useEffect } from 'react';
import github from "../assets/github.png";
import upArrow from "../assets/upArrow.png";

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
const [isDisplay, setIsDisplay] = useState<boolean>(true)
const projectsDataURL = "https://raw.githubusercontent.com/Qinisfighting/my-portfolio/main/src/projectsData.json" 

useEffect(() => {
 async function fetchData(): Promise<void> {
     const response = await fetch(projectsDataURL);
     const data = await response.json();
     setProjectsData(data)     
    // console.log(data)  
   }
   
   fetchData();

}, [])

const projectElements = projectsData.map(project => {
 const {id, name, description_en, description_de, imageUrl,gitURL, appURL} = project
 return <div key={id} className="project-tile">
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
     { isDisplay?
     <div className="projectsDisplay-container">
         {projectElements}
         <button onClick={()=>setIsDisplay(prev=>!prev)}>{isGerman?"ALLE":"All"}</button>
    </div>
    :
    <div className="projectsAll-container">
         <button className="go-back" onClick={()=>setIsDisplay(prev=>!prev)}>{isGerman?"ZURÜCK":"BACK"}</button>
         {projectElements }
          <img src={upArrow} className="go-top" onClick={goTop} />
      
         
    </div>
    } 
    </>

)

}

