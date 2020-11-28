import React from 'react'
import { withRouter} from "react-router-dom"
import '../nav/Navbar.css'

class NavBar extends React.Component {
  render(){

    return (
      //<!-- Icon Bar (Sidebar - hidden on small screens) -->
      <div className="container navbar">
        <nav className="sidebar bigNav">
          <button type="button" className="btn btn-link">
              <i className="fas fa-home"></i>            
              <h4>HOME</h4>
            </button>
            <button type="button" className="btn btn-link">
              <i className="fas fa-history"></i>
              <h4>RECENT ENTRIES</h4>
            </button>
            <button type="button" className="btn btn-link">
              <i className="fas fa-book"></i>            
              <h4>NOTEBOOKS</h4>
            </button>
            <button type="button" className="btn btn-link">
              <i className="far fa-question-circle"></i>            
              <h4>ABOUT</h4>
            </button>
      </nav>
  
      <div className="w3-top smallNav w3-hide-medium" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <button href="#" className="w3-bar-item w3-button">HOME</button>
          <button href="#photos" className="w3-bar-item w3-button">ENTRIES</button>
          <button href="#contact" className="w3-bar-item w3-button">NOTEBOOKS</button>
          <button href="#about" className="w3-bar-item w3-button">ABOUT</button>
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(NavBar);