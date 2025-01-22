import logo from './logo.svg';
import './App.css';
import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import UseReducerExample from './UseReducerExample';
import UseMemoExample from './UseMemoExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <UseStateExample/> */}
        {/* <UseEffectExample/> */}
        {/* <UseReducerExample/> */}
        <UseMemoExample/>
      </header>
    </div>
  );
}

export default App;
