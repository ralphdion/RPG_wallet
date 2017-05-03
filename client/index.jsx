var React = require("react");
var reactDom = require("react-dom");
import {Route, IndexRoute, BrowserRouter as Router} from "react-router-dom"
import Layout from "./layout.jsx"
import Dashboard from "./route_components/dashboard.jsx"
import Login from "./route_components/login.jsx"

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      //Router JSX comes here
      <Router>
        <Route render={(props)=>{
          return(
              <Layout history={props.history}>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/login" component={Login}/>
              </Layout>
          )
        }} />
      </Router>
    )
  }
}
reactDom.render(
  <App/>
  , document.getElementById("content"))
