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
            if (user.data.role === 'admin' || user.data.role === 'lead-guide') {
               setLoading(false);
            } else {
               throw user;
            }
         }
      } catch (except) {
         // user not logged in
         localStorage.removeItem('user');
         localStorage.removeItem('token_tour');

         navigate('/');
      }
   };

   useEffect(() => {
      checkAccessToken();
   }, [checkAccessToken]);

   return loading ? <Loader /> : Compontent;
};

export default AdminPrivateLayout;
