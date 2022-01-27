import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 떄 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 {fixedNumber}</h2>
        <button
          style={{ border: 1, borderStyle: "solid", color: "black" }}
          //onClick을 통해 버튼이 클릭되었을 떄 호출할 함수 지정
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다
            // this.setState(prevState =>{
            //     return{
            //         number:prevState.number+1
            //     };
            // });
            // 위코드와 아래코드는 똑같은 기능
            // 아래 코드는 함수에서 바로 객체를 반환한다는 의미 

            // this.setState(prevState => ({
            //     number:prevState.number+1
            // }));
            this.setState(
            {
                number: number+1
            },    
            ()=>{
                console.log('setState 호출');
                console.log(this.state);
                }
            );
          }}>
          +1
        </button>
      </div>
    );
  }
}
