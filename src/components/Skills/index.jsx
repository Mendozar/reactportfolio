import React from "react";
import "./styles.css"


function Skills(){
    return (
<div className="container">
  <div className="row">
      <div className="col-lg-3 col-sm-0"></div>
      <div className="col-lg-6 col-sm-12">
      <img src="../../assets/Images/skills.png" className="img-fluid" alt="skills-title"/> 
      <div className="col-lg-3 col-sm-0"></div>
    </div>
    </div>
    <div className="row" >
      <div className="col-3"></div>
      <div className="col-lg-3 col-sm-6 text-center mx-auto">
        <ul>
          <li>HTML5</li>
          <li>Vanilla CSS</li>
          <li>Bootstrap and other frameworks</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React.js</li>
        </ul>
      </div>
      <div className="col-lg-3 col-sm-6 text-center mx-auto">
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>npm</li>
          <li>GitHub</li>
          <li>Heroku</li>
        </ul>
      </div>
      <div className="col-3"></div>
    </div>
</div>
    )
}

export default Skills;