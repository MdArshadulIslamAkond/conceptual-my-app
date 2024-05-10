import { UseAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const Profile =()=>{
    const auth = UseAuth();
    const navigate = useNavigate();
    const handleLogout = ()=>{
        auth.logout();
        navigate('/');
    }
    return(
        <div>
            <div>
                Welcome {auth.user}
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>

    )
}

export default Profile;