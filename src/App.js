import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import About from './components/About';
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if(mode==='light') {
      document.title = "TextUtils - Dark Mode";
      document.body.style.backgroundColor = '#3B3B3B'
      setMode('dark');
      showAlert('Dark mode enabled', 'success');
      // setTimeout(() => {
      //   document.title = "TextUtils - Text Editor";
      // }, 2500);
    } else {
      document.title = "TextUtils - Light Mode";
      document.body.style.backgroundColor = 'white'
      setMode('light');
      showAlert('Light mode enabled', 'success');
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" menuOne="Home" menuTwo="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container mb-5 pb-5">
        <Alerts alert={alert}/>
        <TextForm heading="Enter your text here to get desired output" showAlert={showAlert} mode={mode}/>
        {/* <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextForm heading="Enter your text here to get desired output" showAlert={showAlert} mode={mode}/>} />
        </Routes> */}
        {/* <About mode={mode}/> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
