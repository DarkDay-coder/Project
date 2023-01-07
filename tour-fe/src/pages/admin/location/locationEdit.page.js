import React, { useCallback, useEffect, useState } from 'react';
import AdminBreadCrumb from '../../../component/admin/admin.bredcrumb.component';
import LocationService from '../../../services/location.service';
import LocationForm from './location-form.page';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../component/loader.component';
import AuthService from '../../../services/auth.service';

const LocationEditPage = () => {
   document.title = 'TG | edit location';
   const navigate = useNavigate();
   let loc_svc = new LocationService();
   let { id } = useParams();
   let [location, setLocation] = useState();
   const getLocation = useCallback(async () => {
      try {
         let response = await loc_svc.getLocationById(id);
         if (response.status) {
            setLocation(response.data);
         } else {
            toast.error(response.msg);
         }
      } catch (error) {
         navigate('/admin/locations');
      }
   }, []);
   let [user, setUser] = useState();
   const getMe = async () => {
      const auth_svc = new AuthService();
      let user = await auth_svc.getRequest('/users/me', true);
      setUser(user.data);
   };

   useEffect(() => {
      getLocation();
      getMe();
   }, [getLocation]);

   console.log(user);
   const submitForm = async (data) => {
      try {
         let response = await loc_svc.updateLocationById(data, id);
         if (response.status) {
            toast.success('data updated successfully!!');
            navigate('/admin/locations');
         } else {
            throw response;
         }
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
                  {location && user ? (
                     <LocationForm
                        data={location}
                        submitForm={submitForm}
                        label="Edit"
                        user={user}
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

export default LocationEditPage;
