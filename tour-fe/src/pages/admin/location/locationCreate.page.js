import React, { useEffect, useState } from 'react';
import AdminBreadCrumb from '../../../component/admin/admin.bredcrumb.component';
import LocationService from '../../../services/location.service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import LocationForm from './location-form.page';
import Loader from '../../../component/loader.component';
import AuthService from '../../../services/auth.service';

const LocationCreatePage = () => {
   document.title = 'TG | create new location';
   const navigate = useNavigate();
   const submitForm = async (data) => {
      try {
         let loc_svc = new LocationService();
         let response = await loc_svc.create(data);
         console.log(response);
         toast.success('new location added!!');
         navigate('/admin/locations');
      } catch (error) {
         toast.error(error);
      }
   };
   let [user, setUser] = useState();
   const getMe = async () => {
      const auth_svc = new AuthService();
      let user = await auth_svc.getRequest('/users/me', true);
      setUser(user.data);
   };
   useEffect(() => {
      getMe();
   }, []);

   return (
      <>
         <div className="container-fluid px-4">
            <AdminBreadCrumb
               title={'Location Create'}
               label="Locations"
               showList={true}
               showAdd={false}
            />

            <div className="card mb-4">
               <div className="card-body">
                  {user ? (
                     <LocationForm
                        data={{
                           location_name: '',
                           country: '',
                           status: '',
                           createdBy: '',
                           imageCover: '',
                           city: '',
                        }}
                        submitForm={submitForm}
                        label="Create"
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

export default LocationCreatePage;
