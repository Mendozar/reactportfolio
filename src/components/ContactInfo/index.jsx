import React from "react";
import "./styles.css"
function ContactInfo(){
    return (
<div className="container">
<div className="row">
      <div class="col-lg-6 col-sm-12">
    </div>
    </div>      
    
  <div className="row">
    <div className="col-lg-6 col-sm-12">
          <h5>email.</h5>
          <a href="mailto:argmend@gmail.com">argmend@gmail.com</a>
          <h5>linkedin.</h5>
          <a href="https://www.linkedin.com/in/rudy-mendoza-2510a423/">LinkedIn</a>
          <h5>linkedin.</h5>
          <a href="https://github.com/Mendozar">GitHub profile</a>
          <h5>resume.</h5>
          <a href="https://docs.google.com/document/d/1xkWKqF7NlBEnHf_NROsDdF5jCMLzioiGhLVq705levE/edit">Resume</a>
          {/* <!-- //QUOTE HERE --> */}
    </div>

    <div className="col-lg-6 col-sm-12">
      <ul className="list-unstyled">
        <h5>Mailing Address</h5>
        <li>Rudy Mendoza</li>
        <li>4853 N Winchester Ave</li>
        <li>Chicago, IL</li>
        <li>60640</li>
      </ul>
</div>

  </div>  
</div>
    )
}

export default ContactInfo;