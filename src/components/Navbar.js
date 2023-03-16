import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

    const [checkDarkMode, setCheckDarkMode] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const [modeLabel, setModeLabel] = useState('Dark Mode')
    
    const darkModeToggle = () => {
        if(checkDarkMode.color === 'black') {
            setCheckDarkMode({
                color: 'white',
                backgroundColor: 'black',
            })
            setModeLabel('Light Mode');
        } else {
            setCheckDarkMode({
                color: 'black',
                backgroundColor: 'white'
            })
            setModeLabel('Dark Mode');

        }
    }

  return (
    <nav className="navbar navbar-expand-lg" style={checkDarkMode}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/" style={checkDarkMode}>{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={checkDarkMode}>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/" style={checkDarkMode}>{props.menuOne}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={checkDarkMode}>{props.menuTwo}</a>
                    </li>
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form> */}
                {/* <button type='button' className='btn btn-primary'>Dark Mode</button> */}
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={darkModeToggle} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={checkDarkMode}>{modeLabel}</label>
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    menuOne: PropTypes.string.isRequired,
    menuTwo: PropTypes.string
}

Navbar.defaultProps = {
    title: "Default Title",
    menuOne: "Menu 1",
    menuTwo: "Menu 2"
}
