import {useReducer} from "react";

function App() {
  const init = (initCount) => {
    return {count: initCount}
  }

  const reducer = (state, action) => {
    switch (action.type){
      case 'inc':
        return {...state, count: state.count+1}
      case 'dec':
        return {...state, count: state.count-1}
      case 'reset':
        return {...state, count: 0}
      case 'set':
        return {...state, count: action.payload}
    }
  }

  const [state, dispatch] = useReducer(reducer, 0, init);

  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({type: 'inc'})}>inc</button>
      <button onClick={() => dispatch({type: 'dec'})}>dec</button>
      <button onClick={() => dispatch({type: 'reset'})}>reset</button>
      <button onClick={() => dispatch({type: 'set', payload: 10})}>set</button>
    </div>
  );
}

export default App;
