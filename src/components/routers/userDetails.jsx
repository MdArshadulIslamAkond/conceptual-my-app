 import { useParams } from "react-router-dom";
 
 
 const UserDetails = ()=>{
    const {category} = useParams();
    // const category = params.category;
    // console.log(params);
    return(
        <div> Details about user {category}</div>
    )
}
export default UserDetails;