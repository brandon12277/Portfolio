import React, { useState,useEffect } from "react";

import "../css/footer.css"
import { Fade } from "react-awesome-reveal";




const Footer = () =>{

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
      
       <div id="footer" className="w-full  p-4 flex flex-col justify-center ">
           <div className="flex flex-col gap-5 justify-center items-center text-left">
             
                    
          
            <div className=" p-2 gap-5 flex items-center justify-center  ">
          

            <a
           class="btn round-bor flex items-center justify-center border-2 btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i class="fab fa-linkedin-in"></i>
           </a>

       
        <a
           class="btn round-bor flex items-center justify-center  border-2 btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i class="fab fa-github"></i>
        </a>
          

        </div>
        © 2024 Copyright: Brandon Luke Williams
           
               
           
            </div>

       </div>

      

    </>
  )
     
}

export default Footer;