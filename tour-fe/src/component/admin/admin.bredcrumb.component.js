import { NavLink } from 'react-router-dom';
const AdminBreadCrumb = ({ title, label, showAdd, showList }) => {
   return (
      <>
         <h1 className="mt-4">
            {title}

            {showAdd ? (
               <>
                  <NavLink
                     to={`/admin/${label.toLowerCase()}/create`}
                     className="btn btn-sm btn-success float-end"
                  >
                     <i className="fa fa-plus"></i> Add {label}
                  </NavLink>
               </>
            ) : (
               <></>
            )}
         </h1>

         <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
               <NavLink to="/admin">Dashboard</NavLink>
            </li>
            {showList ? (
               <>
                  <li className="breadcrumb-item">
                     <NavLink to={`/admin/${label.toLowerCase()}`}>
                        {label} List
                     </NavLink>
                  </li>
               </>
            ) : (
               ''
            )}
            <li className="breadcrumb-item active">{title}</li>
         </ol>
      </>
   );
};

export default AdminBreadCrumb;
