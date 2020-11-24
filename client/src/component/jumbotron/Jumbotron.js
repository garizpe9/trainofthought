import React from 'react'
import { Link, withRouter} from "react-router-dom"
import '../jumbotron/Jumbotron.css'

class Jumbotron extends React.Component {
  render(){
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>Train of Thought</h1>      
          <p></p>
        </div>
      </div>
    )
  }
}

export default withRouter(Jumbotron);