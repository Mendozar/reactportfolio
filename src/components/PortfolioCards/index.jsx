import React from "react";
import "./styles.css"


function PortfolioCards(){
    return (
<div className="container">

  <div className="row">
      <div className="col-lg-6 col-sm-12">
      <img src="../../assets/Images/portfolio.png" className="img-fluid" alt="Responsive image"/>
    </div>
  </div>        
    
  <div className="row">
    <div className="col-lg-6 col-sm-12">
        <div>
            Is not a lot, but it's honest work.
        </div>
    </div>
  </div>

  <div className="row">
    <div className="col-lg-4 col-sm-6">
      <div className="card">
          <img src="../../assets/Images/raw-apothecary.png" className="card-img-top" alt="Raw Apothecary thumbnail"/>
          <div className="card-body">
          <h5 className="card-title">Raw Apothecary.</h5>
          <p className="card-text">Online store for Raw Apothecary, a natural skincare brand. Created on Shopify.</p>
          <a href="https://rawapothecary.mx/" target="_blank" className="btn btn-secondary">Buy</a>
          </div>
      </div>
      </div>

        <div className="col-lg-4 col-sm-6">
          <div className="card">
            <img src="../../assets/Images/rps.png" className="card-img-top" alt="rock paper scissors thumbnail"/>
            <div className="card-body">
            <h5 className="card-title">Rock, paper, scissors.</h5>
            <p className="card-text">The old game we all know, but on your browser. Basic HTML and Javascript application.</p>
            <a href="https://github.com/melfp2311/workday-scheduler" target="_blank" className="btn btn-secondary">Learn more</a>
            <a href="rock paper scissors.html" target="_blank" className="btn btn-secondary">Play</a>
            </div>
        </div>
        </div>

        <div className="col-lg-4 col-sm-6">
          <div className="card">
            <img src="../../assets/Images/cheesy-puffs.png" className="card-img-top" alt="cheesy puffs thumbnail"/>
            <div className="card-body">
            <h5 className="card-title">Get the cheesy puffs.</h5>
            <p className="card-text">Channel your inner child and play this simple game I created using Scratch.</p>
            <a href="https://scratch.mit.edu/projects/377045442/" target="_blank" className="btn btn-secondary">Play</a>
            </div>
        </div>
        </div>

    {/* </div> 
    <div className="row">  */}
        <div className="col-lg-4 col-sm-6">
          <div className="card">
              <img src="../../assets/Images/scheduler.png" className="card-img-top" alt="workday scheduler thumbnail"/>
              <div className="card-body">
              <h5 className="card-title">Workday Scheduler.</h5>
              <p className="card-text">Simple calendar to organize and keep track of everything that happens between 9 to 5. Fully working on HTML, uses client side storage and Javascript for API calls.</p>
              <a href="https://github.com/melfp2311/workday-scheduler" target="_blank" className="btn btn-secondary">Learn more</a>
              <a href="https://melfp2311.github.io/workday-scheduler/Develop/index" target="_blank" className="btn btn-secondary">Go</a>
              </div>
          </div>
          </div>

        <div className="col-lg-4 col-sm-6">
          <div className="card">
              <img src="../../assets/Images/selena-quintanilla.png" className="card-img-top" alt="selena quiz thumbnail"/>
              <div className="card-body">
              <h5 className="card-title">Selena Quintanilla Quiz.</h5>
              <p className="card-text">Let's see if you're worthy to be a disciple of the one and only Queen of Tex-Mex. Built HTML using Bootstrap, using client side storage for scores and Javascript for interactivity.</p>
              <a href="https://github.com/melfp2311/quiz" target="_blank" className="btn btn-secondary">Learn more</a>
              <a href="https://melfp2311.github.io/quiz/index" target="_blank" className="btn btn-secondary">Play</a>
              </div>
          </div>
          </div>

        <div className="col-lg-4 col-sm-6">
          <div className="card">
              <img src="../../assets/Images/password-generator.png" className="card-img-top" alt="password generator thumbnail"/>
              <div className="card-body">
              <h5 className="card-title">Random Password.</h5>
              <p className="card-text">Application that generates a random password based on user-selected criteria. Basic HTML and Javascript application.</p>
              <a href="https://github.com/melfp2311/password-generator" target="_blank" className="btn btn-secondary">Learn more</a>
              <a href="https://melfp2311.github.io/password-generator/Develop/index.html" target="_blank" className="btn btn-secondary">Generate</a>
              </div>
          </div>
          </div>

    {/* <div className="row">  */}
            <div className="col-lg-4 col-sm-6">
              <div className="card">
                  <img src="../../assets/Images/bucketlist.png" className="card-img-top" alt="quarantine bucket list thumbnail"/>
                  <div className="card-body">
                  <h5 className="card-title">Quarantine Bucket List.</h5>
                  <p className="card-text">We created an application that can be used to write, modify, and delete to do's out of a bucket list.Fully deployed on Heroku, uses mySQL, Javascript, handlebars and routing.</p>
                  <a href="https://github.com/melfp2311/officialProject2" target="_blank" className="btn btn-secondary">Learn more</a>
                  <a href="https://melfp2311.github.io/workday-scheduler/Develop/index" target="_blank" className="btn btn-secondary">Go</a>
                  </div>
              </div>
              </div>
    
            <div className="col-lg-4 col-sm-6">
              <div className="card">
                  <img src="../../assets/Images/readmegenerator.png" className="card-img-top" alt="read me generator thumbnail"/>
                  <div className="card-body">
                  <h5 className="card-title">Good ReadMe Generator.</h5>
                  <p className="card-text">Created a command-line application that dynamically generates a README.md from a user's input. The application runs with the following command: node index.js The user is prompted for their GitHub username and other information according to the project the README is for.</p>
                  <a href="https://github.com/melfp2311/good-readme-generator" target="_blank" className="btn btn-secondary">Download</a>
                  </div>
              </div>
              </div>
    
            <div className="col-lg-4 col-sm-6">
              <div className="card">
                  <img src="../../assets/Images/compliment-generator.png" className="card-img-top" alt="compliment generator thumbnail"/>
                  <div className="card-body">
                  <h5 className="card-title">Random Compliment Generator.</h5>
                  <p className="card-text">Sometimes you need someone to tell you it's ok. Other times you need someone to tell you you are the best at making cereal. We all need a little encouragement - meaning random compliment. I've got you covered.</p>
                  <a href="https://github.com/melfp2311/compliment-generator" target="_blank" className="btn btn-secondary">Learn more</a>
                  <a href="https://melfp2311.github.io/compliment-generator/index?ref=producthunt" target="_blank" className="btn btn-secondary">Get one</a>
                  </div>
              </div>
              </div>
    </div>
</div>
    )
}

export default PortfolioCards;