import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {

    // const [checkDarkMode, setCheckDarkMode] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    // const [modeLabel, setModeLabel] = useState('Dark Mode')
    
    // const darkModeToggle = () => {
    //     if(checkDarkMode.color === 'black') {
    //         setCheckDarkMode({
    //             color: 'white',
    //             backgroundColor: 'black',
    //         })
    //         setModeLabel('Light Mode');
    //     } else {
    //         setCheckDarkMode({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setModeLabel('Dark Mode');

    //     }
    // }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'dark'?'dark':'light'} bg-${props.mode === 'dark'?'dark':'light'}`}>
        <div className="container-fluid">
            {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        {/* <Link className="nav-link" aria-current="page" to="/">{props.menuOne}</Link> */}
                        <a className="nav-link" aria-current="page" href="#">{props.menuOne}</a>
                    </li>
                    <li className="nav-item">
                        {/* <Link className="nav-link" to="/about">{props.menuTwo}</Link> */}
                        {/* <a className="nav-link" href="/about">{props.menuTwo}</a> */}
                    </li>
                </ul>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode === 'dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">{props.mode === 'dark'?'Dark':'Light'} Mode</label>
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
