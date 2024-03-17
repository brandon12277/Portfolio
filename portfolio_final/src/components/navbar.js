import React, { useState,useEffect } from "react";
import logo from "../brandon.png"

import "../css/navbar.css"
import { Fade } from "react-awesome-reveal";
const Navbar = () =>{
  const [on,setNav] = useState(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollDirection, setScrollDirection] = useState('none');
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);


  const navigateBar = () =>{
    
    if (on)setNav(null)
    else
   setNav(1)
    

   
};
  const handleClick = () => {
    setIsOpen(!isOpen);
    navigateBar()
  };

  
  
  useEffect(() => {



    document.querySelectorAll('a[href^="#"], button[data-href^="#"]').forEach(element => {
        element.addEventListener('click', function (e) {
          e.preventDefault();
      
          const targetId = this.getAttribute('href') || this.getAttribute('data-href');
          document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });

   
  

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    

    const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (currentScrollTop > lastScrollTop) {
             console.log("down")
             document.querySelectorAll(".nav")[0].style.boxShadow = "none"
             document.querySelectorAll(".nav")[0].style.backgroundColor = "#191919"
             
        } else {
            document.querySelectorAll(".nav")[0].style.boxShadow = "#ffffff 1px 0px 1px"
            document.querySelectorAll(".nav")[0].style.backgroundColor = "#0e0e0e"
        }
        
        setLastScrollTop(currentScrollTop);
      };

      window.addEventListener("scroll",handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
        <>
        
        {windowWidth>=760?
            <div  className="p-2 w-full flex justify-center items-center bg-c fixed top-0 z-10 nav transition duration-500">
                <div className="">
                    <img className="ml-5 w-12 h-12" src={logo}></img>
                </div>
                
                <div className="w-full flex justify-center gap-20 mr-5">
                    <a className=" nav-h quicksand text-white pd-2" href="#home"><span className="purple">_</span>Home</a>
                    <a className="nav-h quicksand text-white" href="#about"><span className="purple">_</span>About</a>
                    <a className=" nav-h quicksand text-white" href="#skills"><span className="purple">_</span>Skills</a>
                    <a className=" nav-h quicksand text-white" href="#projects"><span className="purple">_</span>Projects</a>
                    <a className=" nav-h quicksand text-white" href="#contact"><span className="purple">_</span>Contact</a>

                    
                </div>
            </div>
                 :
            <div className="p-2 w-full flex flex-col justify-center items-center bg-c fixed top-0 z-10 nav transition duration-500">
                <div className="p-2 w-full flex justify-center items-center">
                <div className="">
                    <img className="ml-5 w-12 h-12" src={logo}></img>
                </div>
                <div className="w-full flex justify-end gap-20 mr-5 ">

                <button className="flex items-center justify-center p-2 text-white" aria-label="Toggle Menu" onClick={handleClick}>
                    {isOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
                </button>
                </div>
                </div>
                {
                    on ?
                <div id= "nav-mob" className="w-full flex flex-col justify-center gap-20 ml-10 mt-5 transition duration-500">
                    <a className=" nav-h quicksand text-white pd-2" href="#home">Home</a>
                    <a className="nav-h quicksand text-white" href="#about">About</a>
                    <a className=" nav-h quicksand text-white" href="#skills">Skills</a>
                    <a className=" nav-h quicksand text-white" href="#projects">Projects</a>
                    <a className=" nav-h quicksand text-white" href="#contact">Contact</a>

                    
                </div>
                :
                <></>

              }
            </div>
                

               }
        
        </>
    
    )
}

export default Navbar;