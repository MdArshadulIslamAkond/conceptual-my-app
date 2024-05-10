import { useState } from "react";
import { UseAuth } from "./auth";
import { useNavigate, useLocation } from "react-router-dom";

const Login = ()=>{
    const [user, setUser]= useState('')
    const auth = UseAuth();
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location.state)
    const redirectPath = location.state?.path || '/';

    const handleLogin =()=>{
        auth.login(user);
        navigate(redirectPath, {replace: true});
    }
    return(
        <div>
           <label>
            UserName:{''}
            <input type='text' value={user} onChange={e=>setUser(e.target.value)}/>
           </label>
           <button type="" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;