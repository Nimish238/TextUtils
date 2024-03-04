import React, { useState } from 'react'


export default function About() {
    const [myStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    })

    const [btnText, setBtnText] = useState("Enable Light Mode");
    const toggleStyle = () =>{
        if(myStyle.color === 'white')
        {
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark mode")
        }
        else
        {
            setMyStyle({
                color:'white',
                background:'black'
            })
            setBtnText("Enable Light mode")
        }

    }

  return (
    <div>
        
    <div className="container my-3" style={myStyle}>
    
            <p> The Text Manipulation Tool is a versatile project designed to facilitate seamless manipulation of text through various essential functionalities. Whether you need to convert text to uppercase or lowercase, clear the textbox, copy content, convert text to speech, download text files, or import and read contents from a file, this tool provides a user-friendly interface for efficient text handling.<br></br><br></br>

            <b>Key Features:</b><br></br>

                <b>1.Text Case Conversion:</b>
                Easily convert text to uppercase or lowercase with a simple click, ensuring flexibility in text formatting.<br></br>

                <b>2.Clear Textbox:</b>
                Clear the textbox effortlessly to start fresh or remove existing content.<br></br>

                <b>3.Copy Content:</b>
                Copy the contents of the textbox quickly, streamlining the process of sharing or duplicating text.<br></br>

                <b>4.Text-to-Speech Conversion:</b>
                Utilize the text-to-speech feature to have the tool read out the entered text, providing an accessible and convenient way to consume information.<br></br>

                <b>5.Download Text File:</b>
                Save your text as a downloadable file, enabling easy storage and sharing of important textual data.<br></br>

                <b>6.Import and Read File:</b>
                Import text files seamlessly and read their contents directly within the tool, enhancing efficiency in managing external text data.<br></br>
            </p>
            
            
     
        <div className="container my-2">
            <button onClick={toggleStyle} type="button"  className="btn btn-dark my-3">{btnText}</button>
        </div>
        
    </div>
        
       
    </div>
  )
}
