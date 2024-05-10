import React from "react";

function Input({ type, placeholder}, ref){
    return  <input ref={ref} type={type} placeholder={placeholder} />
}

// React.forwardRef(Input)

export default React.forwardRef(Input);