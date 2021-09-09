import React, { useState } from 'react';
// import NavbarList from "./NavbarList";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import TextForm from "./Components/Textfromed";
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setmodeText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
      setAlert({
        msg : message,
        type : type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = () =>{
    if(mode==="dark"){
      setMode("light")
      setmodeText("Enable Dark Mode");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode hase been enabled","success");
    }
    else{
      setMode("dark")
      setmodeText("Enable Light Mode");
      document.body.style.backgroundColor='rgba(18,18,18,255)      ';
      showAlert("Dark Mode hase been enabled","success");
    }
  }
  return (
    <>
      <Navbar  title="Text Utils" abouttext="About Us" modeText={modeText} mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert}/>
      {/* <NavbarList/> */}
      <TextForm showAlert={showAlert} heading="Enter Your Text Bellow" mode={mode}/>
      {/* <About /> */}

      
    </>
  );
}

export default App;
