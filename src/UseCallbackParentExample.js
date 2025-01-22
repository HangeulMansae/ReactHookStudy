import {useState, useCallback} from "react"
import UseCallbackChildExample from "./UseCallbackChildExample";

const UseCallbackParentExample = () => {
  /**
   * useCallback는 함수를 캐싱할 수 있게 해주는 Hook이다
   * 계산하는 것도 아닌데 함수 만드는 것을 캐싱해서 어디다 쓰냐고 생각할 수 있지만 이는 자식 컴포넌트의 불필요한 리렌더링을 줄이는데 도움을 준다.
   * 
   * 만약 useCallback를 쓰지 않고서, 부모 컴포넌트의 함수를 자식 컴포넌트의 props로 주었을 때,
   * 부모 컴포넌트에서 리렌더링이 일어날 경우, 자식 컴포넌트도 리렌더링이 되게 된다.
   * 만약 자식 컴포넌트는 props 등 변경점이 없을 경우 불필요한 리렌더링을 막기 위해서 React.memo()를 사용하지만,
   * 부모 컴포넌트에서 리렌더링 될 때 함수 또한 다른 공간에서 새로 할당되어, props의 값이 바뀐 취급이 되어, React.memo를 사용하더라도
   * 자식 컴포넌트 또한 리렌더링이 일어나게 된다.
   * 
   * 이런 문제를 막고 최적화 하기 위해서 useCallback을 통해 함수를 캐싱하고, 불필요한 리렌더링을 막을 수 있다.
   */
  // dependency랑 관련이 없는 dummy State로, useCallback의 함수가 input으로 인해 리렌더링이 일어나더라도 재생성되지 않는 것을 확인하기 위함
  const [input, setInput] = useState('');

  // useCallback 설명을 위한 의존성으로 등록할 state
  const [dependency, setDependency] = useState(0);

  // dependency 라는 의존성이 바뀌기 전까지는 cacheFunction을 새로 만들지 않고 기존에 있는 것을 이용한다.
  const cacheFunction = useCallback(() => {
    console.log("자식이 갱신됩니다! dependency는 " + dependency + "입니다")
  }, [dependency])

  function noneCacheFunction() {
    console.log("자식이 갱신됩니다! dependency는 " + dependency + "입니다")
  }

  return (
    <div>
      <input value={input} onChange={(e) => {setInput(e.target.value)}}/>
      <div>
        <p>
          dependency를 호출한 횟수 : {dependency}
        </p>
        <button onClick={() => setDependency(num => num+1)}>이걸 누르면 dependency가 수정되어 자식 컴포넌트가 갱신됩니다.</button>
        {/*
          자식 컴포넌트의 props로 dependency를 의존하는 함수를 넘겨주었다.
          input은 관련 없기에 input으로 인한 리렌더링 시에는 재호출되지 않지만,
          dependency로 인한 변경 시에는 자식 컴포넌트 또한 리렌더링 될 것이다.
         */}
        <UseCallbackChildExample onEvent={cacheFunction}/>
      </div>
    </div>
  )
}

export default UseCallbackParentExample;