import React from 'react'
import { Link, withRouter} from "react-router-dom"
import '../nav/NavBar.css'

class NavBar extends React.Component {
  render(){

    return (
      //<!-- Icon Bar (Sidebar - hidden on small screens) -->
      <div className="container navbar">
        <nav className="sidebar bigNav">
          <button type="button" className="btn btn-link">
              <i className="fas fa-home"></i>            
              <p>HOME</p>
            </button>
            <button type="button" className="btn btn-link">
              <i className="fas fa-history"></i>
              <p>RECENT ENTRIES</p>
            </button>
            <button type="button" className="btn btn-link">
              <i className="fas fa-book"></i>            
              <p>NOTEBOOKS</p>
            </button>
            <button type="button" className="btn btn-link">
              <i className="far fa-question-circle"></i>            
              <p>ABOUT</p>
            </button>
      </nav>
  
      <div class="w3-top smallNav w3-hide-medium" id="myNavbar">
        <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <a href="#" class="w3-bar-item w3-button">HOME</a>
          <a href="#photos" class="w3-bar-item w3-button">ENTRIES</a>
          <a href="#contact" class="w3-bar-item w3-button">NOTEBOOKS</a>
          <a href="#about" class="w3-bar-item w3-button">ABOUT</a>
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(NavBar);