import { Fragment } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../assets/style/admin.css';
const AdminSidebar = () => {
   return (
      <Fragment>
         <div id="layoutSidenav_nav">
            <nav
               className="sb-sidenav accordion sb-sidenav-dark"
               id="sidenavAccordion"
            >
               <div className="sb-sidenav-menu">
                  <div className="nav">
                     <NavLink className="nav-link" to="/admin">
                        <div className="sb-nav-link-icon">
                           <i className="icofont-compass-alt"></i>
                        </div>
                        Dashboard
                     </NavLink>
                     <NavDropdown
                        title={
                           <div>
                              <i className="icofont-ui-user"></i> Role
                              Management
                           </div>
                        }
                        id="collasible-nav-dropdown"
                     >
                        <NavDropdown.Item>
                           <NavLink
                              className="nav-link text-dark"
                              to="/admin/role/users"
                           >
                              <div className="sb-nav-link-icon">
                                 <i className="icofont-compass-alt text-dark"></i>
                              </div>
                              User
                           </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                           <NavLink
                              className="nav-link text-dark"
                              to="/admin/role/guide"
                           >
                              <div className="sb-nav-link-icon">
                                 <i className="icofont-compass-alt text-dark"></i>
                              </div>
                              Guide
                           </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                           <NavLink
                              className="nav-link text-dark"
                              to="/admin/role/lead-guide"
                           >
                              <div className="sb-nav-link-icon">
                                 <i className="icofont-compass-alt text-dark"></i>
                              </div>
                              Lead-Guide
                           </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                           <NavLink
                              className="nav-link text-dark"
                              to="/admin/role/admin"
                           >
                              <div className="sb-nav-link-icon">
                                 <i className="icofont-compass-alt text-dark"></i>
                              </div>
                              Admin
                           </NavLink>
                        </NavDropdown.Item>

                        {/* <li className="nav-item">
                           <NavLink className="nav-link" to="/admin/role/users">
                              <div className="sb-nav-link-icon">
                                 <i className="icofont-compass-alt"></i>
                              </div>
                              User
                           </NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/admin/role/guide">
                              <div className="sb-nav-link-icon">
                                 <i className="icofont-compass-alt"></i>
                              </div>
                              Guide
                           </NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink
                              className="nav-link"
                              to="/admin/role/lead-guide"
                           >
                              <div className="sb-nav-link-icon">
                                 <i className="icofont-compass-alt"></i>
                              </div>
                              Lead-Guide
                           </NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/admin/role/admin">
                              <div className="sb-nav-link-icon">
                                 <i className="icofont-compass-alt"></i>
                              </div>
                              Admin
                           </NavLink>
                        </li> */}
                     </NavDropdown>
                     {/* <div className="sidebar-heading">Role Management</div> */}

                     {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/role/users">
                           <div className="sb-nav-link-icon">
                              <i className="icofont-compass-alt"></i>
                           </div>
                           User
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/role/guide">
                           <div className="sb-nav-link-icon">
                              <i className="icofont-compass-alt"></i>
                           </div>
                           Guide
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink
                           className="nav-link"
                           to="/admin/role/lead-guide"
                        >
                           <div className="sb-nav-link-icon">
                              <i className="icofont-compass-alt"></i>
                           </div>
                           Lead-Guide
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/role/admin">
                           <div className="sb-nav-link-icon">
                              <i className="icofont-compass-alt"></i>
                           </div>
                           Admin
                        </NavLink>
                     </li> */}

                     <NavLink className="nav-link" to="/admin/locations">
                        <div className="sb-nav-link-icon">
                           <i className="icofont-compass-alt"></i>
                        </div>
                        Location Management
                     </NavLink>
                     <NavLink className="nav-link" to="/admin/tours">
                        <div className="sb-nav-link-icon">
                           <i className="icofont-compass-alt"></i>
                        </div>
                        Tours Management
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
      </Fragment>
   );
};

export default AdminSidebar;
