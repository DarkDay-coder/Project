import { useCallback, useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import LocationService from '../../../services/location.service';
import { ImagePriview } from '../../../component/imagepreview.component';
import AdminActionButton from '../../../component/admin/admin.actionButton';
import noImage from './../../../assets/noImg.png';
import AdminBreadCrumb from '../../../component/admin/admin.bredcrumb.component';
import { Badge } from 'react-bootstrap';

const LocationListPage = () => {
   let [data, setData] = useState();
   let locationService = new LocationService();

   const getLocationList = useCallback(async () => {
      try {
         let response = await locationService.listAllLocation();
         if (response.status) setData(response.data);
      } catch (execpt) {
         toast.error(execpt);
      }
   }, []);
   useEffect(() => {
      getLocationList();
   }, [getLocationList]);

   const deleteLocation = async (id) => {
      try {
         await locationService.deleteLocationById(id);
      } catch {}
   };

   // Datatable
   const columns = [
      {
         name: 'Name',
         selector: (row) => row.location_name,
         sortable: true,
      },
      {
         name: 'Country',
         selector: (row) => row.country,
         sortable: true,
      },
      {
         name: 'City',
         selector: (row) => row.city,
      },
      {
         name: 'Cover Image',
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
         name: 'Created By',
         selector: (row) => row.createBy,
         sortable: true,
      },
      {
         name: 'Created At',
         selector: (row) => row.createdAt,
      },
      {
         name: 'Status',
         selector: (row) =>
            row.status ? (
               <Badge bg="success">active</Badge>
            ) : (
               <Badge bg="danger">inactive</Badge>
            ),
         sortable: true,
      },
      {
         name: 'Action',
         selector: (row) => (
            <AdminActionButton
               id={row._id}
               contentType="locations"
               submitDelete={deleteLocation}
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
