
import { useReducer } from "react";

const initialState = 0;
const initialState2 = 0;
const reduce= (state, action)=>{
    switch(action.type){
        case 'Increment':
            return (state + action.value);
        case 'Decrement':
            return (state - action.value);
        default: 
        return state;
    }

}
export default function ComplexCounter(){
    const [count, dispatch] = useReducer(reduce, initialState);
    const [count2, dispatch2] = useReducer(reduce, initialState2);

    return(
        <div>
            <div>
            <div>Count - {count}</div>
            <button type="button" onClick={()=>dispatch({type: 'Increment', value: 1})}>Increment</button>
            <button type="button" onClick={()=> dispatch({type:'Decrement', value: 1})}>Decrement</button>
            </div>
            <div>
            <div>Count2 - {count2}</div>
            <button type="button" onClick={()=>dispatch2({type: 'Increment', value: 1})}>Increment</button>
            <button type="button" onClick={()=> dispatch2({type:'Decrement', value: 1})}>Decrement</button>
            </div>
            
        </div>
    );
}