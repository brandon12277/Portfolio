import React, { useEffect,useRef } from "react";

import speak from "../speak.mp4"
import speech from "../speech.mp4"
import letter from "../letter.mp4"
import chatter from "../chatter.mp4"
import volume from "../volume.mp4"
import code from "../code.mp4"
import { Fade } from "react-awesome-reveal";
import Project_Elem from "./project_elem";



const Projects = () =>{
   

    const proj_name = [

        {
         video:speak,
        name:"SpeakSphere",
        description:"An Online debating platform with content moderation using natural language processing and convoluted neural networks",
        tags:["React.js","NodeJs","MongoDB","Tensorflow","sci-kit learn"],
        videoLink:"https://speaksphere.onrender.com/"
        },

        {
            video:speech,
            name:"Speech emotion analysis",
            description:"A speech sentiment analyzer using convoluted neural network and spectograms",
            tags:["React","Tensorflow","CNN"],
            videoLink:"https://emotiondect.onrender.com/"
        },

        {
            video:letter,
            name:"LetterTrap",
            description:"A multiplayer variation of the game wordle",
            tags:["NodeJs","Socket.io","Express"],
            videoLink:"https://lettertrap.onrender.com/"
             
        },

        {
            video:chatter,
            name:"Chatter",
            description:"A group chatting application implemented using socket.io",
            tags:["NodeJs","Socket.io","Express","Bootstrap"],
            videoLink:"https://chatrooms-7orn.onrender.com/"
        },

        {
            video:volume,
            name:"Finger Volume Adjuster",
            description:"A Device Volume controller using computer vision",
            tags:["python","OpenCV","Tensorflow"],
            videoLink:"https://github.com/brandon12277/FingerVolumeAdjuster"
        },

        {
            video:code,
            name:" Collaborative Code Editor",
            description:"An open source code editor",
            tags:["MySQL","Nodejs","Bootstrap"],
            videoLink:"https://code-editor-sp1h.onrender.com/"
        }


    ]
 
  return (
    <>
      
       <div id="projects" className="w-full flex flex-col justify-center mt-40">
           <div className=" w-full flex  justify-center items-center text-left ">
              <div className="w-full flex flex-col items-center gap-10 ">
                 
            <Fade cascade damping={3} direction = {"left"}>
                 <p className="roboto fw text-white text-2xl text-large  name-style">PROJECTS<div className="shadow" style={{backgroundColor:"#d2bdeb",height:"1px",width:'100%'}}></div></p> 
            </Fade>

            <div className="we-80  grid grid-cols-2 xl:grid-cols-3 grid-res gap-8 dev ">
                 
               <Fade cascade damping={0.2} direction = {"left"}>
                  
                      
                      {
                        proj_name.map(video_elem=>

                            <Project_Elem
                                
                            video= {video_elem.video}
                            name = {video_elem.name}
                            description = {video_elem.description}
                            tags = {video_elem.tags}
                            videoLink = {video_elem.videoLink}
                             
                            />

                        )
                      }
                   
                 
               </Fade>
                    
            </div>
               
              </div>
           
               
           
            </div>

       </div>

      

    </>
  )
     
}

export default Projects;