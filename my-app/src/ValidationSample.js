import React, { Component } from 'react';
import './ValidationSample.css'

export default class ValidationSample extends Component {
  state = {
      password: '',
      clicked: false,
      validated:false
  }

  handleChange = (e) => {
      this.setState({
          password:e.target.value
      });
  }

  handleButtonClick = () => {
      this.setState({
          clicked: true,
          validated: this.state.password === '0000'
      });
      this.input.focus();
  }

    render() {
    return (
    <div>
        <input style={{border:1 ,borderStyle:'solid' , borderColor: 'black'}}
        type="password"
        value={this.state.password}
        onChange={this.handleChange}
        ref={(ref)=>this.input=ref}
        className={this.state.clicked?(this.state.validated?'success':'failure'): ''}
        />
        
        <button style={{border:1 ,borderStyle:'solid' , borderColor: 'gray'}} 
        onClick={this.handleButtonClick}>검증하기</button>

    </div>
    );
  }
}

