import React, { useState } from 'react';

const Counter = () => {
  const [ value, setValue ] = useState(0); // useState의 초기값으로 0을 설정함, 배열[상태 값, 상태를 설정하는 함수] 반환

  return (
    <div>
      <p>
        현재 값: <b>{ value }</b>
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;