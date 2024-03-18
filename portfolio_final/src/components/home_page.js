import React, { useState,useEffect } from "react";

import "../css/landing.css"
import { Fade } from "react-awesome-reveal";
import scroll from  "../scroll brand.gif"
import saveAs from 'file-saver';

import resume from "../Resume.pdf"

const LandingPage = () =>{

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const handleDownload = () => {
    const pdfBlob = new Blob([], { type: 'application/pdf' }); 
    saveAs(resume, "resume.pdf"); // 
  };


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

   

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    useEffect(()=>{
      
      
       
       
    
      let dyn_text = document.getElementById("intro-white")
      dyn_text.innerHTML="&nbsp;"

      let words=["Web Developer.","Tech Enthusiast.","Software Developer."]
      let word_itr = 0
      let letter_itr = 0
      let rev_bool = false
    
      let text_ani = setInterval(()=>{

       
        if(letter_itr == 0 && rev_bool){
          letter_itr = 0
          word_itr++;
          rev_bool = false;
        }
        else if(letter_itr == 0)rev_bool = false;

        if(word_itr == 3)word_itr = 0;
        if(letter_itr == words[word_itr].length){
         rev_bool = true;
        }

          if(!rev_bool) {
            if(words[word_itr][letter_itr] == " "){
              dyn_text.innerHTML+="&nbsp;"
              letter_itr++
            }
            else{
            dyn_text.innerText+=words[word_itr][letter_itr++]
            }
          }
          else{
            let len = dyn_text.innerText.length
            dyn_text.innerText=dyn_text.innerText.substring(0,len-1)
            letter_itr--;
          }
        
        
      
         

      },250)
      

          
          return () => {
            
            clearInterval(text_ani);
          };
    })
 
  return (
    <>
      
       <div id="home" className="w-full h-90 flex flex-col justify-center mt-20">
           <div className="flex flex-col  items-center text-left">
           <Fade cascade damping={2} direction = {"right"}>
               <p className="roboto purple  ">Hi, My Name is</p>
          </Fade>
               <Fade cascade damping={4} direction = {"right"}>
               {windowWidth>=600 ?<p className="roboto fw text-white text-5xl font-large ml-10  mb-10 name-style">Brandon Luke Williams</p> : 
                  <p className="roboto fw text-white text-3xl font-large   mb-10 name-style">Brandon Luke Williams</p>
               }
               </Fade>

           

           <Fade cascade damping={4} direction = {"right"}>
                {windowWidth>=600?
               <p className="roboto text-white text-2xl  mb-10"><span style={{color:"#b100cd"}}>I am a</span><span  style={{color:"white"}} id="intro-white"></span> </p>
                :
                <p className="roboto text-white text-xl  mb-10"><span style={{color:"#b100cd"}}>I am a</span><span  style={{color:"white"}} id="intro-white"></span> </p>
            }
            </Fade>
            <Fade cascade damping={5} direction = {"right"}>
               <p className="roboto text-white mb-10 text-center">A passionate coder with great curiosity in software,<br></br>
               web development and exploring the field of data science </p>
            </Fade>  
           
            </div>

            <Fade cascade damping={5} direction = {"right"}>
           <div className="flex mb-20  gap-10 justify-center items-center">
           
           
               <button onClick={handleDownload} className="button-6 roboto ">Download Resume</button>
              
               
               <button  data-href="#projects" className="button-6 roboto">View My Work </button>
         
            

            </div>
            </Fade>
            

       </div>

      

    </>
  )
     
}

export default LandingPage;