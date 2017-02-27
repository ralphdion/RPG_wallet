var React = require("react");
var reactDom = require("react-dom");

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      text: ""
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
handleClick(event){
  this.setState({counter:this.state.counter+1})
}

handleChange(event){
  const value = event.target.value;
  this.setState({text:value});
}

  render(){
    return(
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>Count</button>
        <hr/>
        <p>Text: {this.state.text}</p>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
      </div>
    )
  }
}
reactDom.render(
  <App/>
  , document.getElementById("content"))
