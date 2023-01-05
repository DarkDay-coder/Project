import { NavLink } from 'react-router-dom';
const AdminSidebar = () => {
   return (
      <>
         <div id="layoutSidenav_nav">
            <nav
               className="sb-sidenav accordion sb-sidenav-dark"
               id="sidenavAccordion"
            >
               <div className="sb-sidenav-menu">
                  <div className="nav">
                     <div className="sb-sidenav-menu-heading">Core</div>
                     <NavLink className="nav-link" to="/admin">
                        <div className="sb-nav-link-icon">
                           <i className="icofont-compass-alt"></i>
                        </div>
                        Dashboard
                     </NavLink>
                     <NavLink className="nav-link" to="/admin/users">
                        <div className="sb-nav-link-icon">
                           <i className="icofont-compass-alt"></i>
                        </div>
                        User Management
                     </NavLink>

                     <NavLink className="nav-link" to="/admin/tours">
                        <div className="sb-nav-link-icon">
                           <i className="icofont-compass-alt"></i>
                        </div>
                        Tours Management
                     </NavLink>

                     <NavLink className="nav-link" to="/admin/locations">
                        <div className="sb-nav-link-icon">
                           <i className="icofont-compass-alt"></i>
                        </div>
                        Location Management
                     </NavLink>
                     <NavLink className="nav-link" to="/admin/guides">
                        <div className="sb-nav-link-icon">
                           <i className="icofont-compass-alt"></i>
                        </div>
                        Guide Management
                     </NavLink>

                     <NavLink className="nav-link" to="/admin/bookings">
                        <div className="sb-nav-link-icon">
                           <i className="icofont-compass-alt"></i>
                        </div>
                        Booking Management
                     </NavLink>

                     <NavLink className="nav-link" to="/admin/transactions">
                        <div className="sb-nav-link-icon">
                           <i className="icofont-compass-alt"></i>
                        </div>
                        Transaction Management
                     </NavLink>

                     <a className="nav-link" href="index.html">
                        <div className="sb-nav-link-icon">
                           <i className="icofont-compass-alt"></i>
                        </div>
                        Review Management
                     </a>

                     <a className="nav-link" href="index.html">
                        <div className="sb-nav-link-icon">
                           <i className="icofont-compass-alt"></i>
                        </div>
                        Offer Management
                     </a>

                     <a className="nav-link" href="index.html">
                        <div className="sb-nav-link-icon">
                           <i className="icofont-compass-alt"></i>
                        </div>
                        Blog Management
                     </a>
                  </div>
               </div>
               <div className="sb-sidenav-footer">
                  <div className="small">Logged in as:</div>
                  Sibu Dhital
               </div>
            </nav>
         </div>
      </>
   );
};

export default AdminSidebar;
