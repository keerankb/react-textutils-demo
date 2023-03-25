import React, { useState } from 'react'


export default function TextForm(props) {
    
    //To UPPER CASE
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to UpperCase', 'success');
    }

    //To lower case
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to LowerCase', 'success');
    }
    
    //To set dynamic value of text onChange
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    //To Clear the text field
    const handleClear = () => {
        setText('');
        props.showAlert('Text Cleared', 'success');
    }

    //To copy text
    const handleCopyText = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied", "success");
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
        props.showAlert('Text converted to TitleCase', 'success');
    }

    //To Sentence case
    const handleSentenceCase = () => {
        let newText = text.toLowerCase();
        let ActualWord = newText.charAt(0).toUpperCase() + newText.slice(1);
        setText(ActualWord);
        props.showAlert('Text converted to SentenceCase', 'success');
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
        props.showAlert('File Downloaded', 'success');
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
        props.showAlert('Extra space removed', 'success');
    }

    //To add bullets '• ' before each line of the string 
    const handleAddingBulletPoints = () => {
        let match = /^/gm
        let entity = '• '
        let updated_text = text.replace(match, entity)
        setText(updated_text);
        props.showAlert('Added bullet points', 'success');
    }

    //To count words (without space)
    // function countWords(str) {
    //     const arr = str.split(/\s+/); //for new line or space, only for space = (' ')
    //     return arr.filter(word => word !== '').length;
    // }

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
        <div className="container" style={{color : props.mode==='light'?'black':'white', backgroundColor: props.mode==='light'?'white':'#3B3B3B'}}>
            <div className="my-5">
                <h3><b>{props.heading}</b></h3>
                <div className="my-3">
                    <textarea style={{color : props.mode==='light'?'black':'white', backgroundColor: props.mode==='light'?'white':'#3B3B3B'}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary me-2 mt-2" onClick={handleUpperCase}>Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary me-2 mt-2" onClick={handleLowerCase}>Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary me-2 mt-2" onClick={handleClear}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary me-2 mt-2" onClick={handleCopyText}>Copy to Clipboard</button>
                <button disabled={text.length===0} className="btn btn-primary me-2 mt-2" onClick={handleSpeak}>Speak</button>
                <button disabled={text.length===0} className="btn btn-primary me-2 mt-2" onClick={handleTitleCase}>Title Case</button>
                <button disabled={text.length===0} className="btn btn-primary me-2 mt-2" onClick={handleSentenceCase}>Sentence case</button>
                <button disabled={text.length===0} className="btn btn-primary me-2 mt-2" onClick={handleDownloadFile}>Download Text</button>
                <button disabled={text.length===0} className="btn btn-primary me-2 mt-2" onClick={handleExtraSpaces}>Extra Space</button>
                <button disabled={text.length===0} className="btn btn-primary me-2 mt-2" onClick={handleAddingBulletPoints}>Add Bullet Points</button>


            </div>
        </div>
        <div className="container mb-5 pb-3" style={{color : props.mode==='light'?'black':'white', backgroundColor: props.mode==='light'?'white':'#3B3B3B'}}>
            <h3><b>Your Text Summary</b></h3>
            {/* <p>{text.split(" ").length} words & {text.length} characters</p> */}
            {/* <p>{text.replace(/ /g, "").length} words & {text.length} characters</p> */}
            {/* <p>{text.match(/(\w+)/g).length} words & {text.length} characters</p> */}
            {/* <p>{countWords(text)} words & {text.length} characters</p> */}
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>
            <p>{(0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length).toFixed(2)} Minutes to read this content</p>
            <h3><b>Text Preview</b></h3>
            <p className="font-monospace text-justify" style={{ textAlign: 'justify' }}>{text.length>0?text:'Nothing to preview'}</p>
            <footer style={{color : props.mode==='light'?'black':'white', backgroundColor: props.mode==='light'?'#F8F9FA':'#212529', right: 0, bottom: 0, zIndex: 1 }} className="text-end position-fixed w-100 pt-3">
                <p className="small pe-4">Last Modified {document.lastModified}</p>
            </footer>
        </div>
        </>
    )
}
