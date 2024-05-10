import { useNavigate } from "react-router-dom";

 const OrderSummary =()=>{
    const navigate = useNavigate();
    return(
        <div>
            <p>Order confirmd</p>
            <button onClick={()=>navigate(-1 )}>Go Back</button>
        </div>
    )
}

export default OrderSummary;