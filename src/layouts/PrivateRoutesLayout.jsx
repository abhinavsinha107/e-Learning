import { Outlet, useLocation, Navigate } from "react-router-dom";
import { projectAuth } from "../firebase/config";

const PrivateRoutesLayout = () => {
    const location = useLocation();
    // console.log(projectAuth.currentUser);

  return projectAuth.currentUser ? (<Outlet />) : (<Navigate to='/authentication' state={{from: location}} replace />)
}
export default PrivateRoutesLayout