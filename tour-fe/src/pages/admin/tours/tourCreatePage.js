import React from 'react';
import AdminBreadCrumb from '../../../component/admin/admin.bredcrumb.component';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import UserForm from '../users/user-form.component';
import TourService from '../../../services/tour.service';

const TourCreatePage = () => {
   document.title = 'TG | create new tour';
   const navigate = useNavigate();
   const submitForm = async (data) => {
      try {
         let tourService = new TourService();
         let response = await tourService.create(data);
         toast.success(response.msg);
         navigate('/admin/tours');
      } catch (error) {
         toast.error(error);
      }
   };

   return (
      <>
         <div className="container-fluid px-4">
            <AdminBreadCrumb
               title={'Tour Create'}
               label="Tours"
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

export default TourCreatePage;
