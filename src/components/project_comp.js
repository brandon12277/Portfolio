import React from "react"
import "../css/proj_comp.css"

export default function Proj_Comp(props){
    return(
        <div className="project_comp">
           <img className="proj_img" src={props.img}></img>
           <div class="component">
               <h1>{props.name}</h1>
               <p>{props.desc}</p>
               <div className="proj_comp_buttons">
                   <a target="_blank" href={props.project}><button style={{backgroundColor:"#B22B27"}} className="view_button">View Project</button></a>
                   <a target="_blank" href={props.repo}><button className="view_button">View Github Repo</button></a>
               </div>
          </div>
        </div>
    )
}