import {useReducer} from "react";
import css from './App.module.css'

function App() {
    const init = (initCount) => {
        return {counter1: initCount, counter2: initCount, counter3: initCount}
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'inc1':
                return {...state, counter1: state.counter1 + 1}
            case 'inc2':
                return {...state, counter2: state.counter2 + 1}
            case 'inc3':
                return {...state, counter3: state.counter3 + 1}

            case 'dec1':
                return {...state, counter1: state.counter1 - 1}
            case 'dec2':
                return {...state, counter2: state.counter2 - 1}
            case 'dec3':
                return {...state, counter3: state.counter3 - 1}

            case 'reset1':
                return {...state, counter1: 0}
            case 'reset2':
                return {...state, counter2: 0}
            case 'reset3':
                return {...state, counter3: 0}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, 0, init);
    return (
        <div className={css.wrapper}>
            <div>
                {state.counter1}
                <div>
                    <button onClick={() => dispatch({type: 'inc1'})}>inc</button>
                    <button onClick={() => dispatch({type: 'dec1'})}>dec</button>
                    <button onClick={() => dispatch({type: 'reset1'})}>reset</button>
                </div>
            </div>

            <div>
                {state.counter2}
                <div>
                    <button onClick={() => dispatch({type: 'inc2'})}>inc</button>
                    <button onClick={() => dispatch({type: 'dec2'})}>dec</button>
                    <button onClick={() => dispatch({type: 'reset2'})}>reset</button>
                </div>
            </div>

            <div>
                {state.counter3}
                <div>
                    <button onClick={() => dispatch({type: 'inc3'})}>inc</button>
                    <button onClick={() => dispatch({type: 'dec3'})}>dec</button>
                    <button onClick={() => dispatch({type: 'reset3'})}>reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;

