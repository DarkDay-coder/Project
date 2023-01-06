import React from 'react';
import AdminBreadCrumb from '../../../component/admin/admin.bredcrumb.component';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import TourService from '../../../services/tour.service';
import TourForm from './tour-form.component';

const TourCreatePage = () => {
   document.title = 'TG | create new tour';
   const navigate = useNavigate();
   const submitForm = async (data) => {
      try {
         let tourService = new TourService();
         let response = await tourService.create(data);
         toast.success('new tour created !!');
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
                  <TourForm
                     data={{
                        tour_name: '',
                        description: '',
                        summary: '',
                        startDates: '',
                        duration: '',
                        maxGroupSize: '',
                        difficulty_id: '',
                        price: '',
                        discount: '',
                        imageCover: '',
                        images: '',
                        startLocation_id: '',
                        locations_id: '',
                        guides_id: '',
                        createdBy_id: '',
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
