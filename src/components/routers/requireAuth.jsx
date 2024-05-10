import { UseAuth } from "./auth";
import { Navigate ,useLocation} from "react-router-dom";


const RequireAuth = ({children})=>{
    const auth = UseAuth();
    const location = useLocation(); 
    // const navigate = useNavigate();
    // console.log(location.pathname)

    if(!auth.user){
        return <Navigate to="/login" state={{path:location.pathname}} />;
    }
    return children ;
}

export default RequireAuth;