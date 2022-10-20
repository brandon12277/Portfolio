import React from "react"
import "../css/homepage2.css"
import logo from "../images/logo3.png"
export default function Loader(){
    return(
        <div id="loading_div">
        <img className="logo" src={logo}></img>
        <div className="loading">
              <div id="load_bar" className="loader">

              </div>
        </div>
        </div>
    );

}