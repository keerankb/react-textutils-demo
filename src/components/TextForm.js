import React, { useState } from 'react'


export default function TextForm(props) {
    
    const handleUpperCase = () => {
        // console.log("handleUpperCase() func called with text :" + text);
        console.log("handleUpperCase() called");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCase = () => {
        // console.log("handleUpperCase() func called with text :" + text);
        console.log("handleLowerCase() called");
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const handleOnChange = (event) => {
        // console.log("handleOnChange() func called");
        console.log("handleOnChange() called");
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
        <div className="container">
            <div className="my-5">
                <h3><b>{props.heading}</b></h3>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className="row">
                    <div className="col-6 text-start">
                        <button className="btn btn-primary" onClick={handleUpperCase}>Convert to Uppercase</button>
                    </div>
                    <div className="col-6 text-end">
                        <button className="btn btn-primary" onClick={handleLowerCase}>Convert to Lowercase</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mb-5 pb-3">
            <h3><b>Your Text Summary</b></h3>
            <p>{text.split(" ").length} words & {text.length} characters</p>
            <p>{(0.008 * text.length).toFixed(2)} Minutes to read this content</p>
            <h3><b>Text Preview</b></h3>
            <p className="font-monospace text-justify" style={{ textAlign: 'justify' }}>{text}</p>
            <footer className="text-end position-fixed w-100 pt-3" style={{ right: 0, bottom: 0, backgroundColor: '#F8F9FA' }}>
                <p className="small pe-4">Last Modified {document.lastModified}</p>
            </footer>
        </div>
        </>
    )
}
