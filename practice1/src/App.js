import React, { useState } from 'react';
// import NavbarList from "./NavbarList";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import TextForm from "./Components/Textfromed";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setmodeText] = useState("Enable Dark Mode");


  const toggleMode = () =>{
    if(mode==="dark"){
      setMode("light")
      setmodeText("Enable Dark Mode");
      document.body.style.backgroundColor='white';
    }
    else{
      setMode("dark")
      setmodeText("Enable Light Mode");
      document.body.style.backgroundColor='rgba(18,18,18,255)      ';
    }
  }
  return (
    <>
      <Navbar  title="Text Utils" abouttext="About Us" modeText={modeText} mode={mode} toggleMode={toggleMode}/>
      {/* <NavbarList/> */}
      <TextForm heading="Enter Your Text Bellow" mode={mode}/>
      {/* <About /> */}
    </>
  );
}

export default App;
