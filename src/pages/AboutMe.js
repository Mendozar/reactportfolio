import React from "react";
import NavBar from "../components/NavBar";
import HelloYou from "../components/HelloYou";
import Skills from "../components/Skills";
import AndMe from "../components/AndMe";
import Footer from "../components/Footer";


function AboutMe(){
    return (
        <div>
            <NavBar /> 
            <HelloYou /> 
            <Skills /> 
            <AndMe /> 
            <Footer /> 
        </div>
    )
}

export default AboutMe;