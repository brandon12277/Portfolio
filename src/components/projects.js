import React from "react"
import "../css/project.css"
import logo from "../images/proj1.jpg"
import logo2 from "../images/proj2.jpg"
import logo3 from "../images/proj3.jpg"
import logo4 from "../images/proj4.jpg"
import logo5 from "../images/proj5.jpg"
import logo6 from "../images/proj6.jpg"
import logo7 from "../images/proj7.jpg"
import Proj_Comp from "./project_comp"
export default function Projects(){
    return(
         <div className="project_page" >
             <h1 className="heading_about">Projects</h1>
            <Proj_Comp
             img={logo}
             name={"Chatter Web Application"}
             desc={"This is a basic chat application where you can make chat rooms with a number of people like a group chat.The Number of rooms which can be created is unlimited and there is no fixed number of people in a room."}
             project={"https://chatterwebapp.herokuapp.com/"}
             repo={"https://github.com/brandon12277/Chatter-Online-Free-Chat-Rooms"}
            />
             <Proj_Comp
             img={logo2}
             name={"Letter Trap"}
             desc={"This game is similar to to the highly famous game wordle.However this game was recreated to imitate the same principles of wordle but in a multiplayer fashion."}
             project={"https://lettertrap.herokuapp.com/"}
             repo={"https://github.com/brandon12277/Letter-Trap"}
            />
             <Proj_Comp
             img={logo7}
             name={"Covidpedia"}
             desc={"This project is a covid trackering application which helps in giving information regarding covid globally.This project provides us info on covid information of each country which includes infromation regarding confirmed cases,number of deaths,active cases and recovered cases. "}
             project={"https://covidpediawebapp.herokuapp.com/"}
             repo={"https://github.com/brandon12277/Covidpedia"}
            />
            <Proj_Comp
             img={logo3}
             name={"Code Editor"}
             desc={"This project is a simple replication of a code editor used to build single paged webpages using html css and javascript."}
             project={"https://onlinecodeeditor-app.herokuapp.com/"}
             repo={"https://github.com/brandon12277/Code-Editor"}
            />
             <Proj_Comp
             img={logo4}
             name={"Array Sorting Visualizer"}
             desc={"This project depicts an array sorting visualizer.This helps in visualizing various array sorting algorithms like bubble sort,heap sort,selection sort etc in a simplified fashion."}
             project={"https://brandon12277.github.io/Array-Sorting-Visualizer/"}
             repo={"https://github.com/brandon12277/Array-Sorting-Visualizer"}
            />
            <Proj_Comp
             img={logo5}
             name={"Coordinate Snake"}
             desc={"This project has the similar concept of a snake game but with a major twist.In this game we play as the food particle trying to escape the grasp of the snake itself.the snake thus follows the food particle with the help of a simple algorithm based on the principles of coordinate geometry."}
             project={"https://brandon12277.github.io/Coordinate-snake/"}
             repo={"https://github.com/brandon12277/Coordinate-snake"}
            />
            <Proj_Comp
             img={logo6}
             name={"Book Finder App"}
             desc={"This Project is a simple book finder web application which helps you find E-books online depending on your search results and the books available.The API used include the google books API."}
             project={"https://brandon12277.github.io/Book-Finder-App/"}
             repo={"https://github.com/brandon12277/Book-Finder-App"}
            />
         </div>
    );
}