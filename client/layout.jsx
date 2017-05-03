import React from "react"
import {Link} from "react-router-dom"

class Layout extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li>Sign up</li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Layout;
