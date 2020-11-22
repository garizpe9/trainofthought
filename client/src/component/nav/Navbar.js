import React, { Component } from 'react';
import { Link, withRouter} from "react-router-dom"
import './Navbar.css'

class NavBar extends Component {
    handleLogout = () => {
        this.props.clearUser();
        this.props.history.push('/');
    }
  render(){

    return (
      <header>
        <h1 className="site-title">Daily Journal<br />
          <small>React 2.0</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            {(this.props.user) ?
            <>
            <li><Link className="nav-link" to="/entries">Journal</Link></li>
            <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
            </>
            : <li><Link className="nav-link" to="/login">Login</Link></li>}
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(NavBar);