import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log('uppercase clicked' +text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "primary ")
    }

    const handleOnClick=()=>{
        console.log('uppercase clicked' +text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "primary")


    }

    const handleClearClick=()=>{
        console.log('uppercase clicked' +text);
        let newText = ""
        setText(newText)
        props.showAlert("Clear All text","danger")


    }

    const handleCapitalize =()=>{
        let newText =text.toCapitalize()
        setText(newText)
    }


    const speakClick=()=>{
        let newText = new SpeechSynthesisUtterance();
        newText.text=text;
        window.speechSynthesis.speak(newText)
        props.showAlert("Reading Your Text","secondary")

    }



    const handleOnChange =(event)=>{
        console.log('Onchange');
        setText(event.target.value)
    }

const [text, setText] = useState('');    //React hooks state-
// text="new text";  wrong way to change state
// setText="new text" correct way tochag state

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>

<div className="mb-3">
<textarea className="form-control" value={text} onChange ={handleOnChange} id="myBox" rows="8"></textarea> 
</div>

<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary me-2" onClick={handleOnClick}>Convert To Lowercase</button>
<button className="btn btn-primary me-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary me-2" onClick={handleCapitalize}>Capitalize</button>

<button className="btn btn-primary me-2" onClick={speakClick}>Speak</button>




  </div>

    <div className="container my-3">
        <h1>Your text summary</h1>
        <p className='text-danger fw-bold'>{text.split(" ").length} words, {text.length} characters </p>
        <h2>Reading speed</h2>
        <p className='text-danger fw-bold'>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview </h2>
        <p>{text}</p>
    </div>
    </>
  )
}


