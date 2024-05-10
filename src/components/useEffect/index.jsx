import { useEffect, useState } from "react";
// import Reactm {useEffect, useState} from 'react';

function MyComponent(){
const [count, setCount] = useState(0);
const [date, setDate] = useState(new Date());


useEffect(()=>{
    console.log('useEffect called');
    document.title = `Clicked ${count} times`
  /*   const interval = setInterval(tick, 1000); 
    // do the cleanup - stop the timer 
    return ()=>{
        clearInterval(interval);
    } */
}, [count])

useEffect(()=>{
    const interval = setInterval(tick, 1000); 
    // do the cleanup - stop the timer 
    return ()=>{
        clearInterval(interval);
    }
}, [])

const addClick = ()=>{  
    setCount((prev)=>prev + 1)
}

const tick = ()=>{
    setDate(new Date());
}

return(
    <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        <p>
            <button type="button" onClick={addClick}>Click</button>
        </p>
    </div>
)

}

export default MyComponent;