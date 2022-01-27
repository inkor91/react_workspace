import {useState} from 'react';

export const EventPractice = () => {
  const [username, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = e => setUserName(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ':' + message);
    setUserName('');
    setMessage('');
  };
  const onKeyPress = e =>{
    if(e.key === 'Enter'){
      onClick();
    }
  }

  return (
  <div>
        <h1 className="text-2xl">이벤트연습2</h1>
    <input className="border-2 border-blue-600"
    type="text"
    name="username"
    placeholder='사용자명'
    value={username}
    onChange={onChangeUsername}
    />
    <input className="border-2 border-blue-600"
    type="text"
    name="message"
    placeholder='아무거나 입력'
    value={message}
    onChange={onChangeMessage}
    onKeyPress={onKeyPress}
    />
    <button style={{width:60}}className="bg-sky-600 hover:bg-sky-700 , rounded-full"  
    onClick={onClick}>확인</button>
  </div>);
};

export default EventPractice;