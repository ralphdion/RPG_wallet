var React = require("react");
var reactDom = require("react-dom");
import {Route, IndexRoute, BrowserRouter as Router} from "react-router-dom"
import Layout from "./layout.jsx"

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      //Router JSX comes here
      <Router>
        <Route path="/" component={Layout} />
      </Router>
    )
  }
}
reactDom.render(
  <App/>
  , document.getElementById("content"))
