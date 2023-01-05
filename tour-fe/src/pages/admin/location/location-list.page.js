import { useCallback, useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import LocationService from '../../../services/location.service';
import { ImagePriview } from '../../../component/imagepreview.component';
import AdminActionButton from '../../../component/admin/admin.actionButton';
import noImage from './../../../assets/noImg.png';
import AdminBreadCrumb from '../../../component/admin/admin.bredcrumb.component';

const LocationListPage = () => {
   let [data, setData] = useState();
   let locationService = new LocationService();

   //    const deleteBrand = async (id) => {
   //       try {
   //          let del = await brand_svc.deleteBrandById(id);
   //          if (del.status) {
   //             toast.success(del.msg);
   //             getBrandLists();
   //          }
   //       } catch (except) {
   //          toast.warning(except);
   //       }
   //    };

   const getLocationList = useCallback(async () => {
      try {
         let response = await locationService.listAllLocation();
         setData(response.data);
      } catch (execpt) {
         toast.error(execpt);
      }
   }, []);
   useEffect(() => {
      getLocationList();
   }, [getLocationList]);
   const columns = [
      {
         name: 'Name',
         selector: (row) => row.name,
         sortable: true,
      },
      {
         name: 'Country',
         selector: (row) => row.country,
      },
      {
         name: 'Image',
         selector: (row) =>
            row.imageCover ? (
               <ImagePriview
                  url={'http://localhost:3005/images/' + row.imageCover}
               />
            ) : (
               <ImagePriview url={noImage} />
            ),
      },
      {
         name: 'Action',
         selector: (row) => (
            <AdminActionButton
               id={row._id}
               contentType="location"
               // submitDelete={deleteLocation}
            />
         ),
      },
   ];

   return (
      <>
         <div className="container-fluid px-4">
            <AdminBreadCrumb
               title={'Location List'}
               label={'locations'}
               showAdd={true}
            />

            <div className="card mb-4">
               <div className="card-body">
                  <DataTable columns={columns} data={data} pagination />
               </div>
            </div>
         </div>
      </>
   );
};

export default LocationListPage;
