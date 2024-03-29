import React, { useCallback, useEffect, useState } from 'react';
import AdminBreadCrumb from '../../../component/admin/admin.bredcrumb.component';
import UserForm from './user-form.component';
import UserService from '../../../services/user.service';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../component/loader.component';
// import Spinner from

const UserEditPage = () => {
   document.title = 'TG | edit user';
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
         toast.success('user edited successfully..!!');
         navigate('/admin/users');
      } catch (error) {
         toast.error(error);
      }
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
                  {user ? (
                     <UserForm
                        data={user}
                        submitForm={submitForm}
                        label="Submit"
                     />
                  ) : (
                     <Loader />
                  )}
               </div>
            </div>
         </div>
      </>
   );
};

export default UserEditPage;
