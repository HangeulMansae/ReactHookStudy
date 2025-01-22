import {useRef, useState} from "react"

const UseRefExample = () => {
  /**
   * useRef는 값이 변해도 리렌더링이 되지 않는다.
   * 따라서 렌더링과 상관없는 값인 경우는 state가 아니라 useRef로 선언하여 관리한다
   * 렌더링과 상관이 없다는 말은 클릭 이벤트와 같은, 특정 상황의 경우 발발하는 등 기본적으로 렌더링 되는 것이 아닌 것을 의미한다.
   * 
   * useRef로 선언한 값을 렌더링 범위 내에서 읽으려고 하거나, 쓰는 행위는 옳지 않다.
   */
  const num = useRef(0);

  // dom 조작을 위해 ref를 생성할 경우에는 초기값을 null로 설정한다.
  const dom = useRef(null);

  function doSomething(){
    // 특정 이벤트가 발발했을 때 ref를 넘겨서 사용하는 것은 괜찮다.
    console.log(num)

    num.current += 1
  }

  function focus(){
    // ref객체.current.focus()를 하면 ref객체가 가리키고 있는 DOM에 focus가 간다.
    dom.current.focus();
  }

  return (
    <div>
      {/* num.current = 10 과 같은 ref 값 수정을 렌더링 내에서 하는 것은 올바르지 않다. */}
      {/* num.current와 같은 ref 값 읽는 행위를 렌더링 내에서 하는 것은 올바르지 않다. */}
      {/* 
          조작하고자 하는 DOM의 ref 속성에 useRef로 만들었던 ref객체를 전달한다.
          DOM 노드를 화면에 그린 후 ref 객체의 current를 DOM 노드로 설정한다.
          본 예시에서는 input이 될 것이다.
      */}
      <input ref={dom}/>
      <button onClick={() => focus()}>input element로 focus가 옮겨집니다.</button>
    </div> 
  )
}

export default UseRefExample;