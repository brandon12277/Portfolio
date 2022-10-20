import React from "react"
import "../css/skill.css"
import cert from "../images/webdev2.jpg"

export default function Skills(){
    return(
         <div className="skill_page" >
             <h1 className="heading_skill" style={{textAlign:"left"}}>Skills</h1>
             <div className="front_back">
                 <div className="frontend">
                 <h1 className="skill_heading">Frontend Development</h1>
                 <div className="skill_block">
                     <div class="skill_inner_block">
                     <i class="fa-solid fa-circle-check"></i>
                           HTML
                           <p className="details_skill">Intermediate</p>
                     </div>
                     <div class="skill_inner_block">
                     <i class="fa-solid fa-circle-check"></i>
                           CSS
                           <p className="details_skill">Intermediate</p>
                     </div>
                 </div>
                 <div className="skill_block">
                     <div class="skill_inner_block">
                     <i class="fa-solid fa-circle-check"></i>
                          JAVASCRIPT
                           <p className="details_skill">Intermediate</p>
                     </div>
                     <div class="skill_inner_block">
                     <i class="fa-solid fa-circle-check"></i>
                           BOOTSTRAP
                           <p className="details_skill">Basic</p>
                     </div>
                 </div>
                 <div className="skill_block">
                     <div class="skill_inner_block">
                     <i class="fa-solid fa-circle-check"></i>
                          REACT
                        <p className="details_skill">Intermediate</p>
                     </div>
                     <div class="skill_inner_block">
                     <i class="fa-solid fa-circle-check"></i>
                          JQUERY
                           <p className="details_skill">Intermediate</p>
                     </div>
                 </div>
                 </div>
                 <div className="backend">
                 <h1 className="skill_heading">Backend Development</h1>
                 <div className="skill_block">
                     <div class="skill_inner_block">
                     <i class="fa-solid fa-circle-check"></i>
                           NodeJs
                           <p className="details_skill">Intermediate</p>
                     </div>
                     <div class="skill_inner_block">
                     <i class="fa-solid fa-circle-check"></i>
                           Express
                           <p className="details_skill">Intermediate</p>
                     </div>
                 </div>
                 <div className="skill_block">
                     <div class="skill_inner_block">
                     <i class="fa-solid fa-circle-check"></i>
                           Django
                           <p className="details_skill">Basic</p>
                     </div>
                     <div class="skill_inner_block">
                     <i class="fa-solid fa-circle-check"></i>
                          MySql
                           <p className="details_skill">Intermediate</p>
                     </div>
                 </div>
                 <div className="skill_block">
                  <div class="skill_inner_block">
                     <i class="fa-solid fa-circle-check"></i>
                          PHP
                           <p className="details_skill">Basic</p>
                     </div>
                     <div class="skill_inner_block">
                     <i class="fa-solid fa-circle-check"></i>
                          MongoDB
                           <p className="details_skill">Basic</p>
                     </div>
                 </div>
                 
                  </div>
             </div>
         </div>
    );
}