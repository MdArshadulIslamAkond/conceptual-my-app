import { Outlet } from "react-router-dom";

export default function Services({number}){
    return(
        <div>
            <h1>This is the Services page-{number}</h1>
            <Outlet />
        </div>
    )
}