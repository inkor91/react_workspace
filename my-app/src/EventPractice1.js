import React, { Component } from 'react';

export default class EventPractice extends Component {
  
  state = {
    username:'',
    message: ''
  }

  // constructor(props){
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick = () =>{
    alert(this.state.username+ ':' + this.state.message);
    this.setState({
      username:'',
      message:''
    });
  }

  handleKeyPress = (e) =>{
    if(e.key ==='Enter'){
      this.handleClick();
    }
  }
  
  render() {
    return (
    <div>
        <h1 className="text-2xl">이벤트연습</h1>
    <input className="border-2 border-rose-600"
    type="text"
    name="username"
    placeholder='사용자명'
    value={this.state.username}
    onChange={this.handleChange  }
    />
    <input className="border-2 border-rose-600"
    type="text"
    name="message"
    placeholder='아무거나 입력'
    value={this.state.message}
    onChange={this.handleChange
        // (e)=>{
        //     this.setState({
        //       message : e.target.value
        //     })
        // }
      }
      onKeyPress={this.handleKeyPress}
    />
    <button style={{width:60}}className="bg-sky-600 hover:bg-sky-700 , rounded-full"  onClick={this.handleClick
      // ()=>{
      //   alert(this.state.message);
      //   this.setState({
      //     message:''
      //   });
      // }
    }>확인</button>
    </div>
    );
  }
}
