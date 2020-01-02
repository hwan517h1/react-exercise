import React, { useState, useEffect } from 'react';


const Info = () => {
  const [ name, setName ] = useState('');
  const [ nickname, setNickname ] = useState('');
  // useEffect(() => {
  //   console.log("렌더링 시"); // 렌더링 시마다(클래스형 컴포넌트의 componentDidMount + componentDidUpdate)
  //   console.log({ name, nickname });
  // });
  // useEffect(() => {
  //   console.log("마운트 시");
  // }, []); // 마운트 시만
  useEffect(() => {
    console.log("특정 값 업데이트 시");
    console.log({ name });
    return () => {
      console.log("Cleanup before unmount or update");
    };
  }, [ name ]); // 업데이트 시만(useState를 통해 관리하는 상태나 props로 받은 값을 넣을 수 있음)

  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={ name } onChange={ onChangeName } />
        <input value={ nickname } onChange={ onChangeNickname } />
      </div>
      <div>
        <div>
          <b>이름: </b>{ name }
        </div>
        <div>
          <b>별명: </b>{ nickname }
        </div>
      </div>
    </div>
  );
}

export default Info;