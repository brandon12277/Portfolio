import React from "react"
import "../css/contact.css"
export default function Contact(){

return(
    
    <div className="contact_page">
    <div className="contact_desc">
        <h1 className="contact_heading">Contact Me</h1>
        <h3 className="details_contact">Need to get in contact with me?Fill out this form with the necessary details and send me your query</h3>
        <h3 className="details_contact">Whatsapp Number :<span style={{color:"white"}}> +91 8017238819</span></h3>
        <h3 className="details_contact">Email Address : <span style={{color:"white"}}>williamsbrand879@yahoo.com</span></h3>
    </div>
    <div className="contact_form">
    <form action="https://formsubmit.co/williamsbrand879@yahoo.com" method="POST">
        <div className="name">
            <div className="first_name">
               <h3>First Name</h3>
               <input className="input_field" required placeholder="First Name" name="first_name"></input>
            </div>
            <div className="last_name">
            <h3>Last Name</h3>
               <input className="input_field"  required placeholder="Last Name" name="last_name"></input>
             </div>
        </div>
        <div className="email">
            <h3>Email Address</h3>
            <input className="input_field"  required type="email" placeholder="Email" name="email"></input>
                
        </div>
        <div className="query">
            <h3>What can i help u with?</h3>
            <textarea style={{resize:"none"}} className="input_field" rows="3" cols="50" placeholder="Ask Your Query" name="query"></textarea>
                
        </div>
        <button type="submit" className="submit_button">Submit</button>
       
    </form>
   
    </div>
            
    </div>
)

}