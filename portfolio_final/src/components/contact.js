import React, { useEffect,useRef } from "react";
import axios from "axios"


import "../css/contact.css"
import { Fade } from "react-awesome-reveal";

const Contact = () =>{
    

  const sendEmail = async () =>{
     
    const name = document.getElementById("name").value
    const descp = document.getElementById("descp").value
    const mail = {
      name:name,
      text:descp
    }
    const headers = {
      'Content-Type': 'application/json', 
    };
    console.log(mail)


    try{
     
    const msg = await axios.post("http://localhost:5000/send-email",mail)
    
    console.log(msg)
    }
    catch (error) {
      console.error('Error sending email:', error);
    }
     
  }

    
   
  return (
    <>
      
    <div id="contact" className="w-full flex flex-col justify-center mt-40">
        <div className="w-full flex  justify-center items-center text-left">
           <div className="we-80 flex flex-col gap-6">
              
         <Fade cascade damping={3} direction = {"left"}>
              <p className="roboto fw text-white text-2xl text-large  name-style">CONTACT<div className="shadow" style={{backgroundColor:"#d2bdeb",height:"1px",width:'50%'}}></div></p> 
         </Fade>

         <div className="w-full flex flex-col mb-80 justify-center">
            
            <div style={{marginTop:"5%"}} className="w-full flex flex-col gap-4 roboto text-white">
                   <p className="contact-descp">Let's get in touch!!</p>
                   <p className="contact-descp"><i class="fa-solid fa-phone"></i> +91 8017238819</p>
                   <p className="contact-descp"><i class="fa-solid fa-envelope"></i> williamsbrand879@yahoo.com</p>
                   <form method="POST" action="https://formsubmit.co/d75d0d7d79c39c144f1f427383180ad8">
                   <div className="w-full contact-form flex flex-col gap-4">
                         <input placeholder="Name" className="con-name" id="name"></input>
                         <textarea rows = "10"placeholder="Description" id="descp" className="con-descp"></textarea>
                         <button  className="w-40 p-2 submit">Submit</button>
                   </div>
                   </form>
            </div>
                 
         </div>
            
           </div>
        
            
        
         </div>

    </div>

   

 </>
  )
     
}

export default Contact;