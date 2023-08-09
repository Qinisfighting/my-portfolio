import { useLangContext } from "../components/Layout";
import { useState, useEffect } from 'react';
import github from "../assets/github.png";

export default function Projects(): JSX.Element {

 interface ProjectData {
     id: string,
     name:  string,
     description_en:  string,
     description_de:  string,
     imageUrl: string,
     gitURL:  string,
     appURL:  string
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
     console.log(data)  
   }
   
   fetchData();

}, [])

const projectElements = projectsData.map(project => {
 const {id, name, description_en, description_de, imageUrl,gitURL, appURL} = project
 return <div key={id} className="project-tile">
            <a target="_blank" href={appURL}><img className="project--img" src={imageUrl} alt="project-snapshot"/></a>
            <h3>{name}</h3>
            <h4>{isGerman? description_de: description_en}</h4> 
            <a target="_blank" href={gitURL}><img src={github} width="30px" /></a>
         
        </div>
}

)

return (
    <>
     { isDisplay?
     <div className="projectsDisplay-container">
         {projectElements}
         <button onClick={()=>setIsDisplay(prev=>!prev)}>{isGerman?"ALLE":"All"}</button>
    </div>
    :
    <div className="projectsAll-container">
         {projectElements }
         <button onClick={()=>setIsDisplay(prev=>!prev)}>{isGerman?"ZURÜCK":"BACK"}</button>
    </div>
    } 
    </>

)

}

