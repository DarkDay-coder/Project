import { Badge, Button, Image } from 'react-bootstrap';
import React, { useCallback, useEffect, useState } from 'react';
import AdminBreadCrumb from '../../../component/admin/admin.bredcrumb.component';
import { toast } from 'react-toastify';
import UserService from '../../../services/user.service';
import DataTable from 'react-data-table-component';
import { NavLink } from 'react-router-dom';
import noImage from './../../../assets/noImg.png';
import { ImagePriview } from '../../../component/imagepreview.component';
import AdminActionButton from '../../../component/admin/admin.actionButton';

const UserListPage = () => {
   let user_svc = new UserService();
   let [data, setData] = useState([]);
   const getUserList = useCallback(async () => {
      try {
         let response = await user_svc.listAllUsers();
         setData(response.data);
      } catch (except) {
         toast.error(except);
      }
   }, []);
   const deleteUser = async (id) => {
      try {
         await user_svc.deleteUserById(id);
      } catch (error) {}
   };
   useEffect(() => {
      // API call to get data
      getUserList();
   }, [getUserList, deleteUser]);

   const columns = [
      {
         name: 'Name',
         selector: (row) => row.name,
         sortable: true,
      },
      {
         name: 'Email',
         selector: (row) => row.email,
      },
      {
         name: 'Role',
         selector: (row) => row.role,
         sortable: true,
      },
      {
         name: 'Image',
         selector: (row) => <ImagePriview url={noImage} />,
      },
      {
         name: 'Member Since',
         selector: (row) => row.createdAt,
         sortable: true,
      },
      {
         name: 'Active/Inactive',
         selector: (row) =>
            row.active ? (
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
               contentType="users"
               submitDelete={deleteUser}
            />
         ),
      },
   ];

   return (
      <>
         <div className="container-fluid px-4">
            <AdminBreadCrumb
               title={'Users List'}
               label={'users'}
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

export default UserListPage;
