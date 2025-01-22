import {useState} from "react"

const UseStateExample = () => {
  /**
   * 초기 값을 0으로 가지는, 상태 생성
   * useState(초기값)을 호출하면, 초기값이 있는 상태와, 상태를 변경하는 함수를 return한다
   * 즉 값은 num으로 들어가고 setNum은 이러한 num 값을 바꿀 때 사용하는 함수이다.
   */
  const [num, setNum] = useState(0);
  return (
    <div>
      <p>현재 num 값은 {num}</p>
      <button onClick={() => setNum(before => before + 1)}>숫자 1 증가</button>
      <button onClick={() => setNum(before => before - 1)}>숫자 1 감소</button>
    </div>
    
  )
  
}

export default UseStateExample;