import {useState, useEffect} from "react"

const UseEffectExample = () => {
  /**
   * useEffect는 렌더링 등 조건이 맞았을 때 실행할 함수와, 의존성 배열을 인자로 받는다.
   * 그리고 의존성 배열의 존재 유무와, 값에 따라 조금씩 실행 조건이 달라지게된다.
   * 
   * 첫번째로 만약 의존성 배열을 아예 설정하지 않았다면, 모든 렌더링과 리렌더링 과정마다 실행된다.
   * 두번째로 만약 빈 의존성 배열을 넣었다면, 맨 최초에 렌더링 될 때 1회만 실행된다.
   * 세번째로 만약 의존성 배열을 넣었다면, 최초 렌더링 될 때와 해당 의존성이 변경되어 리렌더링이 동작할 때 실행된다.
   * 세번째에서 중요한 것은 단순히 리렌더링이 되면 동작하는 것이 아니라 의존성으로 넣었던 것이 변경되어 리렌더링이 동작할 때 작동하는 것이다.
   */
  const [message, setMessage] = useState('초기 메세지입니다.');
  const [junk, setJunk] = useState('필요없는 상태입니다.');

  useEffect(() => {console.log("의존성 배열 자체를 전달하지 않았습니다.")});
  useEffect(() => {console.log("빈 의존성 배열을 전달했습니다.")}, []);
  useEffect(() => {console.log("의존성 배열을 전달했습니다")}, [message]);
  
  return (
    <div>
      <p>{message}</p>
      <p>{junk}</p>
      <div>
        <button onClick={() => {setMessage("메세지를 변경했습니다!")}}>useEffect의 의존 배열로 설정한 메세지를 변경하는 버튼입니다.</button>
        <button onClick={() => {setJunk("필요 없는 상태를 변경했습니다!")}}>의존성으로 넣어주지 않은 상태를 변경하는 버튼입니다.</button>
      </div>
    </div> 
  )
}

export default UseEffectExample;