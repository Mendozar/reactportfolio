import React from "react";
import "./styles.css"


function PortfolioCards(){
    return (
<div className="container">
  
<div className="row">
  <div className="col-lg-6 col-sm-12">
      <div>
        portfolio Samples.
      </div>
  </div>
</div>

<div className="row">
  <div className="col-lg-4 col-sm-6">
    <div className="card">
        <img src={require('../../assets/Images/Night In App.png')} className="card-img-top" alt="Night In thumbnail"/>
        <div className="card-body">
        <h5 className="card-title">Night In App.</h5>
        <p className="card-text">A singular tool to make the most of their evenings spend in doors.​​</p>
        <a href="https://nrouhanizdeh.github.io/Night-In-App/" target="_blank" className="btn btn-secondary">Plan a Night In!</a>
        </div>
    </div>
    </div>

      <div className="col-lg-4 col-sm-6">
        <div className="card">
          <img src={require('../../assets/Images/City Weather Dashboard.png')} className="card-img-top" alt="City Weatherboard thumbnail"/>
          <div className="card-body">
          <h5 className="card-title">City Weather Dashboard.</h5>
          <p className="card-text">Check the weather outlook for multiple cities so that you can plan a trip!</p>
          <a href="https://mendozar.github.io/Homework6/" target="_blank" className="btn btn-secondary">Learn more</a>
          </div>
      </div>
      </div>

      <div className="col-lg-4 col-sm-6">
        <div className="card">
          <img src={require('../../assets/Images/Password Generator.png')} className="card-img-top" alt="Password Generator thumbnail"/>
          <div className="card-body">
          <h5 className="card-title">Password Generator.</h5>
          <p className="card-text">Channel your inner child and play this simple game I created using Scratch.</p>
          <a href="https://mendozar.github.io/Homework3/" target="_blank" className="btn btn-secondary">Generate a password!</a>
          </div>
      </div>
      </div>

  {/* </div> 
  <div className="row">  */}
      <div className="col-lg-4 col-sm-6">
        <div className="card">
            <img src={require('../../assets/Images/burgers.png')} className="card-img-top" alt="burger thumbnail"/>
            <div className="card-body">
            <h5 className="card-title">Burger.</h5>
            <p className="card-text">Add and eat burgers.</p>
            <a href="https://mendozar.github.io/Homework3/" target="_blank" className="btn btn-secondary">Eat.</a>
            </div>
        </div>
        </div>

        <div className="col-lg-4 col-sm-6">
        <div className="card">
            <img src={require('../../assets/Images/Weekday Scheduler.png')} className="card-img-top" alt="scheduler thumbnail"/>
            <div className="card-body">
            <h5 className="card-title">Weekday Scheduler.</h5>
            <p className="card-text">Schedule your weekday.</p>
            <a href="https://mendozar.github.io/Homework3/" target="_blank" className="btn btn-secondary">Schedule.</a>
            </div>
        </div>
        </div>

        <div className="col-lg-4 col-sm-6">
        <div className="card">
            <img src={require('../../assets/Images/JavaScript Quiz.png')} className="card-img-top" alt="JS quiz thumbnail"/>
            <div className="card-body">
            <h5 className="card-title">JavaScript Quiz.</h5>
            <p className="card-text">Take a quiz on JavaScript.</p>
            <a href="https://mendozar.github.io/Homework3/" target="_blank" className="btn btn-secondary">Quiz!</a>
            </div>
        </div>
        </div>

  </div>
</div>
  )
}

export default PortfolioCards;