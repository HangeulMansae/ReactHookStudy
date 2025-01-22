import {useState, useEffect, useReducer} from "react"

function createInitialState(username) {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push(
      username + (i + 1)
    );
  }
  return initialTodos;
}

const UseMemoExample = () => {
  /**
   * useReducer는 state가 어떻게 업데이트 되어야 할 지 정의가 되어 있는지를 정의한 Reducer 함수와, 초기 state 값을 인자로 받아서,
   * 현재 state와 state를 새로운 값으로 업데이트 시키는 함수를 반환한다.
   * 이 때 업데이트 시키는 함수에는 오직 한 개의 인자만이 들어올 수 있다.
   * 
   * 다만 useReducer의 인자로 3개를 받는 경우가 있다.
   * Reducer 함수, 초기 값, 초기화 함수 이렇게 3가지를 받을 수도 있다.
   * 이렇게 3가지를 받는 방법이 있는 이유는, 초기화 방법의 차이에 있다.
   * 
   * React는 매 렌더링시마다 초기 값의 결과를 제공하기 때문이다. 
   * 초기 렌더링시에만 사용하지만, 이 값을 단순히 초기화에 사용될 값으로만 이해하고,
   * 초기 렌더링 시에만 평가해야 한다라고 자동으로 인식하지 않기 때문에,
   * 매 렌더링 시마다 두번 째 인자로 제공된 것을 함수 호출 시점에 즉 렌더링 시마다 평가한다.
   * 그래서 만약 함수의 결과 값을 2번째 인자로 넘겨주게 된다면
   * 매 렌더링 시마다 함수가 호출되어 불필요한 낭비가 발생하는데,
   * 이를 3번째 인자로 건네준다면, 초기 렌더링 시에만 호출되어 불필요한 낭비를 막을 수 있다.
   * 
   * 
   * Reducer 함수는 반드시 현재 state, 업데이트 함수에 들어온 인자를 요구하는 함수로 작성해야 하며, 최종적으로 변경시킬 값을 return 하는 식이여야 한다.
   * 
   * 본 코드는 UseStateExample에서 useState 대신 useReducer를 이용하여 작성한 것이다.
   * 
   * useState의 코드를 useReducer로, 그리고 그 반대로도 가능하다.
   * 
   * 다만 state를 여러 곳에서 변경을 하게될 경우 각 이벤트마다 임의로 변경을 하게 되므로 
   * state가 어떻게 변하는지 파악을 하기 위해선 state를 건드리는 모든 이벤트를 참고해야 하므로, 해당 state의 관리가 어려워진다.
   * 
   * useReducer로 작성을 한다면, 변경 관련 내용을 reducer에 모두 작성한 후, 각 이벤트에서는 업데이트 함수를 호출하기만 하면 되므로,
   * state의 관리가 편해지는 점이 있다.
   * 
   * 다만 useReducer를 사용하기 위해서는 reducer와 같은 함수가 미리 작성되어야 한다는 점에서 
   * state 관리가 그렇게 복잡하지 않다면 useState를 쓰는 것이 오히려 좋을 수 있다.
   * 
   */

  
  

  const reducer = (state, action) => {
    switch(action){
      case 'Increase':
        return state+1
      case 'Decrease':
        return state-1
      default:
        return 0
    }
  }



  const [num, dispatch] = useReducer(reducer, 0)
  // 이런 식으로 하면 매 렌더링시마다 createInitalState가 호출되어 쓸데없이 낭비됨 (useReducer의 초기값 reducer는 그냥 추가 함수 만들기 귀찮아서 넣은 것)
  // const [optimizer, opt] = useReducer(reducer, createInitialState("a"))
  // 이런 식으로 함수만 건네준다면, useReducer의 3번째 함수의 인자로 useReducer의 2번째 인자가 들어가고, 초기화된 값이 optimizer로 들어간다.
  // 또한 리렌더링 되더라도 createInitalState는 호출되지 않는다.
  const [optimizer, opt] = useReducer(reducer, "a", createInitialState)
  return (
    <div>
      <p>현재 num 값은 {num}</p>
      <button onClick={() => dispatch('Increase')}>숫자 1 증가</button>
      <button onClick={() => dispatch('Decrease')}>숫자 1 감소</button>
    </div>
    
  )
  
}

export default UseMemoExample;