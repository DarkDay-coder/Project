import { Badge } from 'react-bootstrap';
import React, { useCallback, useEffect, useState } from 'react';
import AdminBreadCrumb from '../../../component/admin/admin.bredcrumb.component';
import { toast } from 'react-toastify';
import TourService from '../../../services/tour.service';
import DataTable from 'react-data-table-component';
import noImage from './../../../assets/noImg.png';
import { ImagePriview } from '../../../component/imagepreview.component';
import AdminActionButton from '../../../component/admin/admin.actionButton';
import { NavLink } from 'react-router-dom';

const TourListPage = () => {
   document.title = 'TG | Tour List';
   let tour_svc = new TourService();
   let [data, setData] = useState([]);
   const getTourList = useCallback(async () => {
      try {
         let response = await tour_svc.listAllTours();
         setData(response.data);
      } catch (except) {
         toast.error(except);
      }
   }, []);
   const deleteTours = async (id) => {
      console.log('clicked on delete');
      // try {
      //    await user_svc.deleteUserById(id);
      // } catch (error) {}
   };
   useEffect(() => {
      // API call to get data
      getTourList();
   }, [getTourList]);

   const columns = [
      {
         name: 'Name',
         selector: (row) => row.name,
         sortable: true,
      },
      {
         name: 'Summary',
         selector: (row) => row.summary,
      },
      {
         name: 'Cover Image',
         selector: (row) =>
            row.image ? (
               <ImagePriview
                  url={'http://localhost:3005/images/' + row.image}
               />
            ) : (
               <ImagePriview url={noImage} />
            ),
      },
      {
         name: 'Start Dates',
         selector: (row) => row.startDates,
         sortable: true,
      },
      {
         name: 'Start Location',
         selector: (row) => row.startLocation,
         sortable: true,
      },
      {
         name: 'duration',
         selector: (row) => row.duration + ' days',
         sortable: true,
      },
      {
         name: 'Group Limit',
         selector: (row) => row.maxGroupSize + ' people',
         sortable: true,
      },
      {
         name: 'Difficulty',
         selector: (row) => row.difficulty,
         sortable: true,
      },
      {
         name: 'Price',
         selector: (row) => row.price + ' $',
         sortable: true,
      },

      {
         name: 'View Details',
         selector: (row) => (
            <NavLink to={`/admin/tours/${row.slug}`}>Know More</NavLink>
         ),
      },
      {
         name: 'Action',
         selector: (row) => (
            <AdminActionButton
               id={row._id}
               contentType="tours"
               submitDelete={deleteTours}
            />
         ),
      },
   ];
   return (
      <>
         <div className="container-fluid px-4">
            <AdminBreadCrumb
               title={'Tours List'}
               label={'tours'}
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

export default TourListPage;
