import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button className="btn" onClick={()=>this.props.click()}  disabled={this.props.disabled}>
        {this.props.value}
      </button>
    );
  }
}

class FacebookButton extends React.Component {
  render() {
    return (
      <button className="fbbtn" onClick={()=>this.props.click()}>
        Login With Facebook 
      </button>
    );
  }
}



export { FacebookButton, Button };
