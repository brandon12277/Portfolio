import React, { useState,useEffect } from "react";

import "../css/about.css"
import { Fade } from "react-awesome-reveal";




const About = () =>{

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
      
       <div id="about" className="w-full h-90 p-10 flex flex-col justify-center ">
           <div className="flex  justify-center items-center text-left">
             

            <div className="we-70 flex flex-col gap-10">
            <Fade cascade damping={3} direction = {"left"}>
             <p className="roboto fw text-white text-2xl text-large  name-style">ABOUT ME<div className="shadow" style={{backgroundColor:"#d2bdeb",height:"1px",width:'50%'}}></div></p> 
            </Fade>
            
            <Fade cascade damping={3} direction = {"right"}>
            <div className="me">

            </div> 

            </Fade>


            <Fade cascade damping={3} direction = {"left"}>
             <p className="roboto about-me text-white">Hello!!! My name is <span style={{color:"#e0c4ff"}}>Brandon Luke Williams</span> a passionate and ambitious software and web developer who is 
               currently pursuing his interest in the field of data science and machine learning. As a web developer and college student, I'm currently immersed in the dynamic worlds of data science and machine learning. My passion for coding is the driving force behind my journey. With a keen ability to adapt to different technologies, I thrive on the challenges and opportunities they present.
               <br></br>
               <br></br>
               Technologies I’ve been working with recently :<br></br>
               <span style={{color:"#d2bdeb"}}>&#9866;</span> ReactJs &nbsp;   &nbsp;   <span style={{color:"#d2bdeb"}}>&#9866;</span> MongoDB
               <br></br>
               <span style={{color:"#d2bdeb"}}>&#9866;</span> NodeJs
               &nbsp;
               &nbsp;
               <span style={{color:"#d2bdeb"}}>&#9866;</span> Tensorflow
               <br></br>
               <span style={{color:"#d2bdeb"}}>&#9866;</span> Keras

                 </p>
            
            </Fade>
               
            </div>
            
           
               
           
            </div>

       </div>

      

    </>
  )
     
}

export default About;