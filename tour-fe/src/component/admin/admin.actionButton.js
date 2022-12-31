import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminActionButton = ({ id, contentType, submitDelete }) => {
   const handleDelete = (e) => {
      e.preventDefault();
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
         if (result.isConfirmed) {
            submitDelete(id);
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
         }
      });
   };

   return (
      <>
         <NavLink
            to={`/admin/${contentType}/${id}/edit`}
            className="btn btn-sm btn-primary rounded-circle mx-3"
         >
            <i className="icofont-edit-alt"></i>
         </NavLink>
         <a
            href={`/admin/${contentType}/delete`}
            onClick={handleDelete}
            className="btn btn-sm btn-danger rounded-circle"
         >
            <i className="icofont-trash"></i>
         </a>
      </>
   );
};

export default AdminActionButton;
