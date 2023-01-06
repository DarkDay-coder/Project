import React, { useCallback, useEffect, useState } from 'react';
import AdminBreadCrumb from '../../../component/admin/admin.bredcrumb.component';
import UserForm from '../users/user-form.component';
import UserService from '../../../services/user.service';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const TourEditPage = () => {
   document.title = 'TG | edit tour';
   const navigate = useNavigate();
   let userService = new UserService();
   let params = useParams();
   let [user, setUser] = useState();
   const getUser = useCallback(async () => {
      try {
         let userData = await userService.getUserById(params.id);
         if (userData.status) {
            setUser(userData.data);
            console.log(userData.data);
         } else {
            toast.info("User doesn't exist");
            navigate('/admin/users');
         }
      } catch (error) {
         console.error(error);
      }
   }, []);
   useEffect(() => {
      getUser();
   }, [getUser]);
   // console.log(user);

   const submitForm = async (data) => {
      try {
         let response = await userService.updateUserById(data, params.id);
         toast.success(response.msg);
         navigate('/admin/users');
      } catch (error) {
         toast.error(error);
      }
   };
   return (
      <>
         <div className="container-fluid px-4">
            <AdminBreadCrumb
               title={'Tour Edit'}
               label="Tours"
               showList={true}
               showAdd={false}
            />
            <div className="card mb-4">
               <div className="card-body"></div>
            </div>
         </div>
      </>
   );
};

export default TourEditPage;
