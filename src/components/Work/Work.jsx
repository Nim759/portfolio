
import ProjectName from "../Projectname/ProjectName";
import WorkData from "./Workdata";

import React from 'react'


const Work = () => {
  return (
    <div className="work1-container">     
    <div className="project-container">
        {WorkData.map((val,ind)=>{
          return(
            <ProjectName key={ind} 
            imgsrc={val.imgsrc} 
            title={val.title}
            text={val.text}
            view={val.view}
            />
          )  
        })}
        </div>                
               
 </div>
     

   
  )
}

export default Work