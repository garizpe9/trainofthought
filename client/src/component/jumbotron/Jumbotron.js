import React from 'react'
import { withRouter } from "react-router-dom"
import '../jumbotron/Jumbotron.css'

class Jumbotron extends React.Component {
  render(){
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>Train of Thought</h1>      
          <p>Welcome {}!</p>
        </div>
      </div>
    )
  }
}

export default withRouter(Jumbotron);