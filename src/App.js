import React from 'react';
import './App.css';
import { LoginUser, authFunc,logout } from './config/functions';
import Home from './container/home'
import Login from './container/login'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      userName :'',
      userImg :'',
      login:false
    }
  }

  async componentDidMount(){
    let check= await authFunc()
    console.log(check)
    this.setState({
      userName :check.name,
      userImg :check.photo,
      login:true
    })
    
  }
// Login Function

  LoginWithFacebook =async()=>{
    try{
    
      let user= await LoginUser()
      this.setState({
        userName :user.name,
        userImg :user.photo,
        login:true
      })
    }
    catch(err){
      console.log(err)
    }
  }


  logout=async(value)=>{
      try{
        let user = await logout()
        console.log(user)
        this.setState({
          login:value
        })
      
      }
      catch(err){
        console.log('err',err)
      }
  }

  render(){
    return(
      <div>
        {
          this.state.login ? <Home name={this.state.userName} img={this.state.userImg} logout={this.logout} /> : <Login userLogin={this.LoginWithFacebook} />
        }

     
      
      </div>
    )
  }
}
export default App;
