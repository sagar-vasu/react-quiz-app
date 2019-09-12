import React from "react";
import {StartQuiz,Quiz} from "../components/";

class Home extends React.Component {
  constructor(){
    super()
    this.state={
        start:false,
    }
  }

//  Getting value true when click on Start Quizz Butto
getValue=(val,time)=>{
    this.setState({
        start:val,
        time:time
    })


}
  render() {
    return (
      <div>
          {
            this.state.start ? <Quiz time={this.props.time} name={this.props.name} img={this.props.img} logout={this.props.logout} />: 
            <StartQuiz click={this.getValue} name={this.props.name} img={this.props.img}  />
          }
       
      </div>
    );
  }
}
export default Home;
