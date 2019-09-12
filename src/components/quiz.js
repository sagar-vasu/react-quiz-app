import React from "react";
import Navbar from "./navbar";
import { Button } from "./buttons";
import Input from "./input";
import { fetchApi, checkQuestions, timer } from "../config/functions";
import Result from "./result";

export default class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      allQuestions: "",
      allAns: "",
      selectedAns: "",
      checked: [false, false, false, false],
      marks: 0,
      disabled: true,
      result: false,
      retake: false,
      testTime:600,
      seequestion : [false,false,false,false,false,false,false,false,false,false]
    };
  }
  // When Component render get all questions from fetchapi Function
  async componentDidMount() {
    try {
      let { count } = this.state;
      let getData = await fetchApi();
      let quiz = getData.results;
        if(!this.state.retake){
            quiz[count].incorrect_answers.push(quiz[count].correct_answer)
        }
     
      let i = quiz[count].incorrect_answers.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = quiz[count].incorrect_answers[i];
        quiz[count].incorrect_answers[i] = quiz[count].incorrect_answers[j];
        quiz[count].incorrect_answers[j] = temp;
      }
      console.log("then", quiz[count].incorrect_answers);
      quiz[count][count] = true
      console.log(quiz);
      this.setState({
        allQuestions: quiz,
        allAns: quiz[count].incorrect_answers,
        seequestion : quiz[count][count]
      });
    } catch (err) {
      console.log("err in api", err);
    }


    setInterval(async () => {
        try {
            let time = await timer(this.state.testTime)
            if (time === '0:00') {
                this.setState({
                    result: true,
                })
            }
            else {
              let{testTime}=this.state
                this.setState({
                  testTime:testTime-1,
                })
              }
            }
        catch (eror) {
          console.log(eror)
        }
        
      }, 1000)
  }

  // Next Question

  next = async () => {
    let { count, allQuestions, selectedAns } = this.state;
    try {
      let getData = await checkQuestions(count);
      if (getData === allQuestions.length) {
        // alert('sorry')
        this.setState({
          result: true,
          checked: [false, false, false, false]
        });
      } else {
          if (!this.state.retake){
        allQuestions[getData].incorrect_answers.push(
          allQuestions[getData].correct_answer
        
        )
          };
        let i = allQuestions[getData].incorrect_answers.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = allQuestions[getData].incorrect_answers[i];
          allQuestions[getData].incorrect_answers[i] =
            allQuestions[getData].incorrect_answers[j];
          allQuestions[getData].incorrect_answers[j] = temp;
        } 
        this.setState({
          allAns: allQuestions[getData].incorrect_answers,
          disabled: true,
          count: getData,
          checked: [false, false, false, false],
        });
      }
    } catch (err) {
      console.log(err);
    }

    // Checking Answer
    if (selectedAns === allQuestions[count].correct_answer) {
      let { marks } = this.state;
      this.setState({
        marks: marks + 10
      });
    }
  };

  // Checking Ans
  checkAns = (i, val) => {
    console.log(i, val);
    let { checked } = this.state;
    var flag = false;
    for (var key in checked) {
      if (checked[key] === true) {
        checked[key] = false;
        flag = true;
      }
    }
    if (flag === true) {
      checked[i] = true;
    }
    checked[i] = true;

    this.setState({
      disabled: false,
      selectedAns: val,
      checked
    });
  };

  // Retake Quizz

  retake = (value, val) => {
    this.setState({
      result: value,
      count: 0,
      testTime:20,
      retake:val,
    });
  };

  render() {
      console.log(this.props.time)
    let { allAns, allQuestions, count, disabled, } = this.state;
    return (
      <div>
        {this.state.result ? (
          <Result
            marks={this.state.marks}
            logout={this.props.logout}
            retake={this.retake}
          />
        ) : (
          <div>
            <Navbar name={this.props.name} img={this.props.img} />
            {allQuestions && (
              <div className="row">
                <div className="col l6 push-l3 s12 card-panel loginBox">
                  {
                    <div>
                      <span style={{ float: "right" }}>
                        Time : {this.state.testTime}
                      </span>{" "}
                      <br />
                      <h5>{allQuestions[count].question}</h5> <br />
                    </div>
                  }
                  {allAns &&
                    allAns.map((value, index) => {
                      return (
                        <Input
                          key={index}
                          value={value}
                          onChange={() => this.checkAns(index, value)}
                          checked={this.state.checked[index]}
                        />
                      );
                    })}

                  <Button
                    disabled={disabled}
                    value="Next Question"
                    click={this.next}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
