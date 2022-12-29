import { Button } from 'react-bootstrap';
import React from 'react';
import AdminBreadCrumb from '../../../component/admin/admin.bredcrumb.component';

const UserListPage = () => {
   const date = new Date();

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
                  <table className="table table-sm table-bordered table-hover">
                     <thead className="table-dark">
                        <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Role</th>
                           <th>Member since</th>
                           <th>Active/Inactive</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>sibu</td>
                           <td>hell in cell</td>
                           <td>admin</td>
                           <td>{date.toISOString()}</td>
                           <td>Y/N</td>
                           <td>
                              <Button>
                                 {' '}
                                 <i className="icofont-trash"></i>{' '}
                              </Button>
                              <Button>
                                 <i className="icofont-eye"></i>
                              </Button>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </>
   );
};

export default UserListPage;
