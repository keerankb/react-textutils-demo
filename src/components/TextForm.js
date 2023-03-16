import React, { useState } from 'react'


export default function TextForm(props) {
    
    //To UPPER CASE
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    //To lower case
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    //To set dynamic value of text onChange
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    //To Clear the text field
    const handleClear = () => {
        setText('');
    }

    //To copy text
    const handleCopyText = () => {
        navigator.clipboard.writeText(text)
        alert("Text Copied : " + text);
    }

    //To speak the entered text
    const handleSpeak = () => {
        let writtenWords = new SpeechSynthesisUtterance();
        writtenWords.text = text;
        window.speechSynthesis.speak(writtenWords);
    }

    //To Title Case
    const handleTitleCase = () => {
        let newText = text.toLowerCase().split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
    }

    //To Sentence case
    const handleSentenceCase = () => {
        let newText = text.toLowerCase();
        let ActualWord = newText.charAt(0).toUpperCase() + newText.slice(1);
        setText(ActualWord);
    }

    //To download the content in text file
    const handleDownloadFile = () => {
        let element = document.createElement("a");
        let file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "My Text.txt";
        element.click();
    }

    //To remove extra spaces from text, also from beginning & ending
    const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
            }
        })
        let desiredResult = joinedWords.trim();
        setText(desiredResult);
    }

    // //To iNVERSE cASE
    // const handleInverseCase = () => {
    //     console.log("Inverse Case");
    //     let wordz = text.split(' ');
    //     console.log(wordz);
    // }

    //To add bullets '• ' before each line of the string 
    const handleAddingBulletPoints = () => {
        let match = /^/gm
        let entity = '• '
        let updated_text = text.replace(match, entity)
        setText(updated_text)  
    }

    // //removes every whitespace from the string including newlines
    // const WhiteSpace = () => {
    //     let updated_text = text.replace(/\s/g, '')
    //     setText(updated_text)
    // }

    //     using useState hooks to compare two sentence and return matching or unmatching
    //     const [text, setText]= useState("Enter text section one");
    //     const [text2, setNewText]= useState("Enter text section two");
    //     const [result, setResultText]= useState("Enter text and click compare");
    //     const handleCompareClick= () =>{
    //         if(text === text2){
    //             setResultText("Matching texts");
    //         }else{
    //             setResultText("Unmatching texts");
    //         }
    //     }
    //     const handleOnchange= (e) =>{
    //         setText(e.target.value);
    //     }
    //     const handleOnSecondChange= (e) =>{
    //         setNewText(e.target.value);
    //     }    

    const [text, setText] = useState('');

    return (
        <>
        <div className="container">
            <div className="my-5">
                <h3><b>{props.heading}</b></h3>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary me-2 mt-2" onClick={handleUpperCase}>Uppercase</button>
                <button className="btn btn-primary me-2 mt-2" onClick={handleLowerCase}>Lowercase</button>
                <button className="btn btn-primary me-2 mt-2" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary me-2 mt-2" onClick={handleCopyText}>Copy to Clipboard</button>
                <button className="btn btn-primary me-2 mt-2" onClick={handleSpeak}>Speak</button>
                <button className="btn btn-primary me-2 mt-2" onClick={handleTitleCase}>Title Case</button>
                <button className="btn btn-primary me-2 mt-2" onClick={handleSentenceCase}>Sentence case</button>
                <button className="btn btn-primary me-2 mt-2" onClick={handleDownloadFile}>Download Text</button>
                <button className="btn btn-primary me-2 mt-2" onClick={handleExtraSpaces}>Extra Space</button>
                <button className="btn btn-primary me-2 mt-2" onClick={handleAddingBulletPoints}>Add Bullet Points</button>
                {/* <button className="btn btn-primary me-2" onClick={handleInverseCase}>Inverse case</button> */}


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
