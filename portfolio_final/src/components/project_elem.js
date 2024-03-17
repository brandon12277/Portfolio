import React, { useEffect,useRef } from "react";


import "../css/project.css"



const Project_Elem = (props) =>{
    const videoRef = useRef(null);
    
    console.log(props)
   
    const handleMouseEnter = () => {
      videoRef.current.play();
    };
  
    
    const handleMouseLeave = () => {
      videoRef.current.currentTime = 0
      videoRef.current.pause();
    };
 
  return (
    <>
   
                  <div className="project roboto">
                  <video
                     
                      ref={videoRef}
                        src={props.video}
                     
                       onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            muted
                              controls={false}
                            autoPlay={false}
                            loop
                   />
                   <div className="proj-details">
                      <h3 className="project-name">{props.name} </h3>
                      <p id="project-descp" className="roboto ">{props.description}</p>
                   </div>
                   <div className="tags">
                    {props.tags.map(item=>
                    <span className="tag-name">{item}</span>
                    )}
                     
                   </div>
                   <div className="project-buttons">
                     
                      <a href={props.videoLink} target='_blank' className="view">View</a>

                   </div>
                  </div>

                  </>
  )

        }
               
           
export default Project_Elem;