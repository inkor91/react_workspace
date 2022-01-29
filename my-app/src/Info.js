import useInputs from './useInputs'



export const Info = () => {
  const [state,onChange] = useInputs({
    name:'',
    nickname:''
  });

  const {name, nickname} = state;


  // const [name, setName] = useState('');
  // const [nickname, setNickname] = useState('');

  // const onChangeName = e =>{
  //   setName(e.target.value);
  // };

  // const onChangeNickname = e => {
  //     setNickname(e.target.value);
  // }

  // useEffect(() =>{
  //     console.log('effect');
  //     return()=>{
  //       console.log('unmount');
  //     };
  // }, []);


    return (
  <div>
      <div>
          <input style={{border:1,borderStyle:'solid',borderColor:'black'}}
          name="name" value={name} onChange={onChange}/>
          <input style={{border:1,borderStyle:'solid',borderColor:'black'}}
          name="nickname" value={nickname} onChange={onChange}/>
      </div>
      <div>
          <div>
              <b>이름:</b>{name}
          </div>
          <div>
              <b>닉네임:</b>{nickname}
          </div>
      </div>

  </div>
  );
};
