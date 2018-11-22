import React, { Component } from 'react';
import './Navbar.css';

class NavbarDoc extends Component {
  render() {
    return (
        <header>
        <div className="header-menu">
            <div className="header-logo">
                <a href="https://www.docplanner.com/about-us">
                    <img className="logo-docplanner" alt="logo-docplanner" src= {"https://www.docplanner.com/img/logo-default-group-en.svg?v=1"}/>
                </a>
            </div>
            <div className="header-navigationBar">
                <nav className="navigationBar">
                    <ul className="unordred-list1">
                        <li>
                            <a href="https://www.docplanner.com/about-us" className="navigationBar-aboutas">About us</a>
                        </li>
                        <li><a href="https://www.docplanner.com/career" className="navigationBar-career">Career</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
     </header>
    );
  }
}

export default NavbarDoc;