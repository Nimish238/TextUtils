import React, {useState} from 'react'


export default function Home() {
  const [text,setText]= useState(' ');


  const handleCopy=()=>{
    let newText =document.getElementById('myBox');
    newText.select();
    navigator.clipboard.writeText(newText.value);

  }
  const handleUpClick= () => {
    //console.log("Uppercase was clicked"+ text);
    let newText= text.toUpperCase(); 
    setText(newText)
  }

  const handleLowClick = ()=>{
    let newText1=text.toLowerCase();
    setText(newText1)
  }

  const handleExtraSpaces = ()=>{
    let newText1=text.split(/ +/);
    setText(newText1.join(" "));
  }

  const handleClearClick = ()=>{
    let newText1=" ";
    setText(newText1)
  }
  
  const handleOnChange = (event) =>{
    //console.log("on change");
    setText(event.target.value);
  }
  
  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis not supported in this browser.');
    }
  };
  
  const handleDownload = () =>{
    // Create a Blob with the plain text content
    const blob = new Blob([text], { type: 'text/plain' });

    // Create a link element dynamic a is created
    const link = document.createElement('a');

    // Set the href attribute of the link to a URL created from the Blob
    link.href = URL.createObjectURL(blob);

    // set the file name
    link.download = "text_context.txt";

    //document refers to the global Document object in the browser's JavaScript environment
    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);

  }
  
  //The function takes an event parameter, which represents the change event triggered when a user selects a file.
  const handleFileUpload = (event) =>{
    // This line retrieves the selected file from the event. event.target.files is an array containing the files selected by the user. In this case, we're interested in the first file, so [0] is used.
    const file = event.target.files[0];



    if(file){
      //The FileReader provides methods to read the contents of files asynchronously.
      const reader = new FileReader();

      //The onload event is set to a callback function. This function will be called when the file reading operation is completed. It extracts the result (file content) from the event and sets it as the text content using the setText function.
      reader.onload = (e)=>{
        const fileContent = e.target.result;
        setText(fileContent);
      }

      //The file is read as text, and the onload callback will be triggered once the reading is complete.
      reader.readAsText(file);
    }

  }
  return (
    <>
    <div>
        <div className="container" >
        <h1>Enter the text to analyze below </h1>
        <div className="mb-3">           
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
         
        <button className="btn btn-dark mx-2" onClick={handleUpClick}>Convert to Upperase</button>
        <button className="btn btn-dark mx-2" onClick={handleLowClick}>Convert to lower</button>
        <button className="btn btn-dark mx-2" onClick={handleClearClick}>Clear Box</button>
        <button className="btn btn-dark mx-2" onClick={handleCopy}>Copy Box</button>
        <button className="btn btn-dark mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button className="btn btn-dark mx-2" onClick={handleSpeak}>Text to Speech</button>
        <button className="btn btn-dark mx-2" onClick={handleDownload}>Download Text file</button>
        <input type="file" className="btn btn-dark mx-2 my-2" onClick={handleFileUpload}  />
    </div>
    <div className="container my-4">
        <h1>Words Summary</h1>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} minutes </p>
          
        </div>
        
    </div>
    </>
  )
}
