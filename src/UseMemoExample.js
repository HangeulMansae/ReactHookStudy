import {useState, useMemo} from "react"

function retNumList(){
  console.log("NumList 갱신이 시작됩니다.")
  const list = [];
  for(let i = 0; i < 10000; i++){
    list.push({
      id: i,
      value: i
    });
  }
  return list;
}


// const UseMemoExample = () => {
//   /**
//    * useMemo는 계산 결과를 캐싱할 수 있게 해주는 Hook이다
//    * 만약 이를 쓰지 않는다면 재렌더링시마다 똑같음에도 함수 호출이 반복되어 불필요한 연산이 발생할 수 있다.
//    * 이를 의존성을 등록하여, 의존성이 바뀌었을 때만 호출하도록 하여 최적화를 할 수 있다.
//    */

//   const list = retNumList();
//   const [input, setInput] = useState('');

//   return (
//     <div>
//       <input value={input} onChange={(e) => {setInput(e.target.value)}}/>
//       <ul>
//         {list.map(element => {
//           return (
//           <li key={element.id}>
//             {element.value}
//           </li>
//           )
//         })}
//       </ul>
//     </div>
    
//   )
  
// }

const UseMemoExample = () => {
  /**
   * useMemo는 계산 결과를 캐싱할 수 있게 해주는 Hook이다
   * 만약 이를 쓰지 않는다면 재렌더링시마다 똑같음에도 함수 호출이 반복되어 불필요한 연산이 발생할 수 있다.
   * 이를 의존성을 등록하여, 의존성이 바뀌었을 때만 호출하도록 하여 최적화를 할 수 있다.
   */
  const [input, setInput] = useState('');

  // retNumList와 관련은 없지만 useMemo 설명을 위한 의존성으로 등록할 state
  const [dependency, setDependency] = useState(0);

  // useMemo의 두 번째 인자로 의존성으로 넣어준 배열 내의 값들이 바뀌면 첫 번째 인자로 넣어준 함수가 실행된다.
  // 예시를 위해서 관련은 없지만 dependency를 의존성으로 등록했고, 이것이 바뀔 때마다 retNumList가 재실행되어 list가 갱신된다.
  const list = useMemo(() => retNumList(),[dependency]);
  
  

  return (
    <div>
      <input value={input} onChange={(e) => {setInput(e.target.value)}}/>
      <div>
        <p>
          dependency를 호출한 횟수 : {dependency}
        </p>
        <button onClick={() => setDependency(num => num+1)}>이걸 누르면 memo의 dependency가 수정되어 list가 재계산됩니다.</button>
      </div>
      <ul>
        {list.map(element => {
          return (
          <li key={element.id}>
            {element.value}
          </li>
          )
        })}
      </ul>
    </div>
    
  )
  
}

export default UseMemoExample;