import React, { useCallback, useEffect, useState } from 'react';
import AdminBreadCrumb from '../../../component/admin/admin.bredcrumb.component';
import UserForm from './user-form.component';
import UserService from '../../../services/user.service';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const UserEditPage = () => {
   document.title = 'TG | edit user';

   const navigate = useNavigate();
   let [user, setUser] = useState();
   let userService = new UserService();
   let params = useParams();

   const getUser = useCallback(async () => {
      try {
         let userData = await userService.getUserById(params.id);
         if (userData) {
            setUser(userData.data);
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
   }, []);

   const submitForm = async (data) => {
      // try {
      //    let response = await userService.updateUserById(data, params.id);
      //    toast.success(response.msg);
      //    navigate('/admin/users');
      // } catch (error) {
      //    toast.error(error);
      // }
   };
   return (
      <>
         <div className="container-fluid px-4">
            <AdminBreadCrumb
               title={'User Edit'}
               label="Users"
               showList={true}
               showAdd={false}
            />
            <div className="card mb-4">
               <div className="card-body">
                  <UserForm data={user} submitForm={submitForm} />
               </div>
            </div>
         </div>
      </>
   );
};

export default UserEditPage;
