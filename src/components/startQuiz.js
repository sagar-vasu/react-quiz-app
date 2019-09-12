import React from "react";
import Navbar from "./navbar";
import { Button } from "./buttons";
import { timer } from "../config/functions";

export default class StartQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      testTime: 200
    };
    
  }


  click = () => {

  
    this.props.click(true);
  }
  
     

  render() {
    console.log(this.state.testTime)
    return (
      <div>
        <div className="row">
          <Navbar name={this.props.name} img={this.props.img} time={this.state.testTime} />
          <div className="col l4 push-l4 s12 card-panel loginBox">
            <span className="flow-text">Quiz Detail</span> <br /> <br />
            <span className="-text">Total Questions : 10</span> <br />
            <br />
            <span className="-text">Passing Score : 70%</span> <br />
            <br />
            <Button value="Start Quiz" click={this.click} />
          </div>
        </div>
      </div>
    );
  }
}
