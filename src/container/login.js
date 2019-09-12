import React from "react";
import { FacebookButton,Navbar } from "../components/index";
// import { LoginUser } from "../config/functions";

class Login extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <Navbar value={this.state} />
          <div className="col l4 push-l4 s12 card-panel loginBox">
          <span className="flow-text">Login Now</span> <br /> <br /> 
            <FacebookButton click={this.props.userLogin} />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
