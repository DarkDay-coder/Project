import React, { useCallback, useEffect, useState } from 'react';
import AdminBreadCrumb from '../../../component/admin/admin.bredcrumb.component';
import LocationService from '../../../services/location.service';
import LocationForm from './location-form.page';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const UserEditPage = () => {
   document.title = 'TG | edit user';
   const navigate = useNavigate();
   let loc_svc = new LocationService();
   let params = useParams();
   let [location, setLocation] = useState();
   const getLocation = useCallback(async () => {
      try {
         let locationData = await loc_svc.getLocationById(params.id);
         if (locationData.status) {
            setLocation(locationData.data);
            console.log(locationData.data);
         } else {
            toast.info("data doesn't exist");
            navigate('/admin/locations');
         }
      } catch (error) {
         console.error(error);
      }
   }, []);
   useEffect(() => {
      getLocation();
   }, [getLocation]);

   const submitForm = async (data) => {
      try {
         let response = await loc_svc.updateLocationById(data, params.id);
         toast.success('data updated successfully!!');
         navigate('/admin/locations');
      } catch (error) {
         toast.error(error);
      }
   };
   return (
      <>
         <div className="container-fluid px-4">
            <AdminBreadCrumb
               title={'Location Edit'}
               label="Locations"
               showList={true}
               showAdd={false}
            />
            <div className="card mb-4">
               <div className="card-body">
                  <LocationForm data={location} submitForm={submitForm} />
               </div>
            </div>
         </div>
      </>
   );
};

export default UserEditPage;
