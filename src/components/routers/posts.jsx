import { Outlet, useSearchParams } from "react-router-dom";

export default function Posts(){
    const [searchParams, setSearchParams] = useSearchParams(); 
    const showActiveUsers = searchParams.get('filter') === 'active';
    return(
        <div>
            <h1>This is the Post page</h1>
            <Outlet />
            <div>
                <button onClick={()=>setSearchParams({ filter: "active"})}>Active Users</button>
                <button onClick={()=>setSearchParams({})}>Reset Filter</button>
            </div>
            {showActiveUsers ? (<h2>Showing active users</h2>) : (<h2>Showing all users</h2>)}
        </div>
    )
}