import React from "react";
import Navbar from "../components/Navbar";
import HelloYou from "../components/HelloYou";
import Skills from "../components/Skills";
import AndMe from "../components/AndMe";
import Footer from "../components/Footer";


function AboutMe(){
    return (
        <div>
            <Navbar /> 
            <HelloYou /> 
            <Skills /> 
            <AndMe /> 
            <Footer /> 
        </div>
    )
}

export default AboutMe;