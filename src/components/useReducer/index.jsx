
import { useReducer } from "react";

const initialState = 0;
const reduce= (state, action)=>{
    switch(action.type){
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
        default: 
        return state;
    }

}
export default function Counter(){
    const [count, dispatch] = useReducer(reduce, initialState);

    return(
        <div>
            <div>Count - {count}</div>
            <button type="button" onClick={()=>dispatch({type: 'Increment'})}>Increment</button>
            <button type="button" onClick={()=> dispatch({type:'Decrement'})}>Decrement</button>
        </div>
    );
}