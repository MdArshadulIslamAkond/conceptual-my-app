import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>This is the home page</h1>
            <button onClick={()=>navigate('order-summary', {replace:true})}>Place Order</button>
        </div>
    )
}