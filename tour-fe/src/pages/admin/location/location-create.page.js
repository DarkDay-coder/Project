import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import LocationService from '../../../services/location.service';
import AdminBreadCrumb from '../../../component/admin/admin.bredcrumb.component';
import LocationForm from './location-form.component';

const LocationCreatePage = () => {
   let navigate = useNavigate();
   const submitForm = async (data) => {
      try {
         let locationService = new LocationService();
         let response = await locationService.create(data);
         toast.success('new location created');
         navigate('/admin/locations');
      } catch (err) {
         toast.error(err);
      }
   };
   return (
      <>
         <div className="container-fluid px-4">
            <AdminBreadCrumb
               title={'Location Create'}
               label="Location"
               showList={true}
               showAdd={false}
            />
            <div className="card mb-4">
               <div className="card-body">
                  <LocationForm
                     data={{ name: '', country: '', imageCover: '' }}
                     submitForm={submitForm}
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default LocationCreatePage;
