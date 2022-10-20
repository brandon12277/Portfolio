import React from "react";
import "../css/homepage2.css"
import "../css/about.css"
import Navbar from "../components/navbar"
import logo from "../images/logo3.png"
class About extends React.Component{

   render(){
       return(
        
            
                      
                     
                    <div className="about_page">
                    <h1 className="heading_about">ABOUT ME</h1>
                    <div className="personal_info">
                        <div className="info">
                        <i  class="fa-solid fa-cubes info_logo"></i>
                        <br></br>
                           <span style={{fontWeight:"600"}}>frontend frameworks</span>
                           <br></br>
                           <span style={{color:"white"}}>React.js&#8226;Jquery&#8226;Bootstrap</span>
                        </div>
                        <div className="info">
                        <i  class="fa-solid fa-server info_logo"></i>
                        <br></br>
                           <span style={{fontWeight:"600"}}>Backend frameworks</span>
                           <br></br>
                           <span style={{color:"white"}}>Node.js&#8226;Express&#8226;MongoDB</span>
                        </div>
                        <div className="info">
                        <i className="" class="fa-solid fa-list-check info_logo"></i>
                        <br></br>
                        <span style={{fontWeight:"600"}}>Personal Projects</span> 
                        <br></br>
                        <span style={{color:"white"}}>10+ completed</span>
                        </div>
                        <div className="info">
                        <i class="fa-solid fa-star"></i>
                        <br></br>
                        <span style={{fontWeight:"600"}}>CodeChef Rating</span>
                        <br></br>
                        <span style={{color:"white"}}>3 star</span>
                        </div>
                    </div>
                        <div className="about_text">
                           
                                <p style={{textAlign:"left",fontWeight:"500",color:"white"}}>Hi My name is <span className="glow">Brandon Luke Williams</span> Currently a student in <span className="glow">St xaviers college</span> pursuing my degree in 
                <span style={{color:"#2763b2",fontWeight:"600"}}> Bsc Computer Science</span>.I was born and raised in the  Kolkata,West Bengal, and I completed my 10+2 from <span className="glow">St xaviers collegiate school,kolkata</span>. I have been fond of coding since my 10th and I have been coding ever since in various languages.Getting an output out of lines of code 
                which can be written in the comfort of your home is always something which fascinates me.
                I am a Web Developer with knowledge in both frontend as well as backend and I am currently pursuing my interest in the 
                field of machine learning and data science. </p>
                
                        </div>
                   

                    </div>
       );
   }


};
export default About;
