import React, { Component } from 'react';
import Try from './Try';

function getNumbers(){ // 숫자 네 개를 겹치지 않고 랜뎀하게 뽑는 함수

}

class NumberBaseball extends Component {
    state = {
        result:'',
        value:'',
        answer: getNumbers(), 
        tries: [],
    };

    onSubmitForm = () =>{

    };
    onChangeInput = () =>{

    };


    render(){
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.fruits.map((v,i) => {
                        return(
                            // <Try value={v} index={i}/>
                            <Try v={v} i={i}/>
                            );
                        })}
                </ul>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {['사과','바나나','포도','귤','배', '밤'].map((v)=>{
                        return(
                        <li>{v}</li>
                        );
                    })}

                    {[
                        ['사과','맛있다'],
                        ['바나나','맛있다'],
                        ['포도','시다'],
                        ['귤','맛있다'],
                        ['배','크다'],
                        ['밤','고소하다']
                        ].map((v)=>{
                            return(
                            <li><b>{v[0]}</b> - {v[1]}</li>
                        );
                    })}
                    
                    {[
                        { fruit: '사과', taste: '사과맛'},
                        { fruit:'바나나', taste:'맛있다'},
                        { fruit:'포도',taste:'시다'},
                        { fruit:'귤',taste:'맛있다'},
                        { fruit:'배',taste:'크다'},
                        { fruit:'밤',taste:'고소하다'},
                        ].map((v)=>{
                            return(
                            <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {v.taste}</li>
                        );
                    })}
                    {/* return x */}
                    {[
                        { fruit: '사과', taste: '사과맛'},
                        { fruit:'바나나', taste:'맛있다'},
                        { fruit:'포도',taste:'시다'},
                        { fruit:'귤',taste:'맛있다'},
                        { fruit:'배',taste:'크다'},
                        { fruit:'밤',taste:'고소하다'},
                        ].map((v)=>
                            <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {v.taste}</li>
                    )}

                       {/* i 추가 x */}

                       {[
                        { fruit: '사과', taste: '사과맛'},
                        { fruit:'바나나', taste:'맛있다'},
                        { fruit:'포도',taste:'시다'},
                        { fruit:'귤',taste:'맛있다'},
                        { fruit:'배',taste:'크다'},
                        { fruit:'밤',taste:'고소하다'},
                        ].map((v,i)=>
                            <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {i}</li>
                    )}

                 

                </ul>
            </>
        );
    }
}

//export const hello = 'hello'; // import { hello }
//export const bye = 'hello'; // import { hello, bye }

export default NumberBaseball; // import NumberBaseball;
// module.exports 와는 다르지만 호환이 된다  

// 노드 모듈 시스템 
// const React = require('react);
// exports.hello = 'hello';
// module.exports = NumberBaseball;