import React, { useState } from "react";

export default function TextForm(props) {
  
  // Upper Case Click Function
  const handleUpClick = () => {
    if (text.length == 0) {
      alert("Enter Some Data");
    }
    let newText = text.toUpperCase();
    setText(newText);

    setUpperButtonColor("btn btn-success my-3 mx-1");
    setLowerButtonColor("btn btn-primary my-3 mx-1");
    setTitleButtonColor("btn btn-primary my-3 mx-1");
    setCopyDataBtn("btn btn-primary my-3 mx-1");
    setCopyDatatxt("Copy to Clip-Board");

  };

  // Lower Case Click Function
  const handlelwClick = () => {
    if (text.length == 0) {
      alert("Enter Some Data");
    }
    let newText = text.toLocaleLowerCase();
    setText(newText);

    setUpperButtonColor("btn btn-primary my-3 mx-1");
    setLowerButtonColor("btn btn-success my-3 mx-1");
    setTitleButtonColor("btn btn-primary my-3 mx-1");
    setCopyDataBtn("btn btn-primary my-3 mx-1");
    setCopyDatatxt("Copy to Clip-Board");
    

  };

  // Title Case Click Function
  const handlescClick = () => {
    if (text.length == 0) {
      alert("Enter Some Data");
    } else {
      var sentence = text.toLowerCase().split(" ");
      for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
      let newText = sentence.join(" ");
      setText(newText);
    }

    setUpperButtonColor("btn btn-primary my-3 mx-1");
    setLowerButtonColor("btn btn-primary my-3 mx-1");
    setTitleButtonColor("btn btn-success my-3 mx-1");
    setCopyDataBtn("btn btn-primary my-3 mx-1");
    setCopyDatatxt("Copy to Clip-Board");
    
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Copy Data Click Function
  const copydatebtn = () => {
    if (text.length == 0) {
      alert("Enter Some Data");
    } else {
      var copyText = document.getElementById("datatext");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999);

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);

      setCopyDatatxt("Coppied Data");
    }

    setUpperButtonColor("btn btn-primary my-3 mx-1");
    setLowerButtonColor("btn btn-primary my-3 mx-1");
    setTitleButtonColor("btn btn-primary my-3 mx-1");
    setCopyDataBtn("btn btn-success my-3 mx-1");

  };

  // Using UseState
  const [text, setText] = useState("");

  const [UpperButtonColor, setUpperButtonColor] = useState("btn btn-primary my-3 mx-1");

  const [lowerButtonColor, setLowerButtonColor] = useState("btn btn-primary my-3 mx-1");

  const [titleButtonColor, setTitleButtonColor] = useState("btn btn-primary my-3 mx-1");

  const [copyDataBtn, setCopyDataBtn] = useState("btn btn-primary my-3 mx-1");

  const [copyDatatxt, setCopyDatatxt] = useState("Copy to Clip-Board");

  return (
    <>
      <div className="container my-4">
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1" >{props.heading}</label>
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="datatext"
            rows="8"
            style={
              {
                backgroundColor:"grey",
              }
            }
          />
        </div>

        {/* Upper Case Button */}
        <button
          className={UpperButtonColor}
          onClick={handleUpClick}
          id="uppercase"
        >
          Convert to Upper Case
        </button>

        {/* Lower Case Button */}
        <button
          className={lowerButtonColor}
          id="lowerbutton"
          onClick={handlelwClick}
        >
          Convert to Lower Case
        </button>

        {/* Title Case Button */}
        <button
          className={titleButtonColor}
          id="titlecase"
          onClick={handlescClick}
        >
          Convert to Sentence Case
        </button>

        <button
          className={copyDataBtn}
          id="copydata"
          onClick={copydatebtn}
        >
          {copyDatatxt}
        </button>

        <hr />
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <div className="container">
          <p>
            &nbsp;&nbsp;
            {text.split(" ").length - 1} Words, {text.length} Characters
          </p>

          <div class="alert alert-info" role="alert">
            You can read this in {0.008 * (text.split(" ").length - 1)} Minuts.
          </div>

          <div className="container my-3">
            <h2>Preview</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
