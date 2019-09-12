import React from "react";
import Navbar from "./navbar";
import { Button } from "./buttons";

export default class Result extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <Navbar  name={<Button value='Logout' click={()=>this.props.logout(false)} />} />
          <div className="col l4 push-l4 s12 card-panel loginBox">
            <span className="flow-text">Quiz Result</span> <br /> <br />
            <span className="-text">Total Questions : 10</span> <br />
            {
              this.props.marks >10 ?
            <span className="-text">Congrats! you are passed in test</span>
            :
            <span className="-text">Sorry! you are failed in test</span>

            }
            <br />
            <span className="-text">Your Score : {this.props.marks}% </span> <br />
            <br />
            <Button value="Retake Quiz" click={()=>this.props.retake(false,true)} />
          </div>
        </div>
      </div>
    );
  }
}
