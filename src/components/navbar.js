import {React,useState} from "react";
import "../css/navbar.css"
import Loader from "./Loader";



function Navbar(){
  const [active, setActive] = useState("home");
  function LoaderDisp(type,elem){
    let loader=document.getElementById("loading_id");
    let loader_div=document.getElementById("loading_div");
    if(type=="show"){
      loader.style.display="flex";
        loader_div.style.display="flex";
        let loader_bar=document.getElementById("load_bar");
        let count=1;
        let id=setInterval(()=>{
            loader_bar.style.width=count+"%";
            count++;
            if(count==100){
              clearInterval(id);
              handleScreenDisplay(elem);
            }
        },10);
       
    }
    else
    {
      loader.style.display="none";
        loader_div.style.display="none";
    }
        

  }

  function handleScreenDisplay(elem){
     let id=elem+"_id";
     let display=document.getElementById(id);
     setActive(elem);
    
       LoaderDisp("hide");
        display.style.display="flex";
        display.setAttribute("class","animate__animated animate__fadeIn");
        document.getElementById("nav").setAttribute("class","navbar animate__animated animate__fadeIn");
        document.getElementById("nav").style.display="flex";
  }

  window.addEventListener("click",handleButton);
  function handleButton(e){
   
    if( e.target.getAttribute("class")=="about" && window.getComputedStyle(document.getElementById("about_id")).display === "none"){
    let activediv=document.getElementById(active+"_id");
    activediv.setAttribute("class","start_content animate__animated animate__fadeOut");
    document.getElementById("nav").setAttribute("class","navbar animate__animated animate__fadeOut");
    setTimeout(()=>{
      activediv.style.display="none";
      document.getElementById("nav").style.display="none";
      LoaderDisp("show","about");
    },800)
    
    }
    if( e.target.getAttribute("class")=="home"  && window.getComputedStyle(document.getElementById("home_id")).display === "none"){
      let activediv=document.getElementById(active+"_id");
    activediv.setAttribute("class","start_content animate__animated animate__fadeOut");
    document.getElementById("nav").setAttribute("class","navbar animate__animated animate__fadeOut");
    setTimeout(()=>{
      activediv.style.display="none";
        document.getElementById("nav").style.display="none";
        LoaderDisp("show","home");
    },800);
    
      }
    if((e.target.getAttribute("class")=="contact" || e.target.getAttribute("id")=="lets_talk")  && window.getComputedStyle(document.getElementById("contact_id")).display === "none"){
      let activediv=document.getElementById(active+"_id");
      activediv.setAttribute("class","start_content animate__animated animate__fadeOut");
      document.getElementById("nav").setAttribute("class","navbar animate__animated animate__fadeOut");
      console.log("yes")
      setTimeout(()=>{
        activediv.style.display="none";
        document.getElementById("nav").style.display="none";
        LoaderDisp("show","contact");
        
      
     
      },800);
        
    }
    if( e.target.getAttribute("class")=="project" && window.getComputedStyle(document.getElementById("project_id")).display === "none"){
      let activediv=document.getElementById(active+"_id");
      activediv.setAttribute("class","start_content animate__animated animate__fadeOut");
      document.getElementById("nav").setAttribute("class","navbar animate__animated animate__fadeOut");
      setTimeout(()=>{
        activediv.style.display="none";
        document.getElementById("nav").style.display="none";
        LoaderDisp("show","project");
      },800)
      
      }
      if( e.target.getAttribute("class")=="skill" && window.getComputedStyle(document.getElementById("skill_id")).display === "none"){
        let activediv=document.getElementById(active+"_id");
        activediv.setAttribute("class","start_content animate__animated animate__fadeOut");
        document.getElementById("nav").setAttribute("class","navbar animate__animated animate__fadeOut");
        setTimeout(()=>{
          activediv.style.display="none";
          document.getElementById("nav").style.display="none";
          LoaderDisp("show","skill");
        },800)
        
        }
    
  }
    return(
        <div id="nav" className="navbar">
            <div class="menu">
            <button id="menu-icon"  className="home"><i id="icon" class="fa-solid fa-house"></i><br></br>Home</button>
            <button id="menu-icon" className="about"><i id="icon" class="fa-solid fa-user"></i><br></br>About</button>
            <button id="menu-icon" className="contact"><i id="icon" class="fa-solid fa-phone"></i><br></br>Contact</button>
            <button id="menu-icon" className="skill"><i id="icon" class="fa-solid fa-clipboard-list"></i><br></br>Skills</button>
            <button id="menu-icon" className="project"><i id="icon" class="fa-solid fa-file-code"></i><br></br>Projects</button>

            </div>
        </div>
    )
};

export default Navbar;