
import { useReducer } from "react";

const initialState = {
    counter: 0,
    counter2:0
};
const reduce= (state, action)=>{
    switch(action.type){
        case 'Increment':
            return {...state, counter: state.counter + action.value};
        case 'Decrement':
            return {...state, counter: state.counter - action.value};
        case 'Increment2':
            return {...state, counter2: state.counter2 + action.value};
        case 'Decrement2':
            return {...state, counter2: state.counter2 - action.value};
        default: 
        return state;
    }

}
export default function CounterThree(){
    const [count, dispatch] = useReducer(reduce, initialState);

    return(
        <div>
            <div>
            <div>Count - {count.counter}</div>
            <button type="button" onClick={()=>dispatch({type: 'Increment', value: 1})}>Increment by 1</button>
            <button type="button" onClick={()=> dispatch({type:'Decrement', value: 1})}>Decrement by 1</button>
            </div>
            <div>
            <div>Count - {count.counter2}</div>
            <button type="button" onClick={()=>dispatch({type: 'Increment2', value: 1})}>Increment2 by 1</button>
            <button type="button" onClick={()=> dispatch({type:'Decrement2', value: 1})}>Decrement2 by 1</button>
            </div>
            
        </div>
    );
}