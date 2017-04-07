import React from "react"

class Layout extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <nav>
          <ul>
            <li>Login</li>
            <li>Sign up</li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Layout;
