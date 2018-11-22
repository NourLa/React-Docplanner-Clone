import React, { Component } from 'react';
import './App.css';
// import './MediaQuery.css'
import NavbarDoc from './Components/Navbar/Navbar.js';
import Component1 from './Components/Component1/Component1.js';
import Component2 from './Components/Component2/Component2.js';
import Component3 from './Components/Component3/Component3.js';
import Component4 from './Components/Component4/Component4.js';
import Component5 from './Components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
<NavbarDoc/>
<Component1/>
<Component2/> 
<Component3/> 
<Component4/> 
<Component5/> 
      </div>
    );
  }
}

export default App;
