import { useEffect, useState,useRef } from "react";

function Time(){

    const [date, setDate] = useState(new Date());
    const buttoneRef = useRef();


    useEffect(()=>{
        buttoneRef.current = setInterval(tick, 1000); 
        // do the cleanup - stop the timer 
        return ()=>{
            clearInterval(buttoneRef.current);
        };
    }, []);

    const tick = ()=>{
        setDate(new Date());
    };

    return(
        <div>
            <p> Time:{date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={()=> clearInterval(buttoneRef.current)}>Cleanup</button>
            </p>
        </div>
    )

}

export default Time;