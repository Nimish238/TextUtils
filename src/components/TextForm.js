//transfered the code tp Home page 
import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick= () => {
    //console.log("Uppercase was clicked"+ text);
    let newText= text.toUpperCase(); 
    setText(newText)
  }

  const handleLowClick = ()=>{
    let newText1=text.toLowerCase();
    setText(newText1)
  }

  const handleClearClick = ()=>{
    let newText1=" ";
    setText(newText1)
  }
  
  const handleOnChange = (event) =>{
    //console.log("on change");
    setText(event.target.value);
  }
  
  const [text,setText]= useState(' ');
  return (
    <>
    <div>
        <h1>{props.heading} </h1>
        <div className="mb-3">           
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upperase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lower</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Box</button>
    </div>
    <div className="container my-4">
        <h1>Words Summary</h1>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} minutes </p>

    </div>
    </>
  )
}
