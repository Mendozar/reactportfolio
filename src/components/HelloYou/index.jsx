import React from "react";
import "./styles.css"


function HelloYou(){
    return (
<div className="container">
    <div className="row">
      <div className="col-lg-6 col-sm-12">
      <img src="../../assets/Images/hello you..png" className="img-fluid" alt="Responsive image"/>
    </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-sm-12">
        <p> I’m Rudy.</p>
      </div>
      <div className="col-lg-6 col-sm-12">
        <img src="../../assets/Images/about-me-img.png" className="img-fluid" alt="about-me-image"/>
      </div>
    </div>
</div>
    )
}

export default HelloYou;