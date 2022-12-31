import React from 'react';
import AdminBreadCrumb from '../../../component/admin/admin.bredcrumb.component';
import UserForm from './user-form.component';
import UserService from '../../../services/user.service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UserCreatePage = () => {
   const navigate = useNavigate();
   const submitForm = async (data) => {
      try {
         let userService = new UserService();
         let response = await userService.create(data);
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
               title={'User Create'}
               label="Users"
               showList={true}
               showAdd={false}
            />

            <div className="card mb-4">
               <div className="card-body">
                  <UserForm
                     data={{
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        role: '',
                        image: '',
                        status: '',
                     }}
                     submitForm={submitForm}
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default UserCreatePage;
