import ProjectName from "../Projectname/ProjectName";
import Data from "./Data";

import React from 'react'


const Quelification = () => {
  return (
    <div className="work1-container">     
    <div className="project-container">
        {Data.map((val,ind)=>{
          return(
            <ProjectName key={ind} 
            imgsrc={val.imgsrc} 
            title={val.title}
            view={val.view}
            />
          )  
        })}
        </div>                
               
 </div>
     

   
  )
}

export default Quelification