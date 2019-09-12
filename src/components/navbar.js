import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul className="topnav">
          <li className="right">
            {this.props.name}  &nbsp;         
          <img src={this.props.img} width='30px'  style={{ verticalAlign: "middle" }}/>
          </li>
          <li >
            <span style={{float:"left",marginTop:'13px'}}> Quizz App</span>
          </li>

        </ul>
      </div>
    );
  }
}