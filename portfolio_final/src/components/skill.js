import React, { useState,useEffect } from "react";

import "../css/about.css"
import { Fade } from "react-awesome-reveal";
import flask from "../flask2.png"
import mongo from "../mongo (2).png"
import tensor from "../tensor.png"
import py from "../python3.png"
import keras from "../keras.png"
import panda from "../panda.png"
import cv from "../cv2.png"
import firebase from "../firebase-2.png"



const Skill = () =>{

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  return (
    <>
      
       <div id="skills" className="w-full h-90 p-10 flex flex-col justify-center mt-40">
           <div className="w-full flex  justify-center items-center text-left">
              <div className="w-full flex flex-col gap-10">
                 
            <Fade cascade damping={3} direction = {"left"}>
                 <p className="roboto fw text-white text-2xl text-large  name-style">SKILLS<div className="shadow" style={{backgroundColor:"#d2bdeb",height:"1px",width:'50%'}}></div></p> 
            </Fade>

            <div className="w-full grid grid grid-cols-2 sm:grid-cols-3 gap-5 dev">
                 
            <Fade  direction = {"left"}>
                    <p > <i style={{color:"#EFD033"}} class="fa-brands fa-js"></i> Javascript</p>
                    <p><i style={{color:"#3b5998"}} class="fa-brands fa-react"></i> React.js</p>
                    <p><img style={{width:'15px',height:"auto"}} src={flask}></img> Flask</p>
                    <p> <i style={{color:'#ffa500'}} class="fa-brands fa-html5"></i> HTML</p>
               
                
                    <p> <i style={{color:"#3b5998"}} class="fa-brands fa-css3-alt"></i> CSS</p>
                    <p> <i style={{color:"#EFD033"}} class="fa-brands fa-bootstrap"></i> Bootstrap</p>
                    <p> <i  style={{color:"#71BC68"}} class="fa-brands fa-node"></i> Node.js</p>
                    <p> <i style={{color:"#B22B27"}}  class="fa-brands fa-npm"></i> Npm</p>
                
                
                    <p> <i style={{color:"#EFD033"}} class="fa-brands fa-node-js"></i> Express</p>
                    <p><img style={{width:'28px',height:"auto"}} src={mongo}></img> MongoDB</p>
                    <p><i class="fa-solid fa-database"></i> SQL</p>
                    <p> <img style={{width:'28px',height:"auto"}} src={firebase}></img> FireBase</p>
                    
               
                
              
                   <p> <i style={{color:"#B22B27"}} class="fa-brands fa-git-alt"></i> Git</p>
                    <p> <img style={{width:'15px',height:"auto"}} src={tensor}></img> Tensorflow</p>
                    <p><img style={{width:'15px',height:"auto"}} src={py}></img> Python</p>
                    <p> <i class="fa-solid fa-chart-simple"></i> Matplotlib</p>
                    
                    <p> <img style={{width:'20px',height:"auto"}} src={keras}></img> Keras</p>
                
                    <p><img style={{width:'15px',height:"auto"}} src={py}></img>  Pandas</p>
                    <p><img style={{width:'15px',height:"auto"}} src={cv}></img> OpenCv</p>
                    <p><i class="fa-solid fa-bolt"></i> Socket.io</p>
                    </Fade>
                    
            </div>
               
              </div>
           
               
           
            </div>

       </div>

      

    </>
  )
     
}

export default Skill;