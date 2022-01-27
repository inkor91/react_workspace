import {useState} from 'react';

const EventPractice = () => {
  const[form, setForm] = useState({
    username:'',
    message:''
  });
  const {username, message} = form;
  const onChange = e => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사 한뒤 
      [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ':' + message);
    setForm({
      username:'',
      message:''
    });
  };

  const onKeyPress = e =>{
    if(e.key === 'Enter'){
      onClick();
    }
  }

  return (
  <div>
        <h1 className="text-2xl">이벤트연습3</h1>
    <input className="border-2 border-blue-600"
    type="text"
    name="username"
    placeholder='사용자명'
    value={username}
    onChange={onChange}
    />
    <input className="border-2 border-blue-600"
    type="text"
    name="message"
    placeholder='아무거나 입력'
    value={message}
    onChange={onChange}
    onKeyPress={onKeyPress}
    />
    <button style={{width:60}}className="bg-sky-600 hover:bg-sky-700 , rounded-full"  
    onClick={onClick}>확인</button>
  </div>);
};

export default EventPractice;