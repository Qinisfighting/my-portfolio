const projectsDataURL = "https://raw.githubusercontent.com/Qinisfighting/my-portfolio/main/src/projectsData.json" 

export default async function getProjectsData(){
  const res = await fetch(projectsDataURL)
  if (!res.ok) {
      throw {
          message: "Failed to fetch projects", 
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  //console.log(data)
  return data 
}


