import React from "react";
import "../css/homepage2.css"

import Navbar from "../components/navbar"
import logo from "../images/logo3.png"
import About from "./about";
import Loader from "../components/Loader";
import Contact from "../components/contact";
import Projects from "../components/projects";
import Skills from "./skill";
const onButtonClick = (pdfFile) => {
  // using Java Script method to get PDF file
  fetch("first resume.pdf").then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Resume.pdf';
          alink.click();
      })
  })
}
class Home2 extends React.Component{
 
   render(){
       return(
         <div className="cont">
                
                 <div id="main" className="main-page">
                 <div  class="custom-shape-divider-top-1652076915">
    <svg id="top" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
    </svg>
</div>
                 <div  class="custom-shape-divider-bottom-1652076328">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
    </svg>
</div>             <div className="scnd_cont">
                       <div id="home_id" className="start_content animate__animated animate__fadeIn">
                         <div className="socials_div">
                         <img className="logo" src={logo}></img> 
                          <h2 style={{fontWeight:"900"}}>SOCIALS</h2>
                          <a target="_blank" href="https://www.facebook.com/profile.php?id=100053935254345" style={{textDecoration:"none"}}><button className="social"><i class="fa-brands fa-facebook"></i>Facebook</button></a>
                          <a target="_blank" href="https://www.instagram.com/_.brandoo._/" style={{textDecoration:"none"}}><button className="social"><i class="fa-brands fa-instagram"></i>Instagram</button></a>
                          <a target="_blank" href="https://www.github.com/brandon12277" style={{textDecoration:"none"}}><button className="social"><i class="fa-brands fa-github"></i>Github</button></a>
                          



                         </div>
                          <div className="content_section">
                          <div className="intro-cont">
                            <h4 id="heading_name">HI,I AM <br></br> <span style={{color:"#B22B27"}}>BRANDON LUKE WILLIAMS</span>
                            <br></br>
                            <h6 className="details">A Frontend/Backend Developer And Aspiring Data Scientist</h6>
                            </h4>
                           
                            <div className="CV_contact">
                                <button className="cv_contact_button" onClick={()=>{onButtonClick("first resume.pdf")}}>DOWNLOAD CV</button>
                                 <button className="cv_contact_button" id="lets_talk">LETS TALK</button>
                            </div>
                          </div>
                          </div>
                     </div>
                     <div id="about_id"><About/></div>
                     <div id="contact_id"><Contact/></div>
                     <div id="project_id"><Projects/></div>
                     <div id="skill_id"><Skills/></div>
                     <div id="loading_id">
                         <Loader/>
                     </div>
                   </div>
                     
                   
                     <Navbar/>
                 </div>
                
         </div>
       );
   }


};
export default Home2;
