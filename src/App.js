import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Contacts from "./Components/Contacts";
import Education from "./Components/Education";
import Particles from "react-tsparticles";
import Experience from "./Components/Experience";
import About from "./Components/About";

function App() {
  return (
    <>
   <Particles
   params={{
     particles:{
       number:{
         value:30,
         density:{
           enable:true,
           value_area:900
         }
       }
     }
   }} 
   />
  <Navbar/>
  <Header/>
  <About/>
  
  <Education/>
  <Experience/>
  
  <Contacts/>

  </>
  );
}

export default App;
