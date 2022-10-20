import React from "react";
import "../css/homepage.css"

import Navbar from "../components/navbar"
import blob from "../images/moving_stacks.gif";
import man from "../images/man4.jpg";
class Home extends React.Component{


  componentDidMount(){
     let elem=document.getElementById("main-text");
     let text1="A WEB DEVELOPER";
     
     let text2="AN ASPIRING DATA SCIENTIST";
     let text3="A MUSIC ENTHUCIAST";
     let text4="A CODER";
     let len=0;
     let count=1;
     let rep=0;
     let deftext=text1;
     setTimeout(()=>{
      setInterval(()=>{
        setTimeout(()=>{
        if(len!=deftext.length+1 && len!=-1){
         if(rep==0)len++;
         else
         len--;
        elem.innerHTML=deftext.substring(0,len);
        }
        else{
           rep++;
           if(rep==2)count++;
           len=deftext.length;
           if(count==2 && rep==2){
             deftext=text2;
             len=0;
             rep=0;
           }
           if(count==3 && rep==2){
             deftext=text3;
             len=0;
             rep=0;
           }
           if(count==4 && rep==2){
             deftext=text4;
             len=0;
             rep=0;
           }
           if(count==5 && rep==2){
            deftext=text1;
            len=0;
            rep=0;
            count=1;
          }
        }
      },500);
      },100);
   },500);
  }
  render(){
    return(
       <div className="cont">
       
        <div className="intro-cont">
          <h4 id="heading_name">HELLO,I AM <span style={{color:"#B22B27"}}>BRANDON LUKE WILLIAMS</span>
          <br></br>
          <p id="animated_text">I AM <span style={{color:"#B22B27"}} id="main-text"></span></p>
          </h4>
         
          
        </div>
        <div className="CV_contact">
               <button className="cv_contact_button">DOWNLOAD CV</button>
               <button className="cv_contact_button" style={{color:"white",backgroundColor:"#B22B27"}}>CONTACT ME</button>
        </div>
        <div id="about">
           <img className="man" src={man}></img>
           <div className="about_text">
              <h1 className="heading_about">ABOUT ME</h1>
              <p style={{textAlign:"left",fontWeight:"600",color:"#D3D3D3"}}>Hi My name is Brandon Luke Williams Currently a student in St xaviers college pursuing my degree in 
                Bsc Computer Science. i was born and raised in the  Kolkata,West Bengal, and i completed my 10+2 from st xaviers collegiate school kolkata. I have been fond of coding since my 10th and i have been coding ever since in various languages.Getting an output out of lines of code 
                which can be written in the comfort of your home is always something which fascinates me.
                I am a Web Developer with knowledge in both frontend as well as backend and i am currently pursuing my interest in the 
                field of machine learning and data science. </p>
           </div>
        </div>
       
        <Navbar/>
        <div class="custom-shape-divider-top-1651908714">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
    </svg>
</div>
      </div>
    );
  }
  


};
export default Home;