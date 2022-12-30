import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../component/loader.component';
import AuthService from '../../services/auth.service';

const AdminPrivateLayout = ({ Compontent }) => {
   const navigate = useNavigate();

   const [loading, setLoading] = useState(true);

   const checkAccessToken = async () => {
      try {
         const auth_svc = new AuthService();
         let user = await auth_svc.getRequest('/users/me', true);
         if (user.status) {
            setLoading(false);
            // setIsLoggedIn(true);
         } else {
            throw user;
         }
      } catch (except) {
         // user not logged in
         localStorage.removeItem('accessToken');
         localStorage.removeItem('localUser');

         navigate('/login');
      }
   };

   useEffect(() => {
      checkAccessToken();
   }, []);

   return loading ? <Loader /> : Compontent;
};

export default AdminPrivateLayout;
