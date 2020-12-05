import React from "react";
import "./styles.css"


function AndMe(){
    return (
<div className="container">
  <div className="row">
      <div className="col-lg-3 col-sm-0"></div>
      <div className="col-lg-6 col-sm-12">
      <img src="../../assets/Images/and me.png" className="img-fluid" alt="and-me-title"/> 
      <div className="col-lg-3 col-sm-0"></div>
    </div>
    </div>
    <div className="row" >
      <div className="col-3"></div>
      <div className="col-lg-6 col-sm-12" className="text-center" className="mx-auto">
        <p>My name is Rudy Mendoza. I'm an aspriring SWE. Currently working as a Data Analyst.</p>
      </div>
      <div className="col-3"></div>
    </div>
</div>
    )
}

export default AndMe;