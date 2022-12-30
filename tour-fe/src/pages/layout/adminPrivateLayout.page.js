import { useEffect, useState } from "react";
import AuthService from "../../services/auth.service";

const AdminPrivateLayout = ({Compontent}) => {

    const [loading, setLoading] = useState(true);

    const checkAccessToken = async () => {
        try{
            const auth_svc = new AuthService();
            let user = await auth_svc.getRequest('/me',true);
            if(user.status){
                setLoading(false)
            } else {
                throw user;
            }
        } catch(except) {
            // user not logged in

            localStorage.removeItem("_at")
            localStorage.removeItem("_au");

            window.location.href= "/login"
            // return <Navigate to="/login"></Navigate>
            // setIsLoggedIn(false);
        }
    }

    useEffect(() => {
        checkAccessToken();
    }, []);

    return loading ? "loading..." : Compontent
        
    
}

export default AdminPrivateLayout;