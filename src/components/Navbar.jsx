import { NavLink } from "react-router-dom";

export default function Navbar(){


    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"24px" , width:"100%",height:"70px" ,backgroundColor:"deepskyblue"}}>

        <NavLink to={"/search/all"} >all</NavLink>
        <NavLink to={"/search/html"} >html</NavLink>
        <NavLink to={"/search/javascript"} >javascript</NavLink>
        <NavLink to={"/search/css"} >css</NavLink>
        
    </div>
}